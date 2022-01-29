const { Conflict } = require("http-errors");
const { User } = require("../../models/contacts");

const signup = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict("Email in use");
  }
  const newUser = new User({ email });
  newUser.setPassword(password);
  await newUser.save();
  const { subscription } = newUser;
  res.status(201).json({
    user: {
      email: email,
      subscription: subscription
    }
  });
};

module.exports = signup;
