import React, { Component } from 'react';
import ProductItem from './ProductItem';
import axios from 'axios';
import Loading from './common/Loading';

import './Products.css';


export class Products extends Component {
    state = {
        products: [],
        isLoaded: false
    }

    componentDidMount(){
        axios.get('/wp-json/wp/v2/product')
        .then(res => this.setState({
            products: res.data,
            isLoaded: true
        }))
        .catch(err => console.log(err));
    }
    
    render() {
        console.log(this.state)
        const {products, isLoaded} = this.state;
        if(isLoaded) {
            return (
                <div>
                    <header className="product-header">
                        <h1><span>Abstract Objects</span> Gallery</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
                            quam!
                        </p>
                    </header>
                    
                    <div className="container product-container">
                        { products.map((product, index) => (
                            <ProductItem key={product.id} index={index} product={product}></ProductItem>
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
