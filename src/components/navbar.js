import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

export default class Navbar extends Component { 
    constructor (props) {
        super(props);
        this.state = {active: false};
        this.openNav = this.openNav.bind(this);
        this.closeNav = this.closeNav.bind(this);
    }

    openNav() {
        this.setState({overlay: true});

    }

    closeNav() {
        this.setState({overlay: true});

    }

    render () {
        return (
            <div className='overlay'>
                <div className='header'>
                    <button className='toggle' onClick={() => this.openNav()}><i className='fa fa-bars'></i></button>
                    <h1>Wendell Horton</h1>           
                </div>

                <nav className={this.state.overlay && 'overlay-active'}>
                    <Link to='/intro'>Introduction</Link>
                    <Link to='/chapter1'>Chapter 1</Link>
                </nav>

            </div>
             
        

        )

    }
}