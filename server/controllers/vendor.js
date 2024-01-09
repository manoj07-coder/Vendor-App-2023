import Vendor from '../models/vendorModel.js'
import { errorHandler } from '../utils/errorHandler.js'

export const createVendor = async (req,res,next)=>{
    try {
        const vendor = await Vendor.create(req.body);
        return res.status(201).json({vendor});
    } catch (error) {
        next(error)
    }
}
export const deleteVendor = async (req,res,next)=>{
    try {
        await Vendor.findByIdAndDelete(req.params.id);
        res.status(200).json('Vendor has been deleted');
    } catch (error) {
        next(error)
    }
}
export const updateVendor = async (req,res,next)=>{
    try {
        const updateVendor = await Vendor.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        );
        res.status(200).json(updateVendor);
    } catch (error) {
        next(error)
    }
}
export const getVendor = async (req,res,next)=>{
    try {
        const vendor = await Vendor.findById(req.params.id);
        if(!vendor){
            return next(errorHandler(404,'vendor not found'));
        }
        res.status(200).json(vendor);
    } catch (error) {
        next(error)
    }
}
export const getVendorList = async (req,res,next)=>{
    try {
        const vendor = await Vendor.find();
        res.status(200).json(vendor);
    } catch (error) {
        next(error)
    }
}