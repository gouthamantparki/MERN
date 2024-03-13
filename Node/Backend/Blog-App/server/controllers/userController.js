import bcrypt from 'bcrypt'
import User from '../models/userModel.js'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config();
const SECRET = process.env.SECRET;

export const getAllUsers = async (req, res) => {
    try {
        const userList = await User.find();
        res.status(200).json({success: true, data: userList})
    } catch (error) {
        res.status(404).json({success: false, message:error})
    }
};

export const getUserById = async (req, res) => {
    try {
        const {id} = req.params;
        let user = await User.findById(id)
        if(user) {
            res.status(200).json({success: true, data: user})
        } else {
            res.status(404).json({success: true, message: `No user found with id: ${id}`})
        }

    } catch (error) {
        res.status(404).json({success: false, message:error})
    }
};

export const signup = async (req, res) => {
    try {
        const {username, email, password, confirmPassword} = req.body;
        const encryptedPassword = await bcrypt.hash(password, 12)
        const signupObj = {
            username: username, 
            email: email,
            password: encryptedPassword,
        }
        const user = await User.create(signupObj);
        res.status(201).json({success: true, data: user, message: 'User created successfully'});
    } catch (error) {
        res.status(404).json({success: false, message:error})
    }
};

export const signin = async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email: email})
        if(!user) {
            res.status(404).json({success: false, message:`User not found with email: ${email}`});
            return;
        }
        const isUserValid = await bcrypt.compare(password, user.password);
        if(isUserValid) {
            const token = jwt.sign({email: user.email, id: user._id}, SECRET)
            res.status(200).json({success: true, message: 'User Logged In', token: token});
        } else {
            res.status(404).json({success: false, message:'Invalid Credentials'});
        }
    } catch (error) {
        res.status(404).json({success: false, message:error})
    }
};

export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const encryptedPassword = await bcrypt.hash(req.body.password, 12);
        const updatedUser = await User.findByIdAndUpdate(id, {...req.body, password: encryptedPassword}, {new: true})
        res.status(200).json({success: true, message: 'User saved successfully', data: updatedUser})
    } catch (error) {
        res.status(404).json({success: false, message: error.message})
    }
};

export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteUser = await User.findByIdAndDelete(id)
        if(deleteUser) {
            res.status(200).json({success: true, message: 'User deleted successfully'});
        } else {
            res.status(404).json({success: false, message: 'User failed to delete'});
        }
    } catch (error) {
        res.status(404).json({success: false, message: 'User failed to delete'});
    }
};