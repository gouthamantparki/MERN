import Post from '../models/postModels.js'

export const createPost = async (req, res) => {
    try {
        const { id } = req.params
        const post = await Post.create({author: id, ...req.body})
        res.status(201).json({success: true, data: post, message: 'Post saved'})
    } catch (error) {
        res.status(404).json({success: false, message: error})
    }
}

export const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate('author');
        res.status(200).json({success: true, data: posts})
    } catch (error) {
        res.status(404).json({success: false, message: error})
    }
}

export const getPostById = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await Post.findById(id).populate('author');
        if(!post) {
            res.status(404).json({success: false, message: `Post with id ${id} not found`})
        } else {
            res.status(200).json({success: true, data: post})
        }
    } catch (error) {
        res.status(404).json({success: false, message: error})
    }
}

export const updatePostById = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, image, tags } = req.body;
        const post = await Post.findByIdAndUpdate(id, { $set: { title: title, description: description, image: image, tags: tags } }, { new: true })
        // const post = await Post.findByIdAndUpdate(id, { ...req.body }, { new: true })
        res.status(200).json({success: true, message: 'Post updated', data: post});
    } catch (error) {
        res.status(404).json({success: false, message: error})
    }
}

export const deletePostById = async (req, res) => {
    try {
        const { id } = req.params;
        const deletePost = await Post.findByIdAndDelete(id);
        if(deletePost) {
            res.status(200).json({success: true, message: `Post with id ${id} deleted`})
        } else {
            res.status(404).json({success: false, message: `Failed to delete`})
        }
    } catch (error) {
        res.status(404).json({success: false, message: error})
    }
}