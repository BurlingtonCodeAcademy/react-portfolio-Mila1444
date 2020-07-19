import React from 'react'
import { render } from 'react-dom';

class ContactMe extends React.Component {

    constructor(props) {
        super(props)
        this.state = { value: '' }
    }

//should this stay here or passed as props
    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }

    handleSubmit = (event) => {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
        //doSomethingWithEvent(event);
    }

    render() {

        return (
            <div id='main-container'>
                <div id='body'>
                    <div id='form-container'>
                    <h1> Here is how you can contact me</h1>
                    <form id='contactme-form' onSubmit={this.handleSubmit}>
                        <label>
                            Name:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                        </label>
                        <label>
                            Phone Number:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                        </label>
                        <label>
                            Email:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                        </label>
                        <label>
                            Message:
                        <textarea value={this.state.value} onChange={this.handleChange} />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                    </div>
                </div>
                <div id='sidebar-contact-me'>
                    <h3> If you would like to talk about:</h3>
                    <ul>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Mongot</li>
                    </ul>
                </div>
            </div>
        )

    }





}

export default ContactMe
