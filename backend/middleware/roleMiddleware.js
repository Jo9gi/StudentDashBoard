// Role-based access control middleware
export const verifyRole = (roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ message: 'User not authenticated' });
    }

    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: 'Access denied. Insufficient permissions.' });
    }

    next();
  };
};

// Admin only access
export const adminOnly = verifyRole(['admin']);

// Student only access
export const studentOnly = verifyRole(['student']);

// Admin or Student access
export const authenticatedUser = verifyRole(['admin', 'student']);