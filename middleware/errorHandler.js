export const errorHandlerMiddleware = (err, req, res, next) => {
  console.log(err);
  return res.status(500).json({ msg: "there was an err" });
};
