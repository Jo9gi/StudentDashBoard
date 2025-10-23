import React from 'react';

// Helper function to determine GPA color based on scale
const getGPAColor = (gpa, scale) => {
  if (!gpa) return 'bg-secondary';
  const percentage = (gpa / (scale || 4)) * 100;
  if (percentage >= 85) return 'bg-success';
  if (percentage >= 60) return 'bg-warning';
  return 'bg-danger';
};

const StudentList = ({ students, onEdit, onDelete, isAdmin = false }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Student Records</h5>
        
        {students.length === 0 ? (
          <div className="text-center py-4">
            <p className="text-muted">No students found. Add your first student!</p>
          </div>
        ) : (
          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead className="table-dark">
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Age</th>
                  <th>Department</th>
                  <th>Class</th>
                  <th>Section</th>
                  <th>GPA</th>
                  <th>Status</th>
                  {isAdmin && <th>Actions</th>}
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student._id}>
                    <td className="fw-semibold">{student.name}</td>
                    <td>{student.email}</td>
                    <td>{student.age}</td>
                    <td>{student.department}</td>
                    <td>{student.class}</td>
                    <td>{student.section}</td>
                    <td>
                      <span className={`badge ${getGPAColor(student.gpa, student.gpaScale)}`}>
                        {student.gpa || 'N/A'}/{student.gpaScale || '4'}
                      </span>
                    </td>
                    <td>
                      <span className={`badge ${student.status === 'Full Time' ? 'bg-primary' : 'bg-secondary'}`}>
                        {student.status}
                      </span>
                    </td>
                    {isAdmin && (
                      <td>
                        <div className="btn-group btn-group-sm">
                          <button
                            className="btn btn-outline-primary"
                            onClick={() => onEdit(student)}
                            title="Edit Student"
                          >
                            ✏️
                          </button>
                          <button
                            className="btn btn-outline-danger"
                            onClick={() => onDelete(student._id)}
                            title="Delete Student"
                          >
                            🗑️
                          </button>
                        </div>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentList;