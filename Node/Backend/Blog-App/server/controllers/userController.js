import users from '../data.js'
import { v4 as uuidv4 } from 'uuid'
import bcrypt from 'bcrypt'
import User from '../models/userModel.js'

export const getAllUsers = async (req, res) => {
    try {
        res.status(200).json({success: true, data: users})
    } catch (error) {
        res.status(404).json({success: false, message:error})
    }
}

export const getUserById = async (req, res) => {
    try {
        const {id} = req.params;
        let user = users.find((user) => user.id === +id)
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
        res.status(201).json({success: true, data: user});
    } catch (error) {
        res.status(404).json({success: false, message:error})
    }
}


export const createUser = async (req, res) => {
    try {
        const data = {...req.body, id: uuidv4()}
        res.status(200).json({success: true, message: 'User saved successfully', data: data})
    } catch (error) {
        res.status(404).json({success: false, message: 'User failed to save', data: data})
    }
};

export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const updatedUser = users.map((user) => user.id === +id ? {...user, ...data} : user)
        console.log(updatedUser)
        res.status(200).json({success: true, message: 'User saved successfully', data: updatedUser})
    } catch (error) {
        res.status(404).json({success: false, message: 'User failed to save'})
    }
};

export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedUserList = users.filter((user) => user.id !== +id)
        res.status(200).json({success: true, message: 'User deleted successfully', data: updatedUserList})
    } catch (error) {
        res.status(404).json({success: false, message: 'User failed to delete'})
    }
};