import winston from "winston";
const { combine, timestamp, printf, colorize } = winston.format;

export const logger = winston.createLogger({
  level: "debug",
  format: combine(
    colorize(),
    timestamp(),
    printf(({ level, message, timestamp }) => {
      if (typeof message === "object") {
        message = JSON.stringify(message, null, 2);
      }
      return `[${timestamp}] ${level}: ${message}`;
    })
  ),
  transports: [new winston.transports.Console({})],
});
