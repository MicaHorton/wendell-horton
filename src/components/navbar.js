import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

export default class Navbar extends Component { 
    constructor (props) {
        super(props);
        this.state = {active: false};
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({overlay: !this.state.overlay});
    }

    render () {
        return (
            <>
            <div className={` overlay ${this.state.overlay && 'overlay-active'} `}></div>
     
            <div className='header'>
                <button className='toggle' onClick={() => this.toggleNav()}>
                    <i className={` ${!this.state.overlay && 'fa fa-bars'}  ${this.state.overlay && 'fa fa-times'} ${this.state.overlay && 'overlay-active'}`}></i>
                </button>
                <h1>Wendell Horton</h1>           
            </div>

            
            <nav className={` nav ${this.state.overlay && 'overlay-active'} `}>
                <Link className='nav-item' to='/'>Introduction</Link>
                <Link className='nav-item' to='/chapter1'>Chapter 1</Link>
            </nav>

            
            </>
      
             
        

        )

    }
}