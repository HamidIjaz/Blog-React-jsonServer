import React from 'react'
import { useHistory, useParams } from 'react-router'
import useFetch from './useFetch'

const BlogDetail = () => {
    const { id } = useParams()
    const { data: blog, isPending, error } = useFetch('http://localhost:8000/blogs/' + id)
    const history= useHistory()

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
                    <button onClick={DeletePost}>Delete</button>
                </article>
            )}
        </div>
    )
}

export default BlogDetail