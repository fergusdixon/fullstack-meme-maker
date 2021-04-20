import React from 'react';
import './App.css';
import {Memes} from "./features/memes/Memes";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Meme Maker</h1>
                <Memes/>
            </header>
        </div>
    );
}

export default App;
