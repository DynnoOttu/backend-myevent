const createTokenUser = (user) => {
  return {
    name: user.name,
    userId: user._id,
    role: user.role,
    organizer: user.organizer,
  };
};

module.exports = createTokenUser;
