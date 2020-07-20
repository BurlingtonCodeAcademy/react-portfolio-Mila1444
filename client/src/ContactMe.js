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
                    <h2> Send Me A Meassage:</h2>
                    <div id='form-container'>
                        <div id='form-text'>
                            <div>Name</div>
                            <div>Phone Number</div>
                            <div>Email</div>
                            <div>Message</div>
                        </div>
                        <form id='contactme-form' onSubmit={this.handleSubmit}>
                            <label>
                                
                        <input id='text-message' type="text" value={this.state.value} onChange={this.handleChange} />
                            </label>
                            <label>
                                
                        <input id='text-message' type="text" value={this.state.value} onChange={this.handleChange} />
                            </label>
                            <label>
                                
                        <input id='text-message' type="text" value={this.state.value} onChange={this.handleChange} />
                            </label>
                            <label>
                                
                        <textarea id='text-message' value={this.state.value} onChange={this.handleChange} />
                            </label>
                            <input id='button' type="submit" value="Submit" />
                        </form>
                    </div>

                </div>
                <div id='sidebar-contact-me'>
                    <h3> Send me a message if you would like to talk about:</h3>
                    <ul>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>And More...</li>
                    </ul>
                </div>
            </div>
        )

    }





}

export default ContactMe
