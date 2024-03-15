import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'

dotenv.config();
const SECRET = process.env.SECRET

const auth = (req, res, next) => {
    if(req){
    const token = req['x-access-token'];
    jwt.verify(token, SECRET, (err, decoded) => {
        if(err) return res.status(401).json({success: false, message: 'Unauthorized User'});
        next();
    });}
}

export default auth