import React from "react";
import "./App.css";

import List from "./Containers/List/List";
import Header from "./Components/Header/Header";

function App() {
    return (
        <div className="App">
            <Header />
            <List />
        </div>
    );
}

export default App;
