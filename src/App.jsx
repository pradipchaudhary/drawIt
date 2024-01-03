import Toolbar from "./components/Toolbar";
import Toggle from "./components/Toggle";
import Home from "./components/Home";

function App() {
    return (
        <>
            <div id="main__container">
                <Toolbar />
                <Home />
                <Toggle />
            </div>
        </>
    );
}

export default App;
