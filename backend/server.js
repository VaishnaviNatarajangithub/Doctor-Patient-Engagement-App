/*import express from 'express'
import cors from 'cors'
import dotenv from "dotenv";
dotenv.config({ path: "./routes/.env" });
import connectDB from './config/mongodb.js'
//import connectCloudinary from './config/cloudinary.js'
import adminRouter from './routes/adminRoute.js'
import { connectCloudinary } from './config/cloudinary.js';
import doctorRouter from './routes/doctorRoute.js';
import userRouter from './routes/userRoute.js';


//app config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

//middlewares
app.use(express.json())

app.use(cors({
    origin: "https://doctor-appointment-booking-app-admin-2zlf.onrender.com"
    credentials: true
}));
const allowedOrigins = ['https://doctor-patient-engagement-app-frontend.onrender.com', 'https://doctor-appointment-booking-app-admin-2zlf.onrender.com'];

app.use(cors({
  origin: function(origin, callback) {
    // allow requests with no origin like Postman or curl
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = `The CORS policy does not allow access from origin: ${origin}`;
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true
})); 


//api endpoints
app.use('/api/admin',adminRouter)
app.use('/api/doctor',doctorRouter)
app.use('/api/user',userRouter)


app.get('/',(req,res)=>{
    res.send('API Working')
})

app.listen(port, ()=> console.log("Server Started",port)) */
import dotenv from "dotenv";
dotenv.config({ path: "./routes/.env" });
import express from 'express';
import cors from 'cors';


import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';

import adminRouter from './routes/adminRoute.js';
import doctorRouter from './routes/doctorRoute.js';
import userRouter from './routes/userRoute.js';

// App config
const app = express();
const port = process.env.PORT || 4000;

// Connect DB & Cloudinary
connectDB();
connectCloudinary();

// Middlewares
// Parse JSON bodies
app.use(express.json());
// Parse URL-encoded bodies (for form-data without files)
app.use(express.urlencoded({ extended: true }));

// CORS setup
app.use(cors({
  origin: ["https://doctor-patient-engagement-app-frontend.onrender.com", "https://doctor-appointment-booking-app-admin-2zlf.onrender.com"],
  credentials: true
}));


// API endpoints
app.use('/api/admin', adminRouter);
app.use('/api/doctor', doctorRouter);
app.use('/api/user', userRouter);


// Test route
app.get('/', (req, res) => {
    res.send('API Working');
});

// Start server
app.listen(port, () => console.log("Server Started on port", port));
