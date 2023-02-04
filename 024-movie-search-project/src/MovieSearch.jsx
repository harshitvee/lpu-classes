import { useState } from "react";

function MovieSearch() {
    const [movieTitle, setMovieTitle] = useState("");
    return (
        <form>
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
