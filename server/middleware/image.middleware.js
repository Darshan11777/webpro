// import express from 'express';
// import multer from 'multer';
// import { CloudinaryStorage } from 'multer-storage-cloudinary';
// import cloudinary from 'cloudinary';
// import dotenv from 'dotenv';
// dotenv.config(); // Load environment variables
// // npm i multer-storage-cloudinary cloudinary multer

// cloudinary.v2.config({
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET,
//   });
//  // Log Cloudinary configuration for debugging
// // console.log('Cloudinary config set:', cloudinary.v2.config());
  
//   const storage = new CloudinaryStorage({
//     cloudinary: cloudinary.v2,
//     params: {
//       folder: 'webpro', // Optional: Create a folder in Cloudinary
//       resource_type: 'auto', // This tells Cloudinary to automatically detect the resource type
//     //   allowedFormats: ['jpg', 'jpeg', 'png', 'gif','mp4','mov','avi'], // Control allowed formats
//     },
//   });
//   // Log storage configuration for debugging
// // console.log('CloudinaryStorage configured:', storage);
//  const upload = multer({ storage });
//  const image_middleware = upload.fields([
//     { name: 'image', maxCount: 1 }, // Allow only one image
//     // { name: 'video', maxCount: 1 }, // Allow only one video
//   ]);
//  export default image_middleware;


import express from 'express';
import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from 'cloudinary';
import dotenv from 'dotenv';
dotenv.config(); // Load environment variables


cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
  const storage = new CloudinaryStorage({
    cloudinary: cloudinary.v2,
    params: {
      folder: 'indiafinancehub', // Optional: Create a folder in Cloudinary
      resource_type: 'auto', // This tells Cloudinary to automatically detect the resource type
    //   allowedFormats: ['jpg', 'jpeg', 'png', 'gif','mp4','mov','avi'], // Control allowed formats
    },
  });
  
 const upload = multer({ storage });
 const uploadMiddleware = upload.fields([
    { name: 'image', maxCount: 1 }, // Allow only one image
    // { name: 'video', maxCount: 1 }, // Allow only one video
  ]);
 export default uploadMiddleware;



