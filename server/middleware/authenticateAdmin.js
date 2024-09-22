import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';

// Secret key for JWT signing and verification

// Middleware function to check JWT
const authenticateAdmin = (req, res, next) => {
  
  // Retrieve the token from cookies
  const token = req.cookies.admin;
 
  if (token) {
    jwt.verify(token,process.env.JWT_SECRET, (err, user) => {
      if (err) {
        console.log("err in jwt verify", err); // Debugging output

        
        // return res.redirect('/admin/auth/signin'); // Forbidden
        return res.sendStatus(403); // Forbidden
      }
      console.log("user", user); // Debugging output
      req.user = user;
      next();
    });
  } else {
    // res.redirect('/admin/auth/signin');
    console.log('erroe in else')
    res.sendStatus(401); // Unauthorized
  }
};

export default authenticateAdmin;
