// const express = require('express');
// const mysql = require('mysql');
// const cors = require('cors');
import cors from 'cors'
import express from 'express';
import db from './database/db.js';
import itemRouter from './routes/user.router.js';
import adminRouter from './routes/admin.router.js'
import userDatarouter from './routes/user-data.router.js';
// const bodyParser = require('body-parser');
import bodyParser  from 'body-parser';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(
  cors({
    origin: 'http://localhost:5173', // your frontend URL
    credentials: true, // allow cookies
  })
);
app.use(bodyParser.json());
app.use(cookieParser());
app.use('/api/items', itemRouter);
app.use ('/user',userDatarouter)
app.use('/admin',adminRouter)
// db.query('select * from item',(err,res)=>{
//   console.log(err);
//   console.log(res);
  
  
// })

app.get('/users', (req, res) => {
  const sql = 'SELECT * FROM users';
  db.query(sql, (err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result);
  });
});
app.get('/', (req, res) => {
  res.send('Hello, World!');
})

// Add new user
app.post('/users', (req, res) => {
  const { name, email } = req.body;
  const sql = 'INSERT INTO users (name, email) VALUES (?, ?)';
  db.query(sql, [name, email], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ message: 'User added successfully!', userId: result.insertId });
  });
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
