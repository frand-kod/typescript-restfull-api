import { PrismaClient } from "@prisma/client";
import { logger } from "./logger";
// instalasi prisma client adapter

export const prismaClient = new PrismaClient({
  log: [
    {
      emit: "event",
      level: "query",
    },
    {
      emit: "event",
      level: "error",
    },
    {
      emit: "event",
      level: "info",
    },
    {
      emit: "event",
      level: "warn",
    },
  ],
});

//logger event databases
prismaClient.$on("error", (e: any) => {
  logger.error(e);
});
prismaClient.$on("warn", (e: any) => {
  logger.warn(e);
});
prismaClient.$on("info", (e: any) => {
  logger.info(e);
});
prismaClient.$on("query", (e: any) => {
  logger.debug(
    `Query: ${e.query} Params: ${e.params} Duration: ${e.duration}ms`
  );
});
