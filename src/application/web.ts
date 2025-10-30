import express from "express";
import { publicRouter } from "../route/public-api";
import { errorMiddleware } from "../middleware/error-midleware";
import { apiRouter } from "../route/api";

export const web = express();
web.use(express.json());

// 🟡 Tambahkan di sini (sebelum router lain)
// web.use((req, res, next) => {
//   console.log("➡️ Incoming path:", req.path);
//   next();
// });

web.use(express.json());
web.use(publicRouter);
web.use("/api", apiRouter);
web.use(errorMiddleware);
