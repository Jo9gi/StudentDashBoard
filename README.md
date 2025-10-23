# 🚀 Advanced Student Management System

A comprehensive **role-based MERN stack application** with separate Admin and Student dashboards.

## 🎯 Features
- **🔐 Role-Based Authentication**: Admin and Student access levels
- **🧑💼 Admin Dashboard**: Full CRUD operations, statistics, search
- **🎓 Student Dashboard**: Personal profile view (read-only)
- **📊 Flexible GPA System**: Support for 4.0 and 10.0 point scales
- **📱 Responsive Design**: Bootstrap 5 with custom styling
- **🔍 Advanced Search**: Filter by name, email, department

## 🛠️ Technologies
- **Frontend**: React.js, Bootstrap 5, Axios, React Router
- **Backend**: Node.js, Express.js, JWT, bcrypt.js
- **Database**: MongoDB (local)
- **Authentication**: Role-based JWT tokens
- **Testing**: Postman

## Quick Start
1. Clone the repository
2. Follow the detailed setup in `INSTALLATION.md`
3. Backend runs on `http://localhost:5000`
4. Frontend runs on `http://localhost:3000`

## 🏢 Project Structure
```
student-dashboard/
├── backend/
│   ├── config/           # Database connection
│   ├── controllers/      # Business logic
│   ├── middleware/       # Auth & role protection
│   ├── models/           # MongoDB schemas
│   ├── routes/           # API endpoints
│   └── server.js         # Express server
├── frontend/
│   └── src/
│       ├── components/   # React components
│       ├── context/      # Auth state management
│       └── styles/       # Custom CSS
├── README.md             # Project overview
├── ADVANCED_README.md    # Detailed documentation
├── INSTALLATION.md       # Setup guide
└── API_DOCUMENTATION.md  # API reference
```

## 👥 User Roles

| Role | Access Level | Capabilities |
|------|-------------|-------------|
| **Admin** | Full Access | Create, Read, Update, Delete students; View statistics; Search & filter |
| **Student** | Limited Access | View own profile only; Read-only personal data |

## 📊 GPA System
- **4.0 Scale**: Traditional US system (0-4.0)
- **10.0 Scale**: International system (0-10.0)
- **Smart Color Coding**: Performance-based visual indicators

## 🎯 Learning Outcomes
- **Full-Stack Development**: Complete MERN architecture
- **Authentication Systems**: JWT with role-based access
- **Database Design**: MongoDB schema and relationships
- **API Development**: RESTful services with middleware
- **Frontend Architecture**: React components and routing
- **Security Best Practices**: Password hashing, route protection

## 🚀 Portfolio Ready
Demonstrates enterprise-level development skills:
- Role-based access control
- Scalable architecture
- Modern UI/UX design
- Security implementation
- API documentation