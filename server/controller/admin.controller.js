// adminController.js
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'; // Import jwt for token generation
import db from '../database/db.js';

const adminLogin = async (req, res) => {
    const { identifier, password } = req.body;

    if (!identifier || !password) {
        return res.status(400).json({ message: 'Username or email and password are required.' });
    }

    try {
        // Fetch admin user by username or email
        db.query('SELECT * FROM admin WHERE username = ? OR email = ?', [identifier, identifier], async (err, rows) => {
            if (err) {
                console.error('Error during login:', err);
                return res.status(500).json({ message: 'Internal server error.' });
            }
            if (rows.length === 0) {
                return res.status(401).json({ message: 'Invalid credentials.' });
            }

            const user = rows[0];

            // Compare the password
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(401).json({ message: 'Invalid credentials.' });
            }

            // Generate JWT
            const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });

            // Set cookie with the JWT
            // res.cookie('admin', token, {
            //     httpOnly: true, // Prevent client-side access to the cookie
            //     secure: true, // Use secure cookies in production
            //     maxAge: 3600000, // 1 hour
            //     sameSite: 'None',
            // });
            res.cookie('admin', token, {
                httpOnly: false,  // Optional, for security
                secure: true,    // Must be true in production with HTTPS
                sameSite: 'None' // Required for cross-origin cookies
              });
              
            // res.cookie('admin', token, {
            //     httpOnly: true,
            //     secure: false, 
            //     sameSite: 'None',
            //   });

            return res.status(200).json({ message: 'Login successful.', user: { id: user.id, username: user.username },toekn:token });
        });
    } catch (error) {
        console.error('Error during login:', error);
        return res.status(500).json({ message: 'Internal server error.' });
    }
};

const check_auth = async(req,res)=>{

const user=req.user

return res.status(200).json({ message: 'Login successful.', user});


}

 const adminLogout = (req, res) => {
    res.clearCookie('admin', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', 
        sameSite: 'None', 
    });
    res.status(200).json({ message: 'Logout successful' });
};


const change_password=async(req,res)=>{
    const {  newPassword ,oldPassword} = req.body;
    
    
    const admin=req.user
    
        // Fetch the admin from the database
  db.query('SELECT * FROM admin WHERE id = ?', [admin.id],async (err, result) => {
    if (err || result.length === 0) {
      return res.status(404).send('User not found');
    }
 
    
      const checkPassword= await bcrypt.compare(oldPassword, result[0].password)
        
        
        
    if(!checkPassword){
      return res.status(404).json('Old password is incorrect');
    }
    
    const admin = result[0];

    // Hash the new password
    bcrypt.hash(newPassword, 10, (hashErr, hashedPassword) => {
      if (hashErr) {
        return res.status(500).send('Error hashing password');
      }

      // Update the password in the database
      db.query('UPDATE admin SET password = ? WHERE id = ?', [hashedPassword, admin.id], (updateErr) => {
        if (updateErr) {
          return res.status(500).send('Error updating password');
        }

        return res.status(200).send('Password changed successfully');
      });
    })});
     
}
export { adminLogin,check_auth,adminLogout ,change_password};
