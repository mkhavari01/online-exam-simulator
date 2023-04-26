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

const containerConfig = {
  dbUrl: "mongodb://mongo:27017/online-exam",
  port: 3001,
};

let config;

if (process.env.NODE_ENV === "production") {
  config = prodConfig;
} else if (process.env.NODE_ENV === "local") {
  config = devConfig;
} else if (process.env.NODE_ENV === "container") {
  config = containerConfig;
}

export { config };
