import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div>
            <h1>Page Note Found</h1>
            <Link to="/">Go back to home page</Link>
        </div>
    )
}

export default NotFound
