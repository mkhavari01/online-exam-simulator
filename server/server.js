import express, { urlencoded } from "express";
import cors from "cors";
import { connect } from "mongoose";
import { config } from "./config/config.js";

import { userRouter } from "./routes/user.router.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: true }));

app.use("/api/user", userRouter);

connect(config.dbUrl)
  .then(() => {
    app.listen(config.port, () =>
      console.log(`server is listening on port ${config.port}`)
    );
  })
  .catch((err) => {
    console.log("we have an error in connceting to db", err);
  });
