const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
  {
    service_name: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 20,
    },
    description: {
      type: String,
      required: true,
      maxlength: 300,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("Service", serviceSchema);
