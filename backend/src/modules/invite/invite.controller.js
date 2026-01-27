const inviteService = require('./invite.service');

const inviteUserController = async (req, res) => {
  try {
    const { email } = req.body;

    await inviteService.inviteUserByAdmin(email);

    res.status(200).json({
      success: true,
      message: 'Invitation email sent successfully'
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = {
  inviteUserController
};
