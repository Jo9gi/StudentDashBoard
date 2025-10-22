# Installation Guide for Student Dashboard

## Prerequisites
- Node.js (v14 or higher)
- MongoDB (local installation)
- Git
- Code editor (VS Code recommended)

## 1️⃣ Clone Repository
```bash
git clone https://github.com/your-username/student-dashboard.git
cd student-dashboard
```

## 2️⃣ Backend Setup

### Navigate to backend directory
```bash
cd backend
```

### Install dependencies
```bash
npm install
```

### Create environment file
Create a `.env` file in the backend directory with:
```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/student_dashboard
JWT_SECRET=workshop_secret_key_2024
```

### Start the backend server
```bash
npm start
```
Backend will run on `http://localhost:5000`

## 3️⃣ Frontend Setup

### Open new terminal and navigate to frontend
```bash
cd frontend
```

### Install dependencies
```bash
npm install
```

### Start the React development server
```bash
npm start
```
Frontend will run on `http://localhost:3000`

## 4️⃣ MongoDB Setup

### Start MongoDB service
- **Windows**: Start MongoDB service from Services or run `mongod`
- **macOS**: `brew services start mongodb-community`
- **Linux**: `sudo systemctl start mongod`

### Verify MongoDB connection
1. Open MongoDB Compass
2. Connect to `mongodb://127.0.0.1:27017`
3. Database `student_dashboard` will be created automatically

## 5️⃣ Testing the Application

### Backend API Testing
Use Postman to test these endpoints:
- POST `http://localhost:5000/api/auth/signup`
- POST `http://localhost:5000/api/auth/login`
- GET `http://localhost:5000/api/students` (requires authentication)

### Frontend Testing
1. Open `http://localhost:3000`
2. Register a new account
3. Login with credentials
4. Add, edit, and delete students

## 6️⃣ Troubleshooting

### Common Issues

**MongoDB Connection Error:**
- Ensure MongoDB service is running
- Check if port 27017 is available
- Verify MONGO_URI in .env file

**CORS Error:**
- Backend includes CORS middleware
- Ensure backend is running on port 5000

**Authentication Issues:**
- Check JWT_SECRET in .env
- Verify token is being sent in headers

**Port Already in Use:**
```bash
# Kill process on port 5000
npx kill-port 5000

# Kill process on port 3000
npx kill-port 3000
```

## 7️⃣ Development Commands

### Backend
```bash
npm start          # Start server
npm run dev        # Start with nodemon (auto-restart)
```

### Frontend
```bash
npm start          # Start development server
npm run build      # Build for production
npm test           # Run tests
```

## 8️⃣ Project Structure Verification

After setup, your project should look like:
```
student-dashboard/
├── backend/
│   ├── config/db.js
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── package.json
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── styles/
│   │   └── App.js
│   └── package.json
└── README.md
```

## 9️⃣ Next Steps

1. **Customize the UI**: Modify Bootstrap classes and custom CSS
2. **Add Features**: Implement search, filtering, pagination
3. **Deploy**: Use Vercel (frontend) and Render (backend)
4. **Enhance Security**: Add input validation, rate limiting

## 🔟 Support

If you encounter issues:
1. Check the console for error messages
2. Verify all services are running
3. Review the API documentation
4. Check MongoDB connection in Compass

**Happy Coding! 🚀**