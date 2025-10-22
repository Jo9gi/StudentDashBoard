import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import StudentList from './StudentList';
import StudentForm from './StudentForm';

const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  const { user } = useAuth();

  // Fetch students on component mount
  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      };
      
      const response = await axios.get('http://localhost:5000/api/students', config);
      setStudents(response.data);
    } catch (error) {
      setError('Failed to fetch students');
      console.error('Error fetching students:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddStudent = () => {
    setEditingStudent(null);
    setShowForm(true);
  };

  const handleEditStudent = (student) => {
    setEditingStudent(student);
    setShowForm(true);
  };

  const handleDeleteStudent = async (studentId) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${user.token}`
          }
        };
        
        await axios.delete(`http://localhost:5000/api/students/${studentId}`, config);
        fetchStudents(); // Refresh the list
      } catch (error) {
        setError('Failed to delete student');
        console.error('Error deleting student:', error);
      }
    }
  };

  const handleFormSave = () => {
    setShowForm(false);
    setEditingStudent(null);
    fetchStudents(); // Refresh the list
  };

  const handleFormCancel = () => {
    setShowForm(false);
    setEditingStudent(null);
  };

  if (loading) {
    return (
      <div className="container mt-5">
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Student Management Dashboard</h2>
        <button 
          className="btn btn-primary"
          onClick={handleAddStudent}
        >
          + Add New Student
        </button>
      </div>

      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      {/* Statistics Cards */}
      <div className="row mb-4">
        <div className="col-md-3">
          <div className="card bg-primary text-white">
            <div className="card-body">
              <h5 className="card-title">Total Students</h5>
              <h2>{students.length}</h2>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card bg-success text-white">
            <div className="card-body">
              <h5 className="card-title">Full Time</h5>
              <h2>{students.filter(s => s.fullTime).length}</h2>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card bg-warning text-white">
            <div className="card-body">
              <h5 className="card-title">Part Time</h5>
              <h2>{students.filter(s => !s.fullTime).length}</h2>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card bg-info text-white">
            <div className="card-body">
              <h5 className="card-title">Avg GPA</h5>
              <h2>
                {students.length > 0 
                  ? (students.reduce((sum, s) => sum + (s.gpa || 0), 0) / students.length).toFixed(1)
                  : '0.0'
                }
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Student Form */}
      {showForm && (
        <div className="mb-4">
          <StudentForm
            student={editingStudent}
            onSave={handleFormSave}
            onCancel={handleFormCancel}
          />
        </div>
      )}

      {/* Student List */}
      <StudentList
        students={students}
        onEdit={handleEditStudent}
        onDelete={handleDeleteStudent}
      />
    </div>
  );
};

export default Dashboard;