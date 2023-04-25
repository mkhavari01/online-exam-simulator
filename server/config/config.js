import * as dotenv from "dotenv";
dotenv.config();

const devConfig = {
  dbUrl: "mongodb://localhost:27017/online-exam",
  port: 3001,
};

const prodConfig = {
  dbUrl:
    "mongodb+srv://mkhavari01:1234@cluster0.kdhgz5v.mongodb.net/online-exam",
  port: 3001,
};

const config = process.env.NODE_ENV === "production" ? prodConfig : devConfig;

export { config };
