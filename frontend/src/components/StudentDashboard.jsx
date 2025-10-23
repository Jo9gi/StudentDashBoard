import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const StudentDashboard = () => {
  const [studentData, setStudentData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  const { user } = useAuth();

  useEffect(() => {
    fetchStudentProfile();
  }, []);

  const fetchStudentProfile = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      };
      
      const response = await axios.get('http://localhost:5000/api/students/profile', config);
      setStudentData(response.data);
    } catch (error) {
      setError('Failed to fetch profile data');
      console.error('Error fetching profile:', error);
    } finally {
      setLoading(false);
    }
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

  if (error) {
    return (
      <div className="container mt-5">
        <div className="alert alert-warning" role="alert">
          <h4>Profile Not Found</h4>
          <p>Your student profile hasn't been created yet. Please contact the administrator to set up your academic record.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="text-center mb-4">
            <h2>🎓 Student Dashboard</h2>
            <p className="text-muted">Welcome back, {user.name}!</p>
          </div>

          {/* Profile Card */}
          <div className="card shadow-lg mb-4">
            <div className="card-header bg-primary text-white">
              <h4 className="mb-0">📋 My Academic Profile</h4>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-bold">Full Name</label>
                  <p className="form-control-plaintext border rounded p-2 bg-light">
                    {studentData.name}
                  </p>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-bold">Email Address</label>
                  <p className="form-control-plaintext border rounded p-2 bg-light">
                    {studentData.email}
                  </p>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-bold">Department</label>
                  <p className="form-control-plaintext border rounded p-2 bg-light">
                    {studentData.department}
                  </p>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-bold">Age</label>
                  <p className="form-control-plaintext border rounded p-2 bg-light">
                    {studentData.age} years
                  </p>
                </div>
                <div className="col-md-4 mb-3">
                  <label className="form-label fw-bold">Class</label>
                  <p className="form-control-plaintext border rounded p-2 bg-light">
                    {studentData.class}
                  </p>
                </div>
                <div className="col-md-4 mb-3">
                  <label className="form-label fw-bold">Section</label>
                  <p className="form-control-plaintext border rounded p-2 bg-light">
                    {studentData.section}
                  </p>
                </div>
                <div className="col-md-4 mb-3">
                  <label className="form-label fw-bold">Status</label>
                  <p className="form-control-plaintext">
                    <span className={`badge ${studentData.status === 'Full Time' ? 'bg-success' : 'bg-warning'} fs-6`}>
                      {studentData.status}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Academic Performance Card */}
          <div className="card shadow-lg mb-4">
            <div className="card-header bg-success text-white">
              <h4 className="mb-0">📊 Academic Performance</h4>
            </div>
            <div className="card-body text-center">
              <div className="row">
                <div className="col-md-6">
                  <h5>Current GPA</h5>
                  <h1 className={`display-4 ${studentData.gpa >= 3.5 ? 'text-success' : studentData.gpa >= 2.5 ? 'text-warning' : 'text-danger'}`}>
                    {studentData.gpa || 'N/A'}
                  </h1>
                  <p className="text-muted">Out of 4.0</p>
                </div>
                <div className="col-md-6">
                  <h5>Registration Date</h5>
                  <p className="fs-5">
                    {new Date(studentData.registrationDate).toLocaleDateString()}
                  </p>
                  <p className="text-muted">Academic Year Start</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="row">
            <div className="col-md-4">
              <div className="card bg-info text-white text-center">
                <div className="card-body">
                  <h5>Department</h5>
                  <h6>{studentData.department}</h6>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card bg-primary text-white text-center">
                <div className="card-body">
                  <h5>Class & Section</h5>
                  <h6>{studentData.class} - {studentData.section}</h6>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card bg-secondary text-white text-center">
                <div className="card-body">
                  <h5>Enrollment</h5>
                  <h6>{studentData.status}</h6>
                </div>
              </div>
            </div>
          </div>

          {/* Help Section */}
          <div className="card mt-4 border-info">
            <div className="card-body text-center">
              <h5 className="text-info">Need Help?</h5>
              <p className="text-muted">
                If you notice any incorrect information in your profile, please contact the academic office or your administrator.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;