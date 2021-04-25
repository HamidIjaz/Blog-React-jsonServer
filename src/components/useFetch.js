import { useState, useEffect } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const AbbortCont = new AbortController()
        setTimeout(() => {
            fetch(url, { signal: AbbortCont.signal })
                .then(res => {
                    if (!res.ok) {
                        throw Error("taqleef lai maqzrat page ni lab rhya")
                    }
                    return res.json()
                })
                .then(data => {
                    setData(data)
                    setIsPending(false)
                    setError(null)
                })
                .catch((err) => {
                    if (err.name === 'AbortError') {
                        console.log("Fetch Aborted")
                    }
                    else {
                        setIsPending(false)
                        setError(err.message)
                    }
                })
        }, 500)

        return () => AbbortCont.abort()
    }, [url])
    return (
        { data, isPending, error }
    )
}

export default useFetch
