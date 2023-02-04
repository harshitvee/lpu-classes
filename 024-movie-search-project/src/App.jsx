import "./App.css";
import MovieSearch from "./MovieSearch";
const API_KEY = import.meta.env.VITE_API_KEY;
function App() {
    return (
        <div className="App">
            <MovieSearch />
        </div>
    );
}

export default App;
