import React from "react";
import Movie from "./Movie";
function Movies({ movies }) {
    return (
        <div>
            {movies.map((movie) => {
                return <Movie key={movie.imdbID} {...movie} />;
            })}
        </div>
    );
}

export default Movies;
