import { Component } from 'react';

import axios from 'axios';

export class ProductDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            product: []
        }
    }

    componentDidMount(){
        const slug = this.props.match.params.slug;
        axios.get(`http://headless.test/wp-json/wp/v2/product?slug=${slug}`)
        .then(product => {
            this.setState({
                product: product.data[0]
            })
        })
    }
    
    createMarkup(html) {
        return {__html: html}
    }

    render() {
        let build 
        if(this.state.product.title) {
            build = (
                <div>
                    <h1>{this.state.product.title.rendered}</h1>
                    <div dangerouslySetInnerHTML={this.createMarkup( this.state.product.content.rendered )} />
                </div>
            )
        } else {
            build = <div />
        }
        return build
    }
}

export default ProductDetail