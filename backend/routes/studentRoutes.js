import express from 'express';
import {
  getStudents,
  getStudent,
  createStudent,
  updateStudent,
  deleteStudent
} from '../controllers/studentController.js';
import protect from '../middleware/authMiddleware.js';

const router = express.Router();

// All student routes are protected
router.use(protect);

// Student CRUD routes
router.route('/')
  .get(getStudents)
  .post(createStudent);

router.route('/:id')
  .get(getStudent)
  .put(updateStudent)
  .delete(deleteStudent);

export default router;