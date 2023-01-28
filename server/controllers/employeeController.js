const Employee = require("../models/employee");

//GET all employees
const getEmployees = async (req, res) => {
  const employees = await Employee.find();
  try {
    res.status(200).json(employees);
  } catch (error) {
    res.status(400).json(error);
  }
};

///GET a single employee
const getEmployee = async (req, res) => {
  const { id } = req.params;
  const employee = await Employee.findById(id);
  if (!employee) {
    res.status(404).json({ error: "No such an emloyee" });
  }
  res.status(200).json(employee);
};

//Create emloyee
const createEmployee = async (req, res) => {
  const { nom, prenom, age, email, position } = req.body;
  try {
    const employee = await Employee.create({
      nom,
      prenom,
      age,
      email,
      position,
    });
    res.status(201).json(employee);
  } catch (error) {
    res.status(400).json({ error });
  }
};

module.exports = { getEmployees, getEmployee, createEmployee };
