const express = require("express");
const router = express.Router();
const {
  getEmployees,
  getEmployee,
  createEmployee,
} = require("../controllers/employeeController");

//GET all emloyees
router.get("/", getEmployees);

//Create Emloyee
router.get("/:id", getEmployee);

//Create Emloyee
router.post("/", createEmployee);

module.exports = router;
