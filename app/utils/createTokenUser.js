const createTokenUser = (user) => {
  return {
    email: user.email,
    name: user.name,
    userId: user._id,
    role: user.role,
    organizer: user.organizer,
  };
};

const createTokenParticipant = (participant) => {
  return {
    lastName: participant.lastName,
    participantId: participant._id,
    firstName: participant.firstName,
    email: participant.email,
  };
};

module.exports = { createTokenUser, createTokenParticipant };
