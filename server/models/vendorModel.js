import mongoose from "mongoose";

const vendorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    account:{
        type:Number,
        required:true,
    },
    bank:{
        type:String,
        required:true,
    },
    addrline1:{
        type:String,
        required:true,
    },
    addrline2:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        required:true,
    },
    country:{
        type:String,
        required:true,
    },
    zipcode:{
        type:String,
        required:true,
    },
},{timestamps:true})

const Vendor = mongoose.model('Vendor',vendorSchema);

export default Vendor;