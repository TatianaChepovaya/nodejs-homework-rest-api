const { Contact } = require("../models/contacts");

const addContact = async (req, res) => {
  const result = await Contact.create(req.body);
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      result
    }
  });
};

module.exports = addContact;
