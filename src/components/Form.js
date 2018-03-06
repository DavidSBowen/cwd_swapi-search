import React, { Component } from 'react';
import Result from './Result';
import '../stylesheets/Form.css';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            searchValue: '',
            radioValue: ''
        }
    }

    search_button_click() {
        let searchField = document.getElementById('searchField').value;
        console.log(searchField);
        let radioElements = document.getElementsByName('selection');
        let selectedElement = '';

        for (let i = 0; i < radioElements.length; i++) {
            if (radioElements[i].checked) {
                selectedElement = radioElements[i].value;
            }
        }
        this.setState({ searchValue: selectedElement })
    }

    render() {
        return (
            <form action="" method="get">
                <div id="radioSelection">
                    <div className="radioItems">
                        <label htmlFor="">Planets:</label>
                        <input type="radio" name="selection" value="planets" id="" />
                        <label htmlFor="">Spaceships:</label>
                        <input type="radio" name="selection" value="spaceships" id="" />
                        <label htmlFor="">Vehicles:</label>
                        <input type="radio" name="selection" value="vehicles" id="" />
                        <label htmlFor="">People:</label>
                        <input type="radio" name="selection" value="people" id="" />
                        <label htmlFor="">Films:</label>
                        <input type="radio" name="selection" value="films" id="" />
                        <label htmlFor="">Species:</label>
                        <input type="radio" name="selection" value="species" id="" />
                    </div>
                </div>

                <div>
                    <input type="text" name="" id="searchField" placeholder="Enter info" />
                    <input type="button" value="Search" id="searchButton" onClick={this.search_button_click} />
                </div>

                <hr />
                <Result />
            </form>
        );
    }
}

export default Form;