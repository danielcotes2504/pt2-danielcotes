import express, { Application } from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import cors from "cors";
import { config } from "dotenv";

import prestamoRoutes from "./routes/prestamoRoutes";

config();

const app: Application = express();

// Settings
app.set("port", parseInt(process.env.PORT || "3000"));

const corsOptions: cors.CorsOptions = {
  origin: function (origin, callback) {
    return callback(null, true);
  },
  credentials: true,
};

//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  morgan(":method :url :status :response-time ms - :remote-user [:date[clf]]")
);
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/", prestamoRoutes);

export default app;
