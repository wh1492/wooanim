import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom';


export class Sidebar extends Component {
    render() {
        const user = localStorage.getItem('userName');
        return (
            <Fragment>


                <aside id="sidebar" className="bg-side-nav w-1/2 md:w-1/6 lg:w-1/6 border-r border-side-nav hidden md:block lg:block">

                    <ul className="list-reset flex flex-col">
                        <li className=" w-full h-full py-3 px-2 border-b border-light-border bg-white">
                            <Link
                                to={`/dashboard/${user}`}
                                className="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline"
                            >
                                <i className="fas fa-tachometer-alt float-left mx-2"></i>
                                Dashboard
                                <span><i className="fas fa-angle-right float-right"></i></span>
                            </Link>
                        </li>

                        <li className=" w-full h-full py-3 px-2 border-b border-light-border">
                        <Link 
                            to="/dashboard/createpost" 
                            className="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline"
                            >
                                <i className="fas fa-tachometer-alt float-left mx-2"></i>
                                Crear Post
                                <span><i className="fas fa-angle-right float-right"></i></span>
                            </Link>
                        </li>

                        <li className=" w-full h-full py-3 px-2 border-b border-light-border">
                        <Link 
                            to="/dashboard/myposts" 
                            className="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline"
                            >
                                <i className="fas fa-tachometer-alt float-left mx-2"></i>
                                Mis Posts
                                <span><i className="fas fa-angle-right float-right"></i></span>
                            </Link>
                        </li>
                        

                    </ul>
                </aside>



                {/* Sidebar Menu */}

                {/* <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                       
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
                </nav> */}
            </Fragment>


        )
    }
}

export default Sidebar
