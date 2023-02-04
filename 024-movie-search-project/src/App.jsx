import "./App.css";
import { useReducer } from "react";
import MovieSearch from "./MovieSearch";

function reducer(movies, action) {
    if (action.type === "ADD_MOVIES") {
        return [...movies, ...action.payload.movies];
    }
    return movies;
}
function App() {
    const [movies, dispatch] = useReducer(reducer, []);
    return (
        <div className="App">
            <MovieSearch dispatch={dispatch} />
        </div>
    );
}

export default App;
