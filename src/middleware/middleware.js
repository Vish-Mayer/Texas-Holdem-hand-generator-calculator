export const middleware = (req, res, next) => {
  const { players } = req.body;

  if (!Number.isInteger(players)) {
    return res.status(400).send({ msg: "Incorrect data type" });
  }
  next();
};
