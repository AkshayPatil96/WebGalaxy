const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },

    number: {
      type: String,
      required: true,
      unique: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    userType: {
      type: String,
      default: "WebHunter",
      enum: ["WebGuru", "WebMaster", "WebHunter"],
    },

    webArts: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Topic",
    },

    chatRoom: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Rooms",
    },

    webtalk: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Topic",
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

// * pre save middleware to hash the password before saving the new password
userSchema.pre("save", async function (next) {
  try {
    if (this.isNew) {
      const hashed = await bcrypt.hashSync(this.password, 10);
      this.password = hashed;
    }
    next();
  } catch (error) {
    next(error);
  }
});

// * function for comparing and checking password while logging in
userSchema.method.isValidPassword = async function (password) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (error) {
    throw error;
  }
};

const User = mongoose.model("user", userSchema);

module.exports = User;
