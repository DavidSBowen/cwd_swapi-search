import React, { Component } from 'react';
// import '../stylesheets/ListItem.css';

class ListItem extends Component {
    render() {
        const { key2, value } = this.props;
        return (
            <li className="listItem">
                <p className="leftItem">{key2}</p>
                <p className="rightItem">{value}</p>
            </li>
        );
    }
}

export default ListItem;