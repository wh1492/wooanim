import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './Header.css';

export class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="logo">
                <Link to="/">Home</Link>
                </div>
                <div className="side">
                    <Link to="/product">Productos</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/dashboard/createpost">Crear Post</Link>
                </div>
            </div>
        )
    }
}

export default Header
