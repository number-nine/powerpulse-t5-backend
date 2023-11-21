const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { handleMongooseError } = require("../helpers");

const sexType = ["male", "female"];
const bloodType = [1, 2, 3, 4];
const levelActivityType = [1, 2, 3, 4, 5];
const minAge = 568025136000; // 18 year to ms

const profileSchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
      unique: true,
    },

    height: {
      type: Number,
      min: 150,
      required: [true, "Define user height"],
    },

    currentWeight: {
      type: Number,
      required: [true, "Define current user weight"],
      min: 35,
    },

    desiredWeight: {
      type: Number,
      required: [true, "Define desired user weight"],
      min: 35,
    },

    sex: {
      type: String,
      required: [true, "Define user sex"],
      enum: sexType,
    },

    blood: {
      type: Number,
      required: [true, "Define user blood group"],
      enum: bloodType,
    },

    levelActivity: {
      type: Number,
      required: [true, "Define user activity level"],
      enum: levelActivityType,
    },
    birthday: {
      type: Date,
      required: [true, "Define user birthday"],
    },
    bmr: {
      type: Number,
      default:0,
    },
  },
  { versionKey: false }
);

profileSchema.post("save", handleMongooseError);

const Profile = model("profile", profileSchema);

const createProfile = Joi.object({
  height: Joi.number().min(150).max(250).required(),
  currentWeight: Joi.number().min(35).max(250).required(),
  desiredWeight: Joi.number().min(35).max(200).required(),
  sex: Joi.string()
    .valid(...sexType)
    .required(),
  blood: Joi.number()
    .valid(...bloodType)
    .required(),
  levelActivity: Joi.number()
    .valid(...levelActivityType)
    .required(),
  birthday: Joi.date()
    .less(Date.now() - minAge)
    .required()
    .messages({
      "date.base":
        "Date must have any valid ISO date format, for example YYYY-MM-DD.",
      "date.less": "User must be over 18 y.o.",
      "any.required": "Date field is required.",
    }),
});

const schemas = {
  createProfile,
};

module.exports = {
  schemas,
  Profile,
};
