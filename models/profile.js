const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { handleMongooseError } = require("../helpers");

const sexType = ["male", "female"];
const bloodType = [1, 2, 3, 4];
const levelActivityType = [1, 2, 3, 4, 5];
const minAge = 568025136000; // 18 year to ms

// function isValidAge(date) {
//   return Date.now() - new Date(date) >= minAge;
// }

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
      require: [true, "Define user height"],
    },

    currentWeight: {
      type: Number,
      require: [true, "Define current user weight"],
      min: 35,
    },

    desiredWeight: {
      type: Number,
      require: [true, "Define desired user weight"],
      min: 35,
    },

    sex: {
      type: String,
      require: [true, "Define user sex"],
      enum: sexType,
    },

    blood: {
      type: Number,
      require: [true, "Define user blood group"],
      enum: bloodType,
    },

    levelActivity: {
      type: Number,
      require: [true, "Define user activity level"],
      enum: levelActivityType,
    },
    birthday: {
      type: Date,
      require: [true, "Define user birthday"],
    },
  },
  { versionKey: false }
);

profileSchema.post("save", handleMongooseError);

const Profile = model("profile", profileSchema);

const createProfile = Joi.object({
  height: Joi.number().min(150).required(),
  currentWeight: Joi.number().min(35).required(),
  desiredWeight: Joi.number().min(35).required(),
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
    .required(),
});

const schemas = {
  createProfile,
};

module.exports = {
  schemas,
  Profile,
};
