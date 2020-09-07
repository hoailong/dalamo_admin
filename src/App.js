import React, { Suspense } from "react";
import "./App.scss";
import "mapbox-gl/dist/mapbox-gl.css";
import Loading from "./components/Loading";
import Routes from "./routes"

function App() {
    
    return (
        <div className="App">
            <Suspense fallback={<Loading />}>
                <Routes />
            </Suspense>
        </div>
    );
}

export default App;
