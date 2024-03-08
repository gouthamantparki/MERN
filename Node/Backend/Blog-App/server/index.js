import express from 'express'
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes.js'
import dotenv from 'dotenv'

dotenv.config();

const app = express();

const PORT = process.env.PORT;

const CONNECTION_URL = process.env.CONNECTION_URL

app.use(express.json());

app.use('/api/v1/users', userRoutes);

app.get('/', (req, res) => res.status(200).json({success:true, message: 'welcome'}));

mongoose.connect(CONNECTION_URL)
    .then(() =>
        app.listen(PORT, () => console.log('Server is running in http://localhost:5000'))
    )
    .catch(error => console.log(error));

