"use client"
import Form from '@/app/components/Form';
import { useSession } from 'next-auth/react';
import {useState} from 'react'
import { useRouter } from 'next/navigation'

const CreatePost = () => {
    const {data: session} = useSession();
    const router = useRouter()

    const [post, setPost] = useState({
        title: "",
        description: "",
        tags: ""
    })

    const [submitting, setSubmitting] = useState(false);

    const createPost = async (e) => {
        e.preventDefault();
        try {
            setSubmitting(true);
            const response = await fetch('/api/post', {
                method: "POST",
                body: JSON.stringify({
                    author: session.user.id,
                    title: post.title,
                    description: post.description,
                    tags: post.tags.split(',').map(tag => tag.trim())
                })
            })
            if(response.ok) {
                alert("Post created successfully")
                router.push("/")
            }
        } catch (error) {
            console.log(error)
        } finally {
            setSubmitting(false);
        }
    }

  return (
    <div className='container'>
        <Form type="Create" post={post} setPost={setPost} submitting={submitting} handleSubmit={createPost}/>
    </div>
  )
}

export default CreatePost