import express, { urlencoded } from "express";
import cors from "cors";
import { connect } from "mongoose";
import { config } from "./config.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: true }));

connect(config.dbUrl)
  .then(() => {
    app.listen(config.port, () =>
      console.log(`server is listening on port ${config.port}`)
    );
  })
  .catch((err) => {
    console.log("we have an error in connceting to db", err);
  });
