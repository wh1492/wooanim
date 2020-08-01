import React, { Component } from 'react'
import {  Redirect} from 'react-router-dom';

export class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state= {
            username: '',
            password: '',
            userNiceName: '',
            userEmail: '',
            loggedIn: true,
            loading: false,
            error: '',
            token: ''
        }
    }
    onFormSubmit = (event) => {
        event.preventDefault();
        localStorage.removeItem('token')
        this.setState({
            username: '',
            loggedIn: false
        })
    }

    render() {
        const { username, password, loggedIn , userNiceName} = this.state;
        const userName = localStorage.getItem('userName');
        if(!loggedIn || !localStorage.getItem('token')) {
            return <Redirect to='/' noThrow />
        } else {
            return (
                <div>
                    <h2>Dashboard</h2>
                    <h1>Welcome {userName}!</h1>
                    <h1>Welcome {this.props.userName}!</h1>
    
    
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <form onSubmit={ this.onFormSubmit }>
                    <button type="submit"> close sesion</button>
                    </form>
                </div>
            )
        }
        
    }
}

export default Dashboard
