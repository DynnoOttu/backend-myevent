const Users = require("../../api/v1/users/model");
const Organizers = require("../../api/v1/organizers/model");
const { BadRequestError } = require("../../errors");

const createCMSOrgizer = async (req) => {
  const { name, email, password, confirmPassword, role, organizer } = req.body;

  if (password !== confirmPassword) {
    throw new BadRequestError(
      "Password and confirmation password do not match."
    );
  }

  const result = await Organizers.create({ organizer });

  const users = await Users.create({
    name,
    email,
    password,
    role,
    organizer: result._id,
  });

  console.log("users", users);

  delete users._doc.password;

  return users;
};

module.exports = { createCMSOrgizer };
