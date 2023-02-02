const { generateTokens } = require("../../helpers/generateTokens");

const User = require("../../models/users");

const { BASE_URL, PORT } = process.env;

const google = async (req, res) => {
  const { _id } = req.user;

  const { token, refreshToken } = await generateTokens(_id);
  await User.findByIdAndUpdate(_id, { token, refreshToken });

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });

  res.redirect(`${BASE_URL}:${PORT}?token=${token}`);
};

module.exports = google;