import mongoose from 'mongoose';

// Student schema for student management
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Student name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true
  },
  age: {
    type: Number,
    required: [true, 'Age is required'],
    min: 16,
    max: 100
  },
  department: {
    type: String,
    required: [true, 'Department is required'],
    trim: true
  },
  class: {
    type: String,
    required: [true, 'Class is required'],
    trim: true
  },
  section: {
    type: String,
    required: [true, 'Section is required'],
    trim: true
  },
  gpa: {
    type: Number,
    min: 0,
    max: 10,
    default: 0
  },
  gpaScale: {
    type: String,
    enum: ['4', '10'],
    default: '4'
  },
  status: {
    type: String,
    enum: ['Full Time', 'Part Time'],
    default: 'Full Time'
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: false
  },
  registrationDate: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

export default mongoose.model('Student', studentSchema);