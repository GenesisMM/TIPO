import React, { Component } from 'react';
import './App.css';
import Project from './Project.js';

class App extends Component {

    projectOne = new Project();

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>TIPO</h1>
                    <p>{ this.projectOne.getId() }</p>
                    <button onclick="">
                        Settings
                    </button>
                </header>
            </div>
        );
    }
}

export default App;
