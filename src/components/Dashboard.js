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

                // <!--Container -->
                <div className="mx-auto bg-grey-400">
                    {/* <!--Screen--> */}
                    <div className="min-h-screen flex flex-col">
                        {/* <!--Header Section Starts Here--> */}
                        <header className="bg-nav">

                        </header>
                        {/* <!--/Header--> */}


                        <div className="flex flex-1">
                            {/* <!--Sidebar--> */}
                            <Sidebar />
                            {/* <!--/Sidebar--> */}

                            {/* <!--Main--> */}
                            <main className="bg-white-300 flex-1 p-3 overflow-hidden">
                                <div className="flex flex-col">

                                    {/* <!-- Starts Row Intro Here --> */}
                                    <div className="flex flex-1  flex-col md:flex-row lg:flex-row mx-2">
                                        <div className="mb-2 border-solid border-gray-300 rounded border shadow-sm w-full">
                                            <div className="bg-gray-200 px-2 py-3 border-solid border-gray-300 border-b">
                                            Dashboard
                                            </div>
                                            <div className="p-1 flex flex-1 flex-col md:flex-row lg:flex-row justify-between md:mx-2 lg:mx-2">
                                                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                                                    <div className="px-6 py-4">
                                                        <div className="font-bold text-xl mb-2">Welcome {userName}!</div>
                                                        <p className="text-gray-700 text-base">
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                                        </p>
                                                        <form onSubmit={this.closeSession}>
                                                            <button 
                                                            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-darker mr-2"
                                                            type="submit"> close sesion</button>
                                                        </form>
                                                    </div>
                                                    <div className="px-6 py-4">
                                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-darker mr-2">#photography</span>
                                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-darker mr-2">#travel</span>
                                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-darker">#winter</span>
                                                    </div>
                                                </div>
                                                {/* <!-- horizontal card --> */}
                                                <div className="max-w-md w-full lg:flex lg:mx-2 md:mx-2">
                                                    <div className="h-40 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: "url('https://tailwindcss.com/img/card-left.jpg')" }} title="Woman holding a mug">
                                                    </div>
                                                    <div className="border-r border-b border-l border-gray-300 lg:border-l-0 lg:border-t lg:border-gray-300 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                                        <div className="mb-2">
                                                            <p className="text-sm text-gray-700 flex items-center">
                                                                <svg className="fill-current text-gray w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                                    <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"></path>
                                                                </svg>
                                                                Members only
                                                            </p>
                                                            <div className="text-black-500 font-bold text-lg mb-2">Can coffee make you a better developer?</div>
                                                            <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et p.</p>
                                                        </div>
                                                        <div className="flex items-center">
                                                            <img className="w-10 h-10 rounded-full mr-4" src="https://pbs.twimg.com/profile_images/885868801232961537/b1F6H4KC_400x400.jpg" alt="Avatar of Jonathan Reinink" />
                                                            <div className="text-sm">
                                                                <p className="text-black leading-none">Jonathan Reinink</p>
                                                                <p className="text-gray-dark">Aug 18</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* <!-- /horizontal card --> */}
                                            </div>
                                        </div>
                                    </div>





                                    {/* <!-- Stats Row Starts Here --> */}
                                    <div className="flex flex-1 flex-col md:flex-row lg:flex-row mx-2">

                                        {/* <!-- card --> */}

                                        <div className="rounded overflow-hidden shadow bg-white mx-2 w-full">
                                            <div className="px-6 py-2 border-b border-light-grey">
                                                <div className="font-bold text-xl">Trending Categories</div>
                                            </div>
                                            <div className="table-responsive">
                                                <table className="table text-grey-darkest">
                                                    <thead className="bg-grey-dark text-white text-normal">
                                                        <tr>
                                                            <th scope="col">#</th>
                                                            <th scope="col">Item</th>
                                                            <th scope="col">Last</th>
                                                            <th scope="col">Current</th>
                                                            <th scope="col">Change</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">1</th>
                                                            <td>
                                                                <button className="bg-blue-500 hover:bg-blue-800 text-white font-light py-1 px-2 rounded-full">
                                                                    Twitter
                                            </button>
                                                            </td>
                                                            <td>4500</td>
                                                            <td>4600</td>
                                                            <td>
                                                                <span className="text-green-500"><i className="fas fa-arrow-up"></i>5%</span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">2</th>
                                                            <td>
                                                                <button className="bg-primary hover:bg-primary-dark text-white font-light py-1 px-2 rounded-full">
                                                                    Facebook
                                            </button>
                                                            </td>
                                                            <td>10000</td>
                                                            <td>3000</td>
                                                            <td>
                                                                <span className="text-red-500"><i className="fas fa-arrow-down"></i>65%</span>
                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <th scope="row">3</th>
                                                            <td>
                                                                <button className="bg-success hover:bg-success-dark text-white font-light py-1 px-2 rounded-full">
                                                                    Amazon
                                            </button>
                                                            </td>
                                                            <td>10000</td>
                                                            <td>3000</td>
                                                            <td>
                                                                <span className="text-red-500"><i className="fas fa-arrow-down"></i>65%</span>
                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <th scope="row">4</th>
                                                            <td>
                                                                <button className="bg-blue-500 hover:bg-blue-800 text-white font-light py-1 px-2 rounded-full">
                                                                    Microsoft
                                            </button>
                                                            </td>
                                                            <td>10000</td>
                                                            <td>3000</td>
                                                            <td>
                                                                <span className="text-green-500"><i className="fas fa-arrow-up"></i>65%</span>
                                                            </td>
                                                        </tr>

                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        {/* <!-- /card --> */}

                                    </div>
                                </div>
                            </main>
                            {/* <!--/Main--> */}
                        </div>
                        {/* <!--Footer--> */}
                        <footer className="bg-grey-darkest text-white p-2">
                            <div className="flex flex-1 mx-auto">&copy; My Design</div>
                        </footer>
                        {/* <!--/footer--> */}

                    </div>
                </div>


            )
        }

    }
}

export default Dashboard
