const { Contact } = require("../../models/contacts");

const listContacts = async (req, res) => {
  const { page = 1 } = req.query;
  let { limit = 20 } = req.query;
  limit = +limit > 20 ? 20 : +limit;
  const skip = (page - 1) * limit;
  const { _id } = req.user;
  const result = await Contact.find({ owner: _id })
    .skip(skip)
    .limit(+limit)
    .populate("owner", "email");
  res.json({
    status: "success",
    code: 200,
    data: {
      result
    }
  });
};
module.exports = listContacts;
