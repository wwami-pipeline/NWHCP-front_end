import React from 'react';
import Search from './Search';
import ResultCard from './ResultCard';
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

        const programCards = this.state.programs.map( (program, index) => {
            return (
                <div key={index}>
                    <ResultCard program={program} />
                </div>
            )
        })

        return (
            <div>
                <Search />
                <ResultMap programs={this.state.programs}/>
                <div className="mt-5">{programCards}</div>
            </div>
        )
    }
}