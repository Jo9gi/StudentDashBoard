# 🚀 Advanced MERN Stack: Student Management System

## 🎯 Project Overview

A comprehensive **role-based Student Management System** built with the MERN stack, featuring separate dashboards for Admins and Students with secure JWT authentication.

### 🔑 Key Features

- **🧑‍💼 Admin Dashboard**: Full CRUD operations, student statistics, search functionality
- **🎓 Student Dashboard**: Personal profile view, read-only access to own data
- **🔐 Role-Based Authentication**: JWT tokens with admin/student role separation
- **📱 Responsive Design**: Bootstrap 5 with custom styling
- **🔍 Advanced Search**: Filter students by name, email, or department

## 👥 User Roles

| Role | Access Level | Capabilities |
|------|-------------|-------------|
| **Admin** | Full Access | Create, Read, Update, Delete students; View statistics; Search & filter |
| **Student** | Limited Access | View own profile only; Read-only personal data |

## 🏗️ Architecture

```
Frontend (React.js) ↔ Backend (Express.js) ↔ Database (MongoDB)
     ↓                      ↓                     ↓
Role-based UI         JWT + Middleware      User & Student Collections
```

## 📊 Database Schema

### Users Collection
```javascript
{
  name: "Admin User",
  email: "admin@school.com", 
  password: "<hashed>",
  role: "admin" | "student"
}
```

### Students Collection
```javascript
{
  name: "John Doe",
  email: "john@student.com",
  age: 20,
  department: "Computer Science",
  class: "B-Tech",
  section: "A",
  gpa: 3.8,
  status: "Full Time" | "Part Time",
  userId: ObjectId (optional reference)
}
```

## 🛡️ Security Features

- **Password Hashing**: bcrypt.js encryption
- **JWT Authentication**: Secure token-based sessions
- **Role Middleware**: Route-level access control
- **Protected Routes**: Frontend route guards

## 🎨 UI/UX Features

### Admin Dashboard
- 📈 **Statistics Cards**: Total students, full/part-time counts, average GPA
- 🔍 **Search Bar**: Real-time filtering by name, email, department
- ✏️ **CRUD Operations**: Add, edit, delete student records
- 📱 **Responsive Table**: Mobile-friendly data display

### Student Dashboard  
- 👤 **Profile Card**: Personal academic information
- 📊 **Performance Metrics**: GPA visualization with color coding
- 📅 **Academic Timeline**: Registration date and status
- 🎯 **Quick Stats**: Department, class, enrollment status

## 🔗 API Endpoints

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| POST | `/api/auth/signup` | Public | Register new user |
| POST | `/api/auth/login` | Public | User authentication |
| GET | `/api/students` | Admin | Fetch all students |
| POST | `/api/students` | Admin | Create new student |
| PUT | `/api/students/:id` | Admin | Update student |
| DELETE | `/api/students/:id` | Admin | Delete student |
| GET | `/api/students/profile` | Student | View own profile |

## 🚀 Quick Start

### 1. Clone & Setup
```bash
git clone https://github.com/Jo9gi/StudentDashBoard.git
cd StudentDashBoard
```

### 2. Backend Setup
```bash
cd backend
npm install
npm start  # Runs on http://localhost:5000
```

### 3. Frontend Setup
```bash
cd frontend  
npm install
npm start  # Runs on http://localhost:3000
```

### 4. Environment Configuration
Create `backend/.env`:
```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/student_dashboard
JWT_SECRET=workshop_secret_key_2024
```

## 🧪 Testing the System

### Admin Flow
1. Register with role: "admin"
2. Login → Redirected to Admin Dashboard
3. View statistics and student list
4. Add/Edit/Delete student records
5. Use search functionality

### Student Flow  
1. Register with role: "student"
2. Admin creates student profile with matching email
3. Login → Redirected to Student Dashboard
4. View personal academic profile

## 📱 Screenshots

### Admin Dashboard
- Statistics overview with colorful cards
- Searchable student table with action buttons
- Add/Edit student form with validation

### Student Dashboard
- Personal profile with academic details
- GPA visualization with color coding
- Clean, minimal interface

## 🔧 Advanced Features

- **Theme Support**: Light/Dark mode toggle
- **Data Export**: Download student list as CSV
- **Pagination**: Handle large datasets efficiently
- **Toast Notifications**: Success/Error feedback
- **Form Validation**: Client and server-side validation

## 📚 Learning Outcomes

After completing this project, you'll understand:

✅ **Full-Stack Development**: Complete MERN architecture
✅ **Authentication Systems**: JWT implementation with roles
✅ **Database Design**: MongoDB schema and relationships  
✅ **API Development**: RESTful services with Express.js
✅ **Frontend Architecture**: React components and state management
✅ **Security Best Practices**: Password hashing, route protection
✅ **UI/UX Design**: Responsive layouts with Bootstrap

## 🚀 Deployment Ready

The project is configured for easy deployment:
- **Frontend**: Vercel/Netlify
- **Backend**: Render/Railway  
- **Database**: MongoDB Atlas

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Built with ❤️ for educational purposes**

*Perfect for workshops, bootcamps, and portfolio projects!*