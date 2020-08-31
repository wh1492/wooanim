import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import axios from 'axios';
import Loading from './common/Loading';

import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/main.css';

import './Homepage.scss'

export class Homepage extends Component {
    state = {
        products: [],
        page: [],
        isLoaded: false
    }
    // https://wpwoo.acbn.xyz
    componentDidMount() {
        axios.get('https://wpwoo.acbn.xyz/wp-json/wp/v2/pages/?slug=homepage')
            .then(res => {
                this.setState({
                    page: res.data[0],
                    isLoaded: true
                })
            })
    }

    createMarkup(html) {
        return { __html: html }
    }

    render() {
        AOS.init();
        const { page, isLoaded } = this.state;
        // console.log(page)
        if (isLoaded) {
            return (
                <div className="container mx-auto pt-12">
                    <div className="home-content" data-aos="fade-in" data-duration="1500" dangerouslySetInnerHTML={this.createMarkup(page.content.rendered)}></div>
                </div>
            )
        }
        return (
            <Loading />
        )

    }
}

export default Homepage
