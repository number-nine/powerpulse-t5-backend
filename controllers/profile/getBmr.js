const { Profile } = require("../../models/profile");
const { ctrlWrapper, HttpError } = require("../../helpers");

// function brm contributed by @Kateryna Valuiskyi
function brm(height, currentWeight, sex, levelActivity, birthday) {
  const msInYear = 31556952000;

  const activityRatio = {
    1: 1.2,
    2: 1.375,
    3: 1.55,
    4: 1.725,
    5: 1.9,
  };
  const genderRatio = sex === "male" ? 5 : -161;

  const age = Math.trunc((Date.now() - new Date(birthday)) / msInYear);

  const bmr =
    (10 * currentWeight + 6.25 * height - 5 * age + genderRatio) *
    activityRatio[levelActivity];
  return bmr;
}

const getBmr = async (req, res) => {
  const { _id: id } = req.user;
  const result = await Profile.findOne({ owner: id });
  if (!result) {
    throw HttpError(404, "Not found");
  }
  const { height, currentWeight, sex, levelActivity, birthday } = result;
  const targetBmr = brm(height, currentWeight, sex, levelActivity, birthday);

  const targetTime = 110;

  res.json({ targetBmr, targetTime });
};

module.exports = ctrlWrapper(getBmr);
