import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom';

// import '../tailwind.output.css';

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            userNiceName: '',
            userEmail: '',
            loggedIn: false,
            loading: false,
            error: '',
            token: '',
            messageError: ''
        }
    }

    onFormSubmit = (event) => {
        event.preventDefault();

        const loginData = {
            username: this.state.username,
            password: this.state.password,
        }

        this.setState({
            loading: true
        }, () => {
            axios.post('https://wpwoo.acbn.xyz/wp-json/jwt-auth/v1/token', loginData)
                .then(res => {
                   // console.log(res.data)
                    if (undefined == res.data.token) {
                        this.setState({
                            error: res.data.message,
                            loading: false
                        })
                        return;
                    }

                    localStorage.setItem('token', res.data.token)
                    localStorage.setItem('userName', res.data.user_nicename)

                    this.setState({
                        loading: false,
                        token: res.data.token,
                        userNiceName: res.data.user_nicename,
                        userEmail: res.data.user_email,
                        loggedIn: true
                    })
                })
                .catch(err => {
                    //  console.log(err.message)
                    // Error
                    if (err.response) {
                       // console.log('soim')
                        console.log(err.response.data);
                        console.log(err.response.data.message);
                        this.setState({
                            messageError: err.response.data.message,
                            loading: false
                        })
                    }
                    else if (err.request) {
                        // The request was made but no response was received
                        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                        // http.ClientRequest in node.js
                        console.log(err.request);
                    }
                    else {
                        // Something happened in setting up the request that triggered an Error
                        console.log('Error', err.message);
                    }
                })
        })
    }

    handleOnChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };


    createMarkup(html) {
        return { __html: html }
    }


    render() {

        const { username, password, loggedIn, userNiceName, messageError } = this.state;
        const user = userNiceName ? userNiceName : localStorage.getItem('userName');
        // console.log('user: ' + user)

        if (loggedIn || localStorage.getItem('token')) {
            return <Redirect to={`/dashboard/${user}`} noThrow />
        } else {

            return (
                <div className="container mx-auto mt-10">
                    <div className="w-full mx-auto max-w-md">

                        <h2 className="h1 mb-10 mt-10">
                            Login</h2>

                        <form
                            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                            onSubmit={this.onFormSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                    Username:
                                    </label>
                                <input
                                    id="username"
                                    type="text"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    name="username"
                                    value={username}
                                    onChange={this.handleOnChange}
                                />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="password" 
                                className="block text-gray-700 text-sm font-bold mb-2">
                                    Password:
                                    </label>
                                <input
                                    id="password"
                                    type="password"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                    name="password"
                                    value={password}
                                    onChange={this.handleOnChange}
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Login</button>
                            </div>

                            {
                                messageError ? (
                                    // <div dangerouslySetInnerHTML={this.createMarkup(messageError)}></div>
                                    <div className="mt-10 bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
                                        <p className="font-bold">ERROR:</p>
                                        <p>Invalid username. Lost your password?.</p>
                                    </div>
                                ) : ''
                            }

                        </form>
                    </div>

                </div>
            )
        }
    }
}

export default Login
