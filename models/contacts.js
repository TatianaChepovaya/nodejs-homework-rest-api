const { Schema, model } = require("mongoose");
const Joi = require("joi");

const joiSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email({ minDomainSegments: 2 }),
  phone: Joi.string().required(),
  favorite: Joi.boolean().required()
});

const contactSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"]
    },
    email: {
      type: String
    },
    phone: {
      type: String
    },
    favorite: {
      type: Boolean,
      default: false
    }
  },
  { versionKey: false, timestamps: true }
);

const Contact = model("contacts", contactSchema);

module.exports = {
  Contact,
  joiSchema
};
