import { useState } from "react";

function MovieSearch() {
    const [movieTitle, setMovieTitle] = useState("");
    async function searchMovies() {
        const searchURL = `https://www.omdbapi.com/?s=${movieTitle}&apikey=${
            import.meta.env.VITE_API_KEY
        }`;
        const response = await fetch(searchURL);
        if (!response.ok) {
            throw new Error(
                `Something went Wrong, status code ${response.status}`
            );
        }
        const moviesData = await response.json();
        console.log(moviesData);
    }

    function handleSubmit(e) {
        e.preventDefault();
        searchMovies();
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={movieTitle}
                onChange={(e) => setMovieTitle(e.target.value)}
            />
            <input type="submit" value="Search Movies" />
        </form>
    );
}

export default MovieSearch;

// javascript Engine --- synchronouns programming

// whenever we want to do something in the background (like data fetching, setTimeout, setInterval)
// we handover that work to broswer.

// promise ---> future value

// promise --> fetch data
// pending , fullfiled , rejected

// fetch()

// broswer
