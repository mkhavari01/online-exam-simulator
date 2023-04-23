import { LogModel } from "../models/log.model.js";

const logRequest = async (req, res, next) => {
  try {
    const log = new LogModel({
      method: req.method,
      url: req.url,
      ip: req.ip,
      path: req.path,
      requestBody: req.body,
      responseStatus: res.statusCode,
      responseHeaders: res.getHeaders(),
      responseBody: res.body,
    });
    await log.save();
    next();
  } catch (error) {
    console.error(error);
    next();
  }
};

export { logRequest };
