import express from 'express'
import { deleteUser, getAllUsers, getUserById, updateUser, signup, signin } from '../controllers/userController.js';

const router = express.Router();

router.get('/', getAllUsers);

router.get('/:id', getUserById);

router.post('/signup', signup);

router.post('/signin', signin);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);

export default router