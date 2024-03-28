import { model, models, Schema } from "mongoose";

const userSchema = new Schema({
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
    image: {
        type: String,
        required: true
    },
},
{
    //For including created date in Database
    timestamps: true
});

const User = models.User || model('User', userSchema);

export default User;