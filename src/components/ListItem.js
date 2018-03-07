import React, { Component } from 'react';
import '../stylesheets/ListItem.css';
import 'tachyons';

class ListItem extends Component {
    render() {
        const { key2, value } = this.props;
        return (
            <li className="listItem listFlexBox">
                <span className="leftItem">{key2}:</span>
                <span className="rightItem ">{value}</span>
            </li>
        );
    }
}

export default ListItem;