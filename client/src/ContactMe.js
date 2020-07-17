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
                <div id='sidebar'>
                    <h1> This will be a sidebar</h1>
                </div>
            </div>
        )

    }





}

export default ContactMe
