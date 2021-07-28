import React from "react";
import Header from "./components/Header/Header";
import {Description} from "./components/Description/Description";
import CardList from "./components/CardList/CardList";
import SimpleMap from "./components/Map/Map";
import Scroll from "./components/Scroll/Scroll";

function App() {
    return (
        <div className="App">
            <Header/>
            <div className="container">
                <Description/>
                <Scroll />
                <CardList/>
            </div>
            <SimpleMap/>
        </div>
    );
}

export default App;
