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
            </div>
        )
    }
}