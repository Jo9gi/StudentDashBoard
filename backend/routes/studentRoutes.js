import express from 'express';
import {
  getStudents,
  getStudent,
  getStudentProfile,
  createStudent,
  updateStudent,
  deleteStudent
} from '../controllers/studentController.js';
import protect from '../middleware/authMiddleware.js';
import { adminOnly, studentOnly } from '../middleware/roleMiddleware.js';

const router = express.Router();

// Student profile route (Student only)
router.get('/profile', protect, studentOnly, getStudentProfile);

// Admin-only routes
router.route('/')
  .get(protect, adminOnly, getStudents)
  .post(protect, adminOnly, createStudent);

router.route('/:id')
  .get(protect, adminOnly, getStudent)
  .put(protect, adminOnly, updateStudent)
  .delete(protect, adminOnly, deleteStudent);

export default router;