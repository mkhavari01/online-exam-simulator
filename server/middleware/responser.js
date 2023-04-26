const successResponse = (res, data, statusCode) => {
  return res.status(statusCode || 200).json({
    status: "success",
    data,
  });
};

const errorResponse = (res, err) => {
  return res.status(+err.message.split(",")[1] || 500).json({
    status: "error",
    data: err.message.split(",")[0] || err.message,
  });
};

export { successResponse, errorResponse };
