import React from 'react';

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
                      <span className={`badge ${student.gpa >= 3.5 ? 'bg-success' : student.gpa >= 2.5 ? 'bg-warning' : 'bg-danger'}`}>
                        {student.gpa || 'N/A'}
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