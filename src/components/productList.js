import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import './productList.css';

export class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image_feat: [],
            products: []
        }
    }

    componentDidMount(){
        let i = 0;
        axios.get(`http://headless.test/wp-json/wp/v2/product?_embed`)
        .then( products => {
            this.setState({
                products: products.data
            })
            
         //   console.log(products.data);
        })
    }

    createMarkup(html){
        return {__html: html}
    }

    render() {
        
    AOS.init();
        return(
            <div>
                
                <header className="product-header">
                    <h1><span>Abstract Objects</span> Gallery</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
                        quam!
                    </p>
                </header>
                <div className="product-container">
                    {this.state.products.map(  (product, index)  => (
                        <section  className="product-item" data-aos={index> 0 ? 'fade-in': ''} data-duration={index> 0 ? '1500': ''} key={product.id}>
                            <figure className="product-imagen">
                                <img src={product._embedded['wp:featuredmedia'][0].media_details.sizes['medium_large'].source_url ? product._embedded['wp:featuredmedia'][0].media_details.sizes['medium_large'].source_url : 'https:placehold.it/600x600'}  alt={product.slug}/>
                            </figure>
                            <div className="product-info">
                                <Router>
                                    <h2><Link to={`/product/${product.slug}`}>{product.title.rendered}</Link></h2>
                                </Router>
                                <div dangerouslySetInnerHTML={this.createMarkup(product.excerpt.rendered)}></div>
                                <a className="btn" href="#">Buy</a>
                            </div>
                        </section>                    
                    ))}
                </div>
            </div>
        )
    }
}

export default ProductList