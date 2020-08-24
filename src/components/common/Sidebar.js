import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom';


export class Sidebar extends Component {
    render() {
        const user = localStorage.getItem('userName');
        return (
            <Fragment>

                
{/* Sidebar Menu */}
            <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            {/* Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library  */}
            <li className="nav-item menu-open">
                <Link to={`/dashboard/${user}`} className="nav-link active">
                <i className="nav-icon fas fa-tachometer-alt"></i>
              <p>
                Dashboard
                <i className="right fas fa-angle-left"></i>
              </p>
                </Link>
           
            </li>
                <Link to={`/dashboard/${user}`} className="flex items-center active-nav-link text-white py-4 pl-6 nav-item">
                    <i className="fas fa-tachometer-alt mr-3"></i> Dashboard</Link>
                <Link to="/dashboard/createpost" className="flex items-center active-nav-link text-white py-4 pl-6 nav-item">
                    <i className="fas fa-tachometer-alt mr-3"></i> Crear Post </Link>
                <Link to="/dashboard/myposts" className="flex items-center active-nav-link text-white py-4 pl-6 nav-item">
                    <i className="fas fa-tachometer-alt mr-3"></i> Mis Posts </Link>
          </ul>
            </nav>
            </Fragment>


        )
    }
}

export default Sidebar
