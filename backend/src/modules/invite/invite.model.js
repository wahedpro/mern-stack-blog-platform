const mongoose = require('mongoose');

const inviteSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  token: {
    type: String,
    required: true
  },
  expiresAt: {
    type: Date,
    required: true
  },
  isUsed: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

module.exports = mongoose.model('Invite', inviteSchema);
