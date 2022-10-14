const { Contact } = require("../models/contacts");

const listContacts = async (_, res) => {
  const result = await Contact.find({});
  res.json({
    status: "success",
    code: 200,
    data: {
      result
    }
  });
};
module.exports = listContacts;
