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
            //     secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
            //     maxAge: 3600000, // 1 hour
            // });
            res.cookie('admin', token, {
                httpOnly: true,
                secure: false, 
                sameSite: 'None',
              });

            return res.status(200).json({ message: 'Login successful.', user: { id: user.id, username: user.username },toekn:token });
        });
    } catch (error) {
        console.error('Error during login:', error);
        return res.status(500).json({ message: 'Internal server error.' });
    }
};

export { adminLogin };
