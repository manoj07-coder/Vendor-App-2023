import bcrypt from 'bcryptjs';
import User from '../models/userModel.js'



export const signUp = async (req,res,next)=>{
    const {username,email,password} = req.body;
    const hashedPassword = bcrypt.hashSync(password,10);
    const newUser = new User({username,email,password:hashedPassword})
    try {
        await newUser.save();
        res.status(200).json('User created succesfully')
    } catch (error) {
        next(error)
    }
}
export const signIn = async (req,res,next)=>{
    
}
export const google = async (req,res,next)=>{

}
export const signOut = async (req,res,next)=>{

}