import { Container } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import FileBase64 from 'react-file-base64'
import axios from "axios";

export const CreatePost = () => {

    const [post, setPost] = useState({
        title: '',
        description: '',
        image: '',
        tags: []
    })

    const handleInput = (e: any) => {
        const { name, value } = e.target;
        setPost((prev) => {
            if (name === 'tags') {
                return {
                    ...prev,
                    [name]: value.split(',')
                }
            }
            return {
                ...prev,
                [name]: value
            }
        })
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const token = localStorage?.getItem('token');

        if (token === null) {
            alert('Token missing');
            return;
        }

        const jwt = JSON.parse(atob(JSON.stringify(token).split('.')[1]));
        axios.post(`http://localhost:5000/api/v1/posts/${jwt.id}`, post)
            .then(res => alert(res.data.message))
            .catch(error => console.log(error.message))
    }

    return (
        <Container>
            <h2 className="display-6 text-center mt-4">Create Post</h2>
            <div className="container d-flex justify-content-center mt-4">

                <Form className='w-25'>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Enter Title</Form.Label>
                        <Form.Control type="text" placeholder="Title" name="title" value={post.title} onChange={handleInput} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                        <Form.Label>Enter Description</Form.Label>
                        <Form.Control type="text" placeholder="Description" name="description" value={post.description} onChange={handleInput} />
                    </Form.Group>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Upload Image</Form.Label>
                        <FileBase64 className="form-control" onDone={({ base64 }: any) => setPost((prev) => { return { ...prev, image: base64 } })} type="file" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                        <Form.Label>Enter Tags</Form.Label>
                        <Form.Control type="text" placeholder="Tags" name="tags" value={post.tags} onChange={handleInput} />
                    </Form.Group>
                    <div className='d-flex justify-content-around align-items-center'>
                        <Button variant="dark" onClick={handleSubmit}>Create</Button>{" "}
                        <Button variant="secondary" type="reset">Cancel</Button>{" "}
                    </div>
                </Form>
            </div>
        </Container>
    )
}
