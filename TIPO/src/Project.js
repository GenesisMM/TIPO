import React, { Component } from 'react';
import './App.css';

class Project {

    // Default Constructor for Project Object
    constructor() {
        this.id = 0;
        this.name = "project";
        this.picture = "image.png";
        this.tasks = Array();
    }

    // Getter Method for project id
    getId() {
        return this.id;
    }

    // Setter Method for project id
    setId(newId) {
        this.id = newId;
    }

    // Getter Method for project name
    getName() {
        return this.name;
    }

    // Setter Method for project name
    setName(newName) {
        this.name = newName;
    }

}


export default Project;