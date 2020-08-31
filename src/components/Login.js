import React, { Component, Fragment } from 'react'
import axios from 'axios'
import { Redirect, Link } from 'react-router-dom';

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

                <div class="h-screen font-sans login bg-cover">
                    <div className="container mx-auto h-full flex flex-1 justify-center items-center">
                        <div className="w-full max-w-lg">
                            <div className="leading-loose">
                                <form
                                    className="max-w-xl m-4 p-10 bg-white rounded shadow-xl"
                                    onSubmit={this.onFormSubmit}>
                                    <p className="text-gray-800 font-medium text-center text-lg font-bold">Login</p>
                                    <div>
                                        <label htmlFor="" className="block text-sm text-gray-00">Username</label>
                                        <input
                                            className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                                            id="username"
                                            name="username"
                                            value={username}
                                            onChange={this.handleOnChange}
                                            type="text"
                                            required=""
                                            placeholder="User Name"
                                            aria-label="username"></input>
                                    </div>
                                    <div className="mt-2">
                                        <label className="block text-sm text-gray-600" for="password">Password</label>
                                        <input
                                            className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                                            id="password"
                                            type="password"
                                            required=""
                                            name="password"
                                            value={password}
                                            onChange={this.handleOnChange}
                                            placeholder="*******"
                                            aria-label="password"
                                        />
                                    </div>
                                    <div className="mt-4 items-center justify-between">
                                        <button className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded mr-4" type="submit">Login</button>
                                        <Link className="inline-block right-0 align-baseline  font-bold text-sm text-500 hover:text-blue-800" to="/">Forgot Password?</Link>
                                    </div>

                                    {
                                        messageError ? (
                                            // <div dangerouslySetInnerHTML={this.createMarkup(messageError)}></div>
                                            <Fragment>
                                                <br />
                                                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                                                    <strong className="font-bold">ERROR: </strong>
                                                    <span className="block sm:inline">Invalid username. Lost your password?.</span>
                                                    <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                                                        <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
                                                    </span>
                                                </div>
                                            </Fragment>

                                        ) : ''
                                    }


                                </form>
                            </div>



                        </div>

                    </div>
                </div>
            )
        }
    }
}

export default Login
