import "./App.css";
import { useReducer } from "react";
import MovieSearch from "./MovieSearch";
import Movies from "./Movies";
function reducer(movies, action) {
    if (action.type === "ADD_MOVIES") {
        return [...action.payload.movies];
    }
    return movies;
}
function App() {
    const [movies, dispatch] = useReducer(reducer, []);
    return (
        <div className="App">
            <MovieSearch dispatch={dispatch} />
            <Movies movies={movies} />
        </div>
    );
}

export default App;
