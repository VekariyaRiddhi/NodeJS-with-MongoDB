const { Schema, model } = require("mongoose");

const studentSchema = new Schema({
  name: { type: String, required: true },
  first_name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

const Student = model("student", studentSchema);

module.exports = {
  Student,
};
