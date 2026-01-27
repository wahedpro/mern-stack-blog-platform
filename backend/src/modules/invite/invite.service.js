const Invite = require('./invite.model');
const User = require('../auth/auth.model');
const generateInviteToken = require('../../utils/generateInviteToken');
const sendEmail = require('../../utils/sendEmail');

const inviteUserByAdmin = async (email) => {
  // already registered?
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error('User already registered');
  }

  // already invited?
  const existingInvite = await Invite.findOne({ email, isUsed: false });
  if (existingInvite) {
    throw new Error('Invite already sent');
  }

  const token = generateInviteToken();
  const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000);

  await Invite.create({
    email,
    token,
    expiresAt
  });

  const inviteLink = `http://localhost:5173/register?token=${token}`;

  await sendEmail(
    email,
    'You are invited to join our Blog Platform',
    `Click the link to register: ${inviteLink}`
  );

  return true;
};

module.exports = {
  inviteUserByAdmin
};
