const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { handleMongooseError, patterns } = require("../helpers");

const userSchema = new Schema(
  {
    name: {
      type: String,
      require: [true, "Define user name"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      match: patterns.email,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Set password for user"],
      min: 6,
      max: 24,
    },
    token: {
      type: String,
      default: "",
    },
    avatarURL: {
      type: String,
      required: true,
    },
    verify: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      required: [true, 'Verification token is required'],
    },
    restorePasswordToken: {
      type: String,
      default: null,
    }
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", handleMongooseError);

const User = model("user", userSchema);

const register = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().pattern(patterns.email).required(),
  password: Joi.string().min(6).max(24).required(),
});

const login = Joi.object({
  email: Joi.string().pattern(patterns.email).required(),
  password: Joi.string().min(6).max(24).required(),
});


const emailRequest = Joi.object({
  email: Joi.string().pattern(patterns.email).required()
})

const updatePassword = Joi.object({
  token: Joi.string().required(),
  password: Joi.string().min(6).max(24).required(),
});

const schemas = {
  register,
  login,
  emailRequest,
  updatePassword,
};

module.exports = {
  schemas,
  User,
};
