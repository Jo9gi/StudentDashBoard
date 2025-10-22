# API Documentation - Student Dashboard

## Base URL
```
http://localhost:5000/api
```

## Authentication
All protected routes require a Bearer token in the Authorization header:
```
Authorization: Bearer <your_jwt_token>
```

---

## 🔐 Authentication Endpoints

### 1. Register User
**POST** `/auth/signup`

**Description:** Create a new user account

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Response (201):**
```json
{
  "_id": "64f7c3f306aee78703cebea4",
  "name": "John Doe",
  "email": "john@example.com",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Error (400):**
```json
{
  "message": "User already exists"
}
```

### 2. Login User
**POST** `/auth/login`

**Description:** Authenticate existing user

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response (200):**
```json
{
  "_id": "64f7c3f306aee78703cebea4",
  "name": "John Doe",
  "email": "john@example.com",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Error (401):**
```json
{
  "message": "Invalid email or password"
}
```

---

## 🎓 Student Management Endpoints

### 3. Get All Students
**GET** `/students`

**Description:** Retrieve all students (Protected Route)

**Headers:**
```
Authorization: Bearer <token>
```

**Response (200):**
```json
[
  {
    "_id": "64f7c52506aee78703cebea5",
    "name": "Alice Johnson",
    "email": "alice@example.com",
    "age": 20,
    "class": "Computer Science",
    "section": "A",
    "gpa": 3.8,
    "fullTime": true,
    "registrationDate": "2024-01-15T10:30:00.000Z",
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T10:30:00.000Z"
  }
]
```

### 4. Get Single Student
**GET** `/students/:id`

**Description:** Retrieve a specific student by ID (Protected Route)

**Headers:**
```
Authorization: Bearer <token>
```

**Response (200):**
```json
{
  "_id": "64f7c52506aee78703cebea5",
  "name": "Alice Johnson",
  "email": "alice@example.com",
  "age": 20,
  "class": "Computer Science",
  "section": "A",
  "gpa": 3.8,
  "fullTime": true,
  "registrationDate": "2024-01-15T10:30:00.000Z"
}
```

**Error (404):**
```json
{
  "message": "Student not found"
}
```

### 5. Create Student
**POST** `/students`

**Description:** Add a new student (Protected Route)

**Headers:**
```
Authorization: Bearer <token>
```

**Request Body:**
```json
{
  "name": "Bob Smith",
  "email": "bob@example.com",
  "age": 22,
  "class": "Mathematics",
  "section": "B",
  "gpa": 3.5,
  "fullTime": true
}
```

**Response (201):**
```json
{
  "_id": "64f7c52506aee78703cebea6",
  "name": "Bob Smith",
  "email": "bob@example.com",
  "age": 22,
  "class": "Mathematics",
  "section": "B",
  "gpa": 3.5,
  "fullTime": true,
  "registrationDate": "2024-01-15T11:00:00.000Z",
  "createdAt": "2024-01-15T11:00:00.000Z",
  "updatedAt": "2024-01-15T11:00:00.000Z"
}
```

### 6. Update Student
**PUT** `/students/:id`

**Description:** Update an existing student (Protected Route)

**Headers:**
```
Authorization: Bearer <token>
```

**Request Body:**
```json
{
  "name": "Bob Smith Jr.",
  "age": 23,
  "gpa": 3.7
}
```

**Response (200):**
```json
{
  "_id": "64f7c52506aee78703cebea6",
  "name": "Bob Smith Jr.",
  "email": "bob@example.com",
  "age": 23,
  "class": "Mathematics",
  "section": "B",
  "gpa": 3.7,
  "fullTime": true,
  "registrationDate": "2024-01-15T11:00:00.000Z",
  "updatedAt": "2024-01-15T12:00:00.000Z"
}
```

### 7. Delete Student
**DELETE** `/students/:id`

**Description:** Remove a student (Protected Route)

**Headers:**
```
Authorization: Bearer <token>
```

**Response (200):**
```json
{
  "message": "Student deleted successfully"
}
```

**Error (404):**
```json
{
  "message": "Student not found"
}
```

---

## 📋 Data Models

### User Model
```javascript
{
  name: String (required),
  email: String (required, unique),
  password: String (required, min: 6),
  createdAt: Date,
  updatedAt: Date
}
```

### Student Model
```javascript
{
  name: String (required),
  email: String (required, unique),
  age: Number (required, min: 16, max: 100),
  class: String (required),
  section: String (required),
  gpa: Number (min: 0, max: 4, default: 0),
  fullTime: Boolean (default: true),
  registrationDate: Date (default: now),
  createdAt: Date,
  updatedAt: Date
}
```

---

## 🔧 Error Handling

### Common HTTP Status Codes

| Code | Description |
|------|-------------|
| 200 | Success |
| 201 | Created |
| 400 | Bad Request |
| 401 | Unauthorized |
| 404 | Not Found |
| 500 | Internal Server Error |

### Error Response Format
```json
{
  "message": "Error description here"
}
```

---

## 🧪 Testing with Postman

### 1. Setup Environment Variables
- `baseURL`: `http://localhost:5000/api`
- `token`: `<your_jwt_token>`

### 2. Test Authentication Flow
1. Register a new user
2. Login with credentials
3. Copy the token from response
4. Use token for protected routes

### 3. Test Student CRUD
1. Create students
2. Get all students
3. Update a student
4. Delete a student

### 4. Sample Postman Collection
```json
{
  "info": {
    "name": "Student Dashboard API"
  },
  "item": [
    {
      "name": "Auth - Register",
      "request": {
        "method": "POST",
        "url": "{{baseURL}}/auth/signup",
        "body": {
          "mode": "raw",
          "raw": "{\n  \"name\": \"Test User\",\n  \"email\": \"test@example.com\",\n  \"password\": \"password123\"\n}"
        }
      }
    }
  ]
}
```

---

## 🚀 Quick Start Testing

1. Start the backend server
2. Use these curl commands:

```bash
# Register
curl -X POST http://localhost:5000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","password":"password123"}'

# Login
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'

# Get Students (replace TOKEN with actual token)
curl -X GET http://localhost:5000/api/students \
  -H "Authorization: Bearer TOKEN"
```

This API documentation provides everything needed to interact with the Student Dashboard backend!