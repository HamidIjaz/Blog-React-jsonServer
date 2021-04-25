import BlogList from './BlogList'
import useFetch from './useFetch'

const Home = () => {
    const {data, isPending, error} = useFetch('http://localhost:8000/blogs')

    return (
        <div className="home">
            <h1>All Blogs</h1>
            {error && <div style={{ fontSize: 18 }} >{ error }</div>}
            {isPending && <div style={{ fontSize: 18 }} >Sabar karo...</div>}
            {data && <BlogList blogs={data} />}
        </div>
    )
}

export default Home
