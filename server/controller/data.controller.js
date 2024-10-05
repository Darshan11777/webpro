import db from '../database/db.js'
// Get all slides
export const getSlides = (req, res) => {
    const query = "SELECT * FROM our_service";
    db.query(query, (err, results) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(results);
    });
};

// Add a new slide
export const addSlide = (req, res) => {
    const { title, description, tags, imgUrl } = req.body;
    const query = "INSERT INTO our_service (title, description, tags, imgUrl) VALUES (?, ?, ?, ?)";
    db.query(query, [title, description, tags, imgUrl], (err, results) => {
        if (err) return res.status(500).json({"addSlide error":err});
        return res.status(201).json({ message: "Slide added successfully!" });
    });
};

// Update a slide
export const updateSlide = (req, res) => {


    const { title, description, tags, imgUrl } = req.body;
    const query = "UPDATE our_service SET title = ?, description = ?, tags = ?, imgUrl = ? WHERE id = ?";
    db.query(query, [title, description, tags, imgUrl, req.params.id], (err, results) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json({ message: "Slide updated successfully!" });
    });
};

// Delete a slide
export const deleteSlide = (req, res) => {
    const query = "DELETE FROM our_service WHERE id = ?";
    db.query(query, [req.params.id], (err, results) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json({ message: "Slide deleted successfully!" });
    });
};



// Get all processes
export const getProcesses = (req, res) => {
  const query = "SELECT * FROM our_process";
  db.query(query, (err, results) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(results);
  });
};

// Add a new process
export const addProcess = (req, res) => {
  const { title, description, tags, imgUrl } = req.body;
  const query = "INSERT INTO our_process (title, description, tags) VALUES (?, ?, ?)";
  db.query(query, [title, description, tags], (err, results) => {
    if (err) return res.status(500).json({"addProcess error": err});
    return res.status(201).json({ message: "Process added successfully!" });
  });
};

// Update a process
export const updateProcess = (req, res) => {
  const { title, description, tags } = req.body;
  const query = "UPDATE our_process SET title = ?, description = ?, tags = ? WHERE id = ?";
  db.query(query, [title, description, tags, req.params.id], (err, results) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json({ message: "Process updated successfully!" });
  });
};

// Delete a process
export const deleteProcess = (req, res) => {
  const query = "DELETE FROM our_process WHERE id = ?";
  db.query(query, [req.params.id], (err, results) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json({ message: "Process deleted successfully!" });
  });
};
