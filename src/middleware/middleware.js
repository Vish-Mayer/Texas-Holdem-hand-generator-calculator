export const middleware = (req, res, next) => {
  if (!req.body.players) {
    req.body.players = 2;
  }

  if (!Number.isInteger(req.body.players)) {
    return res.status(400).send({ msg: "Incorrect data type" });
  }
  next();
};
