import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
class SignInForm extends Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = {
            username: this.state.username,
            password: this.state.password,


        };
        axios({
            method: 'post',
            url: 'http://localhost:4000/api/users/signin',
            data: user,
        })
            .then(response => {
                console.log(response);

            })
            .catch(error => {
                console.log(error);
            });

        console.log('The form was submitted with the following data:');
        console.log(this.state);
    }

    render() {
        return (
            <div className="FormCenter">
                <form onSubmit={this.handleSubmit} className="FormFields" >
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="username">User Name</label>
                        <input type="username" id="username" className="FormField__Input" placeholder="Enter your username" name="username" value={this.state.email} onChange={this.handleChange} />
                    </div>

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="password">Password</label>
                        <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
                    </div>

                    <div className="FormField">
                        <button className="FormField__Button mr-20">Sign In</button> <Link to="/" className="FormField__Link">Create an account</Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignInForm;