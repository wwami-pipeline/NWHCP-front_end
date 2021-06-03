import React, {Component} from 'react';
import {ResultCard} from './ResultCard';

<<<<<<< HEAD
export class ResultGroup extends React.Component {
    render() {
        let r = [];
        for (let i = 0; i < 6; i++) {
            r.push(<ResultCard />);
        }
        return (
            <div>
                {r}
            </div>
        )
    }
=======
// export class ResultGroup extends React.Component {
//     render() {
//         let r = [];
//         for (let i = 0; i < 6; i++) {
//             r.push(<ResultCard />);
//         }
//         return (
//             <div>
//                 {r}
//             </div>
//         )
//     }
// }

// component that contains all results from search
// takes in a programs prop (array of health career pathway programs represented as JSONs)
export default function ResultGroup(props) {
    let r = [];
    for (let i = 0; i < props.programs.length; i++) {
        r.push(<ResultCard program={props.programs[i]}/>);
    }
    return (
        <div>
            {r}
        </div>
    )
>>>>>>> hackathon
}