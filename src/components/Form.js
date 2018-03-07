import React, { Component } from 'react';
import Result from './Result';
import '../stylesheets/Form.css';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            characteristics: {},
            status: '',
            selectedElement: '',
            searchField: ''
        }
    }

    verifySearchField = (info) => {
        if (info.length > 0 && !isNaN(parseInt(info, 10))) {
            return true;
        } else {
            return false;
        }
    }

    search_button_click = () => {
        let searchField = document.getElementById('searchField').value;
        let radioElements = document.getElementsByName('selection');
        let selectedElement = '';

        if (this.verifySearchField(searchField)) {
            for (let i = 0; i < radioElements.length; i++) {
                if (radioElements[i].checked) {
                    selectedElement = radioElements[i].value;
                }
            }
            if (selectedElement === '') {
                this.setState({ status: "Please select an option" });
                this.setState({ characteristics: {} });
            } else {
                let link = this.getLink(searchField, selectedElement);
                this.retrieveData(link);
            }
        } else {
            this.setState({ status: "Please enter a whole number in the search field" });
            this.setState({ characteristics: {} });
        }
    }

    retrieveData = (link) => {
        fetch(link)
            .then((response) => {
                if (response.status >= 200 && response.status < 400) {
                    return response.json();
                }
            }).then((jsonData) => {
                if (!jsonData) {
                    this.setState({ status: 'Please try another number' });
                    this.setState({ characteristics: {} });
                } else {
                    this.setState({ characteristics: jsonData });
                    this.setState({ status: "" });
                }
            })
    }

    getLink = (search, radio) => {
        return `https://swapi.co/api/${radio}/${search}/?format=json`;
    }

    render() {
        return (
            <form action="" method="get">
                <label htmlFor="">Select an option:</label>
                <div id="radioSelection">
                    <div className="radioItems">
                        <label htmlFor="">Planets:</label>
                        <input type="radio" name="selection" value="planets" id="" />
                        <label htmlFor="">Starships:</label>
                        <input type="radio" name="selection" value="starships" id="" />
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
                    <label htmlFor="">Enter a number:</label>
                    <input type="text" name="" id="searchField" placeholder="Enter info" />
                    <input type="button" value="Search" id="searchButton" onClick={this.search_button_click} />
                </div>

                <hr />
                <Result characteristics={this.state.characteristics} status={this.state.status} />
            </form>
        );
    }
}

export default Form;