const mongoose = require("mongoose");

const ContactUsSchema = mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  phone: {
    type: String
  },
  subject: {
    type: String
  },
  date: {
    type: String,
    default: Date().toString()
  },
  message: {
    type: String
  }
});

module.exports = mongoose.model("ContactUs", ContactUsSchema);
