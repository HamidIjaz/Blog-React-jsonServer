import { useState } from 'react'
import {useHistory} from 'react-router-dom'
const CreatePost = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('')
    const [isPending, setisPending] = useState(false)
    const history= useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = { title, body, author }
        setisPending(true)
        fetch('http://localhost:8000/blogs', {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(blog)

        }).then(() => {
            console.log("blog added")
            setisPending(false)
            history.push('/')
        })
        
    }
    return (
        <div className="create">
            <h2>Create a new Post</h2>
            <form onSubmit={handleSubmit}>
                <label>title</label>
                <input type="text" value={title} required onChange={(e) => setTitle(e.target.value)}></input>
                <label>body</label>
                <textarea value={body} required onChange={(e) => setBody(e.target.value)}></textarea>
                <label>Author</label>
                <input type="text" value={author} required onChange={(e) => setAuthor(e.target.value)}></input>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding blog...</button>}
            </form>
        </div>
    )
}

export default CreatePost

