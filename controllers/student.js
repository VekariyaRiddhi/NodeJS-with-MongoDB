const { Student } = require("../models/student");

const createStudent = async (req, res, next) => {
  try {
    const { body } = req;
    const student = await Student.create(body);
    res.json(student);
  } catch (error) {
    next(error);
  }
};

const getStudent = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;
    const student = await Student.findById(id);
    res.json(student);
  } catch (error) {
    next(error);
  }
};

const getStudents = async (req, res, next) => {
  try {
    const students = await Student.find({});
    res.json(students);
  } catch (error) {
    next(error);
  }
};

// UpdateOne
const updateStudent = async (req, res, next) => {
  const {
    params: { id },
    body,
  } = req;

  try {
    const student = await Student.findByIdAndUpdate(id, body);
    res.json(student);
  } catch (error) {
    next(error);
  }
};

const deleteStudent = async (req, res, next) => {
  const {
    params: { id },
  } = req;

  try {
    const students = await Student.findByIdAndDelete(id);
    res.json(students);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createStudent,
  getStudent,
  getStudents,
  updateStudent,
  deleteStudent,
};
