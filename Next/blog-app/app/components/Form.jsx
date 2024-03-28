import Link from "next/link"

const Form = ({type, post, setPost, submitting, handleSubmit}) => {
  return (
    <div className="container border border-dark mt-4 w-50 p-5">
        <h2 className="display-6 text-center mt-4">{type} Post</h2>
        <div className="d-flex justify-content-center align-item-center mt-5">
        <form onSubmit={handleSubmit}>
            <p>
                <input type="text" placeholder="Enter title" className="form-control" value={post.title} 
                onChange={(e) => setPost({...post, title: e.target.value})} required/>
            </p>
            <p>
                <textarea placeholder="Enter description" className="form-control" value={post.description} 
                onChange={(e) => setPost({...post, description: e.target.value})} required/>
            </p>
            <p>
                <input type="text" placeholder="Enter tags (seperated by commas)" className="form-control" value={post.tags} 
                onChange={(e) => setPost({...post, tags: e.target.value})} required/>
            </p>
            <p className="d-flex justify-content-center align-items-center mt-4">
            <button type="submit" className="btn btn-primary me-4">{ submitting ? "Submitting..." : "Create" }</button>
            <Link href="/" className="btn btn-danger">Cancel</Link>
            </p>
        </form>
    </div>
    </div>
  )
}

export default Form