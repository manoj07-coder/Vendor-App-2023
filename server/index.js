import express from 'express';
import authRoutes from './routes/auth.routes.js'
import vendorRoutes  from './routes/vendor.routes.js'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config();

const app = express();

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('Connected to database');
}).catch((err)=>{
    console.log(err);
})

app.listen(3000,()=>{
    console.log("Server listening on port 3000");
})

app.use('/api/auth',authRoutes);
app.use('/api/vendor',vendorRoutes)

app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal server error';
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message,
    })
})
