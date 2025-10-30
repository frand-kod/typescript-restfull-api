import { z, ZodType } from "zod";

export class Validation {
  static validate<T>(schema: z.ZodType<T>, data: unknown): T {
    return schema.parse(data);
  }
}
