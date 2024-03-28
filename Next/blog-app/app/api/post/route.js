import Post from "@/app/models/postModel";


export const POST = async (req, res) => {
    try {
        const {author, title, description, tags} = await req.json()
        await Post.create({author, title, description, tags})
        return new Response(JSON.stringify("Post created successfully"), {status: 201})
    } catch (error) {
        return new Response(JSON.stringify("Something went wrong"), {status: 500})
    }
}