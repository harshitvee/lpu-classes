import React from "react";
import { Link } from "react-router-dom";
function Movie({ Title, Year, imdbID, Type, Poster }) {
    return (
        <div>
            <img src={Poster} alt={Title} />
            <h2>{Title}</h2>
        </div>
    );
}

export default Movie;
