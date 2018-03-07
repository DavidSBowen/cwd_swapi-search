import React, { Component } from 'react';
import ListItem from './ListItem';

class Result extends Component {

    placeCharacteristics = (ch) => {
        let objKeys = Object.keys(ch);
        let objValues = [];

        for (let i in ch) {
            objValues.push(ch[i]);
        }

        let itemsHere = objKeys.map((a, b) => {
            return (<ListItem
                key={b}
                key2={a}
                value={objValues[b]} />
            )
        });

        return itemsHere;
    }

    render() {
        const { characteristics, status } = this.props;
        return (
            <div>
                <h1>{status}</h1>
                <ul>{this.placeCharacteristics(characteristics)}</ul>
            </div>
        );
    }
}

export default Result;