import React, {Component} from 'react';
import {ResultCard} from './ResultCard';

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
}