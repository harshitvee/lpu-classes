import React from "react";

function Movie({ Title, Year, imdbID, Type, Poster }) {
    return (
        <div>
            <img src={Poster} alt={Title} />
            <h2>{Title}</h2>
        </div>
    );
}

export default Movie;
