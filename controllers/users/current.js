const { ctrlWrapper } = require("../../helpers");

const current = async (req, res) => {
    const { email} = req.user
    res.json({
        email
    })
};

module.exports = ctrlWrapper(current);
