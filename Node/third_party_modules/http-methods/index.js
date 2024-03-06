import express from 'express'
import users from './data.js'
import { v4 as uuidv4 } from 'uuid'

const app = express();

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({success: true, message: "Welcome"});
})

app.get('/api/v1/users', (req, res) => {
    res.status(200).json({success: true, data: users});
})

app.get('/api/v1/user/:id', async (req, res) => {
    try {
        const { id } = req.params;
        let user = users.find((user) => user.id === +id)
        if(!user) {
            res.status(404).json({success: false, message: `No User found with id ${id}`});
        } else {
            res.status(200).json({success: true, data: user});
        }
    } catch (error) {
        res.status(400).json({success: false, message: `error`});
    }
})

app.post('/api/v1/users', async (req, res) => {
    try {
        const data = {...req.body, id: uuidv4()}
        res.status(200).json({success: true, message: 'User saved successfully', data: data})
    } catch (error) {
        res.status(404).json({success: false, message: 'User failed to save', data: data})
    }
})

app.put('/api/v1/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const updatedUser = users.map((user) => user.id === +id ? {...user, ...data} : user)
        console.log(updatedUser)
        res.status(200).json({success: true, message: 'User saved successfully', data: updatedUser})
    } catch (error) {
        res.status(404).json({success: false, message: 'User failed to save'})
    }
})

app.delete('/api/v1/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updatedUserList = users.filter((user) => user.id !== +id)
        res.status(200).json({success: true, message: 'User deleted successfully', data: updatedUserList})
    } catch (error) {
        res.status(404).json({success: false, message: 'User failed to delete'})
    }
})

app.listen(5000, () => console.log('Server is running in http://localhost:5000'))