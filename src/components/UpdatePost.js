import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router'

const UpdatePost = () => {
    const { id } = useParams()
    const history = useHistory()
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('')
    const [isPendingUpdate, setisPendingUpdate] = useState(false)

    useEffect(() => {
        fetch('http://localhost:8000/blogs/' + id)
            .then((response) => response.json())
            .then((data) => {
                setTitle(data.title)
                setBody(data.body)
                setAuthor(data.author)
            })
            .catch((err) => {
                console.log(err)
            })
        console.log("uE")
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = { title, body, author }
        setisPendingUpdate(true)
        fetch('http://localhost:8000/blogs/' + id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(blog)
        })
            .then(res => res.json())
            .then(result => {
                console.log("blog updated")
                setisPendingUpdate(false)
                history.push('/')
            });
    }



    return (
        <div className="create">
            <h2>Update your Post</h2>
            <form onSubmit={handleSubmit}>
                <label>title</label>
                <input type="text" value={title} required onChange={(e) => setTitle(e.target.value)}></input>
                <label>body</label>
                <textarea value={body} required onChange={(e) => setBody(e.target.value)}></textarea>
                <label>Author</label>
                <input type="text" value={author} required onChange={(e) => setAuthor(e.target.value)}></input>
                <button onClick={() => history.push("/blogs/" + id, { from: "/" })}>Cancel</button>
                {!isPendingUpdate && <button style={{ marginLeft: 10 }}>Update Blog</button>}
                {isPendingUpdate && <button disabled>Updating blog...</button>}
            </form>
        </div>
    )
}

export default UpdatePost
