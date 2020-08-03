import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

import './Header.css';

export class Header extends Component {
    render() {

        const user = localStorage.getItem('token');
       // console.log('header user: ' + user)
        return (
            <div className="header">
                <div className="logo">
                    <Link to="/">Home</Link>
                </div>
                <div className="side">
                    <Link to="/product">Productos</Link> |

                   {user ? (
                        <Fragment></Fragment>
                    ) : (
                            <Fragment>
                                <Link to="/login"> Login</Link> |
                            </Fragment>
                        )
                    }

                    <Link to="/dashboard/myposts"> Listar Post</Link> |
                    <Link to="/dashboard/createpost"> Crear Post</Link>
                </div>
            </div>
        )
    }
}

export default Header
