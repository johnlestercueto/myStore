const multer = require('multer');
const path = require('path');
const { v4: uuidv4 } = require('uuid'); // Import UUID package

// Storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Save to 'uploads' folder in root
  },
  filename: (req, file, cb) => {
    // Get file extension in lowercase (e.g. .jpg, .pdf)
    const ext = path.extname(file.originalname).toLowerCase();
    // Generate unique filename with UUID + extension
    const filename = `${uuidv4()}${ext}`;
    cb(null, filename);
  }
});

// File filter (optional but recommended for security)
const fileFilter = (req, file, cb) => {
  const allowedTypes = ['.jpg', '.jpeg', '.png', '.pdf', '.jfif'];
  const ext = path.extname(file.originalname).toLowerCase();
  if (allowedTypes.includes(ext)) {
    cb(null, true); // Accept file
  } else {
    cb(new Error('Invalid file type'), false); // Reject file
  }
};

// Multer config
const upload = multer({
  storage,
  fileFilter, // Optional file filter
  limits: { fileSize: 5 * 1024 * 1024 } // Optional limit: 5MB
});

module.exports = upload;
