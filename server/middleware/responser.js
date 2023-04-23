const successResponse = (req, res, data) => {
  console.log("reqis", req);
  return res.status(201).json({
    status: "success",
    data,
  });
};

const errorResponse = (res, err) => {
  console.log("error :", err);
  return res.status(500).json({
    status: "error",
    data: err.message,
  });
};

export { successResponse, errorResponse };
