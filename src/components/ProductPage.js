import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Loading from './common/Loading';

import './ProductPage.css';

export class ProductPage extends Component {
    state = {
        product: {},
        imageURL: '',
        test1: '',
        test2: '',
        isLoaded: false
    }

    componentDidMount() {
        axios.get(`https://wpwoo.acbn.xyz/wp-json/wp/v2/product/?slug=${this.props.match.params.slug}&_embed`)
        .then(res => this.setState({
            product: res.data[0],
            imageURL: res.data[0]._embedded['wp:featuredmedia'][0].media_details.sizes["full"].source_url,
            isLoaded: true
        }))
        .catch(err => console.log(err))
       // console.log('this.state')
    }

    render() {
        const { product, imageURL, isLoaded} = this.state;
        if(isLoaded) {
            console.log(this.state.product)
            return (
                <Fragment>
                    
					<div className="container product-detail">
                        <figure className="product-detail--image">
                            <img src={ imageURL } />
                        </figure>
                            <h1 className="product-detail--title">{product.title.rendered}</h1>
                            <div  className="product-detail--info" dangerouslySetInnerHTML={{__html: product.content.rendered}} />
                            <br/>
                            <Link className="btn go-back" to="/">Go Back</Link>
                    </div>
                </Fragment>
            )
        }
        return(
            <Loading />
        )
    }
}

export default ProductPage
