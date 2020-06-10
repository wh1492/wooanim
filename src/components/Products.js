import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router,  Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// import ProductItem from './ProductItem';
import axios from 'axios';
import Loading from './common/Loading';

import AOS from 'aos';
import 'aos/dist/aos.css'; 


import './Products.css';


export class Products extends Component {
    state = {
        products: [],
        page: [],
        isLoaded: false
    }

    componentDidMount(){
        // axios.get('/wp-json/wp/v2/product?_embed')
        // .then(res => this.setState({
        //     products: res.data,
        //     isLoaded: true
        // }))
        // .catch(err => console.log(err));
        const getProducts = axios.get('/wp-json/wp/v2/product?_embed');
        const getIntro = axios.get('/wp-json/wp/v2/pages?slug=shop');

        Promise.all([ getProducts, getIntro ]).then(res => {
            // console.log(res)
            this.setState({
                products: res[0].data,
                page: res[1].data[0],
                isLoaded: true
            })
        });
    }
    
    createMarkup(html){
        return {__html: html}
    }

    render() {
        AOS.init();

        
        const {products, page, isLoaded} = this.state;
        if(isLoaded) {
            console.log('isLoaded: ' + isLoaded)
            // console.log(this.state)
            // console.log(this.state.products.length)
            
            return (
                <div>
                    <header className="product-header" dangerouslySetInnerHTML={this.createMarkup(page.content.rendered)}>
                    
                    </header>
                    
                    <div className="container product-container">
                        { products.map((product, index) => (
                            <section  className="product-item" data-aos={index> 0 ? 'fade-in': ''} data-duration={index> 0 ? '1500': ''} key={product.id}>
                                <Link to={`/product/${product.slug}`}>
                                    <figure className="product-imagen">
                                        {/* <img src={ product._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url } alt={product.title.rendered}/> */}
                                        <img src={ product._embedded['wp:featuredmedia'][0].source_url } alt={product.title.rendered}/>
                                    </figure>
                                </Link>
                                
                                <div className="product-info">
                                    <h2><Link to={`/product/${product.slug}`}>{product.title.rendered}</Link></h2>
                                    <div dangerouslySetInnerHTML={this.createMarkup(product.excerpt.rendered)}></div>
                                
                                    {/* <a className="btn" href="#">Buy</a> */}
                                    <Link to={`/product/${product.slug}`} className="btn">Ver Detalle</Link>
                                </div>
                            </section>
                        ))}
                    </div>
                    
                </div>
            )
        }

        return (
            <Loading />
        ) 
    }
}

export default Products
