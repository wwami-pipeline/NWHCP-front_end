<<<<<<< HEAD
import React, {Component} from 'react';
import {Search} from './Search';
// import {ResultCard} from './ResultCard';
import {ResultGroup} from './ResultGroup';
import {ResultMap} from './ResultMap';

export class Results extends React.Component {
    render() {
        return (
            <div>
                {/* <Search /> */}
                {/* <ResultCard /> */}
                <ResultMap />
                <ResultGroup />
=======
import React, {Component, useState} from 'react';
import {Search} from './Search';
// import {ResultCard} from './ResultCard';
import ResultGroup from './ResultGroup';
import {ResultMap} from './ResultMap';

export class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            programs: [],
            error: null,
            isLoaded: false,
            dataToSend: {
                "searchContent": "seattle",
                "CareerEmp": ["Nursing"],
                "HasCost": false,
                "Under18":false, 
                "HasTransport":false, 
                "HasShadow":false, 
                "GradeLevels":[]
            }
        }
    }

    componentDidMount() {
        const sendData = {
            "searchContent": "seattle",
            "CareerEmp": ["Nursing"],
            "HasCost": false,
            "Under18":false, 
            "HasTransport":false, 
            "HasShadow":false, 
            "GradeLevels":[]
        }

        const response = fetch("http://nwhealthcareerpath.uw.edu/api/v1/search", {
            method: "POST",
            body: JSON.stringify(sendData),
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              })
        })
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result)
                this.setState({
                    isLoaded: true,
                    programs: result
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        );
    // console.log(this.state.programs);
    }

    render() {
        return (
            <div>
                <Search />
                {/* <ResultCard /> */}
                <ResultMap programs={this.state.programs}/>
                <ResultGroup programs={this.state.programs}/>
>>>>>>> hackathon
            </div>
        )
    }
}