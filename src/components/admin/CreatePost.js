import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import PropTypes from 'prop-types';


import axios from 'axios';
import Loading from '../common/Loading';

import '../../tailwind.output.css';


export class CreatePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
            status: '',
            loading: false,
            error: '',
            messageError: ''
        }
    }



    handleOnChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
        console.log(event.target.name + ': ' + event.target.value)
    };


    onFormSubmit = (event) => {
        event.preventDefault();
        console.log(localStorage.getItem('token'))

        const postData = {
            title: this.state.title,
            content: this.state.content,
            status: this.state.status
        }

        console.log('postData');
        console.log(postData);
        const config = {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            }
        }

        this.setState({
            loading: true
        }, () => {
            axios.post(`https://wpwoo.acbn.xyz/wp-json/wp/v2/posts`, postData, config)
                .then(res => {
                    console.log(res.data)
                })
                .catch(err => {

                    if (err.response) {
                        console.log(err.response.data);
                        console.log(err.response.data.message);
                        this.setState({
                            messageError: err.response.data.message,
                            loading: false
                        })
                    } else if (err.request) {
                        // The request was made but no response was received
                        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                        // http.ClientRequest in node.js
                        console.log(err.request);
                    } else {
                        // Something happened in setting up the request that triggered an Error
                        console.log('Error', err.message);
                    }
                })
        })

    }


    render() {

        const { title, content, status, messageError } = this.state;

        return (
            <div className="container mx-auto mt-10">
                <div className="w-full mx-auto max-w-md">
                    <h2 className="h1 mb-10 mt-10">
                        Crear Publicacion</h2>
                    <form
                        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                        onSubmit={this.onFormSubmit}>
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="title">
                                Titulo
                            </label>
                            <input
                                id="title"
                                name="title"
                                type="text"
                                value={title}
                                onChange={this.handleOnChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div>
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="content">
                                Contenido
                             </label>
                            <input
                                id="content"
                                name="content"
                                type="text"
                                value={content}
                                onChange={this.handleOnChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>

                        <div>
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="status">
                                Status
                             </label>
                            <select
                                id="status"
                                name="status"
                                value={status}
                                onChange={this.handleOnChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            >
                                <option value="draft">Draft</option>
                                <option value="pending">Pending</option>
                                <option value="publish">Publish</option>
                            </select>
                        </div>

                        <div className="flex items-center justify-between">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit">
                                Crear
                        </button>
                        </div>

                        {
                            messageError ? (
                                // <div dangerouslySetInnerHTML={this.createMarkup(messageError)}></div>
                                <div className="mt-10 bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
                                    <p className="font-bold">ERROR:</p>
                                    <p>{messageError}</p>
                                </div>
                            ) : ''
                        }


                    </form>

                </div>

            </div>
        )
    }
}

export default CreatePost
