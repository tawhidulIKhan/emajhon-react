import React, { Component } from 'react';
import './Header.css';
import Logo from './../../../images/logo.png';
import {Link} from 'react-router-dom'
class Header extends Component{
    render(){
        return (
            <div className="header">
            <img src={Logo} alt="Logo"/>
            <ul>
                <li>
                    <Link to="/shop">Shop</Link>
                </li>
                <li>
                <Link to="/review">Order Review</Link>
                </li>
                <li>
                <Link to="/manage">Manager Inventory</Link>
                </li>
            </ul>
        </div>
        )
    }
}

export default Header;
