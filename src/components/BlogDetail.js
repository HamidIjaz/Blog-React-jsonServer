import { useHistory, useParams } from 'react-router'
import { Link } from 'react-router-dom'
import useFetch from './useFetch'

const BlogDetail = () => {

    const { id } = useParams()
    const { data: blog, isPending, error } = useFetch('http://localhost:8000/blogs/' + id)
    const history = useHistory()

    const DeletePost = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: "DELETE"
        })
            .then(() => {
                history.push('/')
            })
    }
    
    return (
        <div className='blog-details'>
            {error && <div style={{ fontSize: 18 }} >{error}</div>}
            {isPending && <div style={{ fontSize: 18 }} >Sabar karo...</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button style={{ backgroundColor: 'red' }} onClick={DeletePost}>Delete</button>
                    <Link style={{ marginLeft: 10 }} to={`/update/${id}`}>Update</Link>
                </article>
            )}
        </div>
    )
}

export default BlogDetail