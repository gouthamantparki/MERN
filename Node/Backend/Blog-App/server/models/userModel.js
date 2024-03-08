import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        minLength: [4, 'Username must contain atleast 5 characters']
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
},
{
    //For including created date in Database
    timestamps: true
});

const User = mongoose.model('User', userSchema);

export default User;