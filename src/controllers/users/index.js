const { pick } = require("lodash");

const { User } = require("../../db/models");

const INVALID_ID = "Invalid ID";

const getUserById = async (req, res, _next) => {
  const userId = req.params.id;

  if (!User.isValidId(userId)) {
    return res.status(400).json({ error: INVALID_ID });
  }

  const user = await User.findById(userId);

  if (user && user.age > 21) {
    const formattedUser = pick(user, ["name", "age", "email"]);
    return res.status(200).json({ user: formattedUser });
  } else {
    return res.status(404).json({ message: "not found" });
  }
};

module.exports = {
  getUserById,
};
