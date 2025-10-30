import { PrismaClient } from "@prisma/client/extension";
import { prismaClient } from "../application/database";
import { ResponseError } from "../error/response-error";
import {
  toUserResponse,
  type CreateUserRequest,
  type LoginUserRequest,
  type UserResponse,
} from "../model/user-model";
import { UserValidation } from "../validation/user-validation";
import { Validation } from "../validation/validation";
import bcrypt from "bcrypt";
import type { User } from "@prisma/client";

export class UserService {
  static async register(req: CreateUserRequest): Promise<UserResponse> {
    const registerRequest = Validation.validate(UserValidation.REGISTER, req);

    //hitung apakah ada user yang sama terdaftar
    const totalUserWithSameUser = await prismaClient.user.count({
      where: {
        username: registerRequest.username,
      },
    });
    if (totalUserWithSameUser != 0) {
      throw new ResponseError(400, "Username Already Exist");
    }
    // ubah plain password jadi make bawaan bun
    registerRequest.password = await Bun.password.hash(
      registerRequest.password
    );

    const user = await prismaClient.user.create({
      data: registerRequest,
    });
    return toUserResponse(user);
  }
  static async login(req: LoginUserRequest): Promise<UserResponse> {
    const token = Bun.randomUUIDv7();
    const loginRequest = Validation.validate(UserValidation.LOGIN, req);
    // cek apakah ada usernya
    let user = await prismaClient.user.findUnique({
      where: {
        username: loginRequest.username,
      },
    });
    //lempar error jika ngga ada
    if (!user) {
      throw new ResponseError(401, "User or Password is wrong!!");
    }

    // cek passwordnya setelah username valid
    const isPasswordValid = await Bun.password.verify(
      loginRequest.password,
      user.password
    );

    if (!isPasswordValid) {
      throw new ResponseError(401, "User or Password is wrong!!");
    }

    user = await prismaClient.user.update({
      where: {
        username: loginRequest.username,
      },
      data: {
        token: token,
      },
    });
    const res = toUserResponse(user);
    //paksa terima token karena memang pasti sudah di buat
    res.token = user.token!;
    return res;
  }

  static async get(user: User): Promise<UserResponse> {
    return toUserResponse(user);
  }
}
