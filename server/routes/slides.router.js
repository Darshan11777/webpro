import express from 'express';
import {getSlides,addSlide,updateSlide,deleteSlide, getProcesses, addProcess, updateProcess, deleteProcess} from '../controller/data.controller.js'
const router = express.Router();

// Get all slides
router.get('/our-service', getSlides);

// Add a new slide
router.post('/our-service', addSlide);

// Update a slide
router.put('/our-service/:id', updateSlide);

// Delete a slide
router.delete('/our-service/:id', deleteSlide);

// our process slides 

router.get('/our-process', getProcesses);


router.post('/our-process', addProcess);

router.put('/our-process/:id', updateProcess);


router.delete('/our-process/:id', deleteProcess);

export default router;
