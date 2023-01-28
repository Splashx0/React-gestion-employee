const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);
const Schema = mongoose.Schema;

const employeeSchema = new Schema(
  {
    _id: {
      type: Number,
    },
    nom: {
      type: String,
      required: true,
    },
    prenom: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, _id: false }
);
employeeSchema.plugin(AutoIncrement);
const Employee = mongoose.model("employee", employeeSchema);

module.exports = Employee;
