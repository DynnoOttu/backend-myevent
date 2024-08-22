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

  delete users._doc.password;

  return users;
};

const createUsers = async (req) => {
  const { name, email, password, confirmPassword, role, organizer } = req.body;

  if (password !== confirmPassword) {
    throw new BadRequestError(
      "Password and confirmation password do not match."
    );
  }

  const result = await Users.create({
    name,
    email,
    organizer: req.user.organizer,
    password,
    role,
  });

  return result;
};

const getAllUsers = async () => {
  const result = await Users.find();

  return result;
};

module.exports = { createCMSOrgizer, createUsers, getAllUsers };
