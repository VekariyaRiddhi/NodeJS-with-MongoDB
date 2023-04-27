const express = require("express");
const {
  createStudent,
  getStudent,
  getStudents,
  updateStudent,
  deleteStudent,
} = require("../controllers/student");

const studentRouter = express.Router();

studentRouter.route("/").get(getStudents).post(createStudent);

studentRouter
  .route("/:id")
  .get(getStudent)
  .put(updateStudent)
  .delete(deleteStudent);

module.exports = {
  studentRouter,
};
