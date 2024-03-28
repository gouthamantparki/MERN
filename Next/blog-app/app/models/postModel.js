import {Schema, model, models} from 'mongoose'

const postSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        required: [true, 'Title is required'],
        trim: true
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        trim: true
    },
    tags: {
        type: [String],
        required: [true, 'Tags is required'],
        trim: true
    }
},
{
    timestamps: true
});


const Post = models.Post || model('Post', postSchema)

export default Post;