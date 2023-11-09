const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { handleMongooseError } = require("../helpers");

const sexType = ["male", "female"];
const bloodType = [1, 2, 3, 4];
const levelActivityType = [1, 2, 3, 4, 5];

const profileSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },

    height: {
      type: Number,
      require: [true, "Define user height"],
      min: 150,
    },

    currentWeight: {
      type: Number,
      require: [true, "Define current user weight"],
      min: [35, "Min weight is 35kg"],
    },

    desiredWeight: {
      type: Number,
      require: [true, "Define desired user weight"],
      min: [35, "Min weight is 35kg"],
    },

    sex: {
      type: String,
      require: [true, "Define user sex"],
      enum: sexType,
    },

    blood: {
      type: Number,
      require: [true, "Define user blood group"],
      enum: [bloodType, `Allowed values ${bloodType}`], // fix here
    },

    levelActivity: {
      type: Number,
      require: [true, "Define user activity level"],
      enum: levelActivityType,
    },
    birthday: {
      type: Date,
      require: [true, "Define user birthday"],
      // add calculation 18 y.o.
    },
  },
  { versionKey: false }
);

profileSchema.post("save", handleMongooseError);

const Profile = model("user", profileSchema);

const register = Joi.object({
  //   name: Joi.string().required(),
  //   email: Joi.string().pattern(patterns.email).required(),
  //   password: Joi.string().min(6).max(24).required(),
});

const schemas = {
  register,
};

module.exports = {
  schemas,
  Profile,
};
