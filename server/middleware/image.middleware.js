

import express from 'express';
import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from 'cloudinary';
import dotenv from 'dotenv';
dotenv.config();


cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
  const storage = new CloudinaryStorage({
    cloudinary: cloudinary.v2,
    params: {
      folder: 'webpro',
      resource_type: 'auto', 
    //   allowedFormats: ['jpg', 'jpeg', 'png', 'gif','mp4','mov','avi'], // Control allowed formats
    },
  });
  
 const upload = multer({ storage });
 const uploadMiddleware = upload.fields([
    { name: 'image', maxCount: 1 }, 
  ]);
 export default uploadMiddleware;



