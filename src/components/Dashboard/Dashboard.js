import React, { Component } from 'react';
import Navbar from "./Navbar";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './Dashboard.css';
import Contacts from '../Pages/ContactUs';
import About from '../Pages/AboutUs';
import Games from '../Pages/Games';
import Tools from '../Pages/Tools';
import Home from '../Pages/Home';
import Todo from '../Apps/ToDoList/todo';
import Search from "./Search.js"
import TicTacToe from '../Apps/Tic Tac Toe/tictactoe';
import Calculator from '../Apps/Calculator/calculator';

class Dashboard extends Component {
    render() {
        return (
            <Router>
                <div className = 'Dashboard' >
                    <Navbar />
                    <Search />
                    <div>
                    <Routes>
                    <Route path="/" exact element={<Home />}/>
                    <Route path="/home" element= { <Home />} />
                    <Route path="/about" element= {<About />} />
                    <Route path="/tools/*" element= {<Tools />} />
                    <Route path="/tools/to-do" exact element={<Todo/>}/>
                    <Route path="/tools/calculator" exact element={<Calculator/>}/>
                    <Route path="/games/*" element= {<Games />} />
                    <Route path="/games/tic-tac-toe" element={<TicTacToe />} />
                    <Route path="/contact-us" element= {<Contacts />} />
                    </Routes>
                    </div>
                </div>
            </Router>
        );
    }
}

export default Dashboard;