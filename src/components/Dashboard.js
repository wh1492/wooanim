import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom';


import Sidebar from './common/Sidebar'


// import '../tailwind.output.css';
// import '../tailwind.output.css';

export class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
    closeSession = (event) => {
        event.preventDefault();
        localStorage.removeItem('token')
        localStorage.removeItem('userName')
        this.setState({
            username: '',
            loggedIn: false
        })
    }

    render() {
        const { username, password, loggedIn, userNiceName } = this.state;
        const userName = localStorage.getItem('userName');
        if (!loggedIn || !localStorage.getItem('token')) {
            return <Redirect to='/' noThrow />
        } else {
            return (
                <div className="hold-transition sidebar-mini layout-fixed">
                <div className="wrapper">

                    <Sidebar />

                    <aside className="main-sidebar sidebar-dark-primary elevation-4">
                        <h2>Dashboard</h2>
                        <h1>Welcome {userName}!</h1>
                        <h1>Welcome {this.props.userName}!</h1>

                        <br />
                        <br />
                        <form onSubmit={this.closeSession}>
                            <button type="submit"> close sesion</button>
                        </form>
                    </aside>

                </div>
                </div>
            )
        }

    }
}

export default Dashboard
