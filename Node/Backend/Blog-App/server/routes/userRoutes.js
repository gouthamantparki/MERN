import express from 'express'
import { createUser, deleteUser, getAllUsers, getUserById, updateUser, signup } from '../controllers/userController.js';

const router = express.Router();

router.get('/', getAllUsers);

router.get('/:id', getUserById);

router.post('/signup', signup);

router.post('/', createUser);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);

export default router