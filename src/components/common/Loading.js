import React, { Component } from 'react'
import loader from '../../images/loading.svg';

export class Loading extends Component {
    render() {
        return (
            <div className="loading">
                {/* <div className="container"> */}
                <img src={loader} className="App-loader" alt="logo" />
                    <h3>Loading...</h3>
                {/* </div> */}
            </div>
        )
    }
}

export default Loading
