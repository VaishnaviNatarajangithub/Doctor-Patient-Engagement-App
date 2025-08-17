/*import multer from "multer";
const storage = multer.diskStorage({
    filename: function(req,file,callback){
        callback(null,file.originalname)
    }
})

const upload = multer({storage})

export default upload*/

import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // folder must exist
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

export default upload;




/*
import multer from "multer";
import path from "path";

// Configure multer storage
const storage = multer.diskStorage({
  // Folder where files will be saved
  destination: (req, file, callback) => {
    callback(null, path.join(process.cwd(), "uploads")); // saves to /uploads folder in project root
  },
  // Set filename to avoid duplicates
  filename: (req, file, callback) => {
    const uniqueName = Date.now() + "-" + file.originalname;
    callback(null, uniqueName);
  }
});

// Create upload middleware
const upload = multer({ storage });

export default upload;*/
