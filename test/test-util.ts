import { prismaClient } from "../src/application/database";
import bcrypt from "bcrypt";
import { User } from "@prisma/client";

export class UserTest {
  static async delete() {
    await prismaClient.user.deleteMany({
      where: {
        username: "test",
      },
    });
  }

  static async create() {
    await prismaClient.user.create({
      data: {
        username: "test",
        password: await Bun.password.hash("test"),
        name: "test",
        token: "test",
      },
    });
  }
  static async get(): Promise<User> {
    const user = await prismaClient.user.findFirst({
      where: {
        username: "test",
      },
    });
    if (!user) {
      throw new Error("User Is Not Found!!");
    }
    return user;
  }
}
