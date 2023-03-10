import { useState } from "react";

function MovieSearch({ dispatch }) {
    const [movieTitle, setMovieTitle] = useState("");
    async function searchMovies() {
        const searchURL = `https://www.omdbapi.com/?s=${movieTitle}&apikey=aa${
            import.meta.env.VITE_API_KEY
        }`;
        const response = await fetch(searchURL);
        console.log(response);
        if (!response.ok) {
            throw new Error(
                `Something went Wrong, status code ${response.status}`
            );
        }
        // json ---> javascript
        const moviesData = await response.json();
        console.log(moviesData.Search);
        dispatch({
            type: "ADD_MOVIES",
            payload: { movies: moviesData.Search },
        });
        setMovieTitle("");
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
