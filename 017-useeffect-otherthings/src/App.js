import { useState, useEffect } from "react";
import "./App.css";

const URL = "https://jsonplaceholder.typicode.com/posts";

// async await
function App() {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    async function fetchData() {
        const response = await fetch(URL);
        const data = await response.json();
        // console.log(data);
        // setState

        setPosts(data);
        setIsLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, []);

    if (isLoading) {
        return <h1>Loading .....</h1>;
    } else {
        return (
            <>
                {posts.map((post) => {
                    return (
                        <article>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                        </article>
                    );
                })}
            </>
        );
    }
}

export default App;
