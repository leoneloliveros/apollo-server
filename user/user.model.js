const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      uppercase: true,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.pre('save', async function (next) {
  try {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    next();
  } catch (err) {
    next(err);
  }
});

UserSchema.statics.authenticate = async (email, password) => {
  const user = await User.findOne({
    email,
  });
  if (user) {
    const result = await bcrypt.compare(password, user.password);
    return result === true ? user : null;
  }

  return null;
};

/**
 * Virtuals
 */

// Public profile information
UserSchema.virtual('profile').get(function () {
  return { email: this.email, username: this.username };
});

const User = mongoose.model('User', UserSchema);

module.exports = User;