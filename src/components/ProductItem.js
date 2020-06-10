import React, { Component } from 'react';
import { BrowserRouter as Router,  Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';

import AOS from 'aos';
import 'aos/dist/aos.css'; 

export class ProductItem extends Component {
   
    state = {
        imgUrl: '',
        author: '',
        isLoaded: false
    }
    
    static propTypes = {
        product: PropTypes.object.isRequired
    }

    componentDidMount(){
        
        const { featured_media } = this.props.product;
     //   const { featured_media, author } = this.props.product;
        const getImageUrl = axios.get(`/wp-json/wp/v2/media/${featured_media}`);
        // const getAuthor = axios.get(`/wp-json/wp/v2/users/${author}`);
      //  const getAuthor = axios.get(`/wp-json/wp/v2/users/1`);

        // Promise.all([getImageUrl, getAuthor]).then(res => {
        Promise.all([getImageUrl]).then(res => {
            // console.log(res)
            this.setState({
                imgUrl: res[0].data.media_details.sizes.full.source_url,
               // author: res[1].data.name,
                isLoaded: true
            })
        });
    }
    
    createMarkup(html){
        return {__html: html}
    }

    render() {
        AOS.init();
        const {id, title, excerpt, slug} = this.props.product;
        // const {author, imgUrl, isLoaded} = this.state;
        const {imgUrl, isLoaded} = this.state;
        if(isLoaded) {
         //   console.log( this.state);
         
            return (
                // <section  className="product-item" data-aos={index> 0 ? 'fade-in': ''} data-duration={index> 0 ? '1500': ''} key={product.id}>
                <section  className="product-item" data-aos="fade-in" data-duration="1500" key={id}>
                    <figure className="product-imagen">
                        <img style={{width: '100%'}} src={ imgUrl } alt={title.rendered}/>
                    </figure>
                    
                    <div className="product-info">
                        <h2><Link to={`/product/${slug}`}>{title.rendered}</Link></h2>
                        <div dangerouslySetInnerHTML={this.createMarkup(excerpt.rendered)}></div>
                     
                        {/* <a className="btn" href="#">Buy</a> */}
                        <Link to={`/product/${slug}`} className="btn">Ver Detalle</Link>
                    </div>
                </section>
            )
        }
        return null;
    }
}

export default ProductItem
