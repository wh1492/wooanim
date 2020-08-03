import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import PropTypes from 'prop-types';


import axios from 'axios';
import Loading from '../common/Loading';



export class ListMyPosts extends Component {
    state = {
        posts: [],
        // page: [],
        userData: [],
        isLoaded: false
    }
    componentDidMount() {

        const user = localStorage.getItem('userName');

        // console.log('username: ' + user)

        axios.get(`https://wpwoo.acbn.xyz/wp-json/wp/v2/users/?search=${user}`)
            .then(res => this.setState({
                userData: res.data[0]
            }, () => {
                if (this.state.userData.id) {
                   // console.log('vaina con broma ID: ' + this.state.userData.id)
                    axios.get(`https://wpwoo.acbn.xyz/wp-json/wp/v2/posts/?author=${this.state.userData.id}`)
                        .then(res => this.setState({
                            posts: res.data,
                            isLoaded: true
                        }))
                        .catch(err => console.log(err))
                }
            }))
            .catch(err => console.log(err))
    }

    render() {
        console.log('Posts State')
        console.log(this.state)

        const { posts, isLoaded } = this.state;

        if (isLoaded) {

            return (
                <div className="container mx-auto mt-10">
                    <div className="w-full mx-auto ">
                        <h2 className="h1 mb-10 mt-10">Mis Articulos</h2>
                        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

                            <table className="table-fixed">
                                <thead>
                                    <tr>
                                        <th className="w-1/2 px-4 py-2">Titulo</th>
                                        <th className="w-1/4 px-4 py-2">Fecha Creacion</th>
                                        <th className="w-1/4 px-4 py-2">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {posts.map((post, index) => (
                                        <tr key={index}>
                                            <td className="w-1/2 border px-4 py-2 text-base">{post.title.rendered}</td>
                                            <td className="w-1/4 border px-4 py-2 text-sm">{post.date}</td>
                                            <td className="w-1/4 border px-4 py-2 text-sm">{post.status}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            )
        }
        return (
            <Loading />
        )
    }
}

export default ListMyPosts
