import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <div>
                <h1> Movie App </h1>
                <Link to="/">Home</Link> | <Link to="/movies">Movie Index</Link>
            </div>
        );
    }
}

export default Navbar;
