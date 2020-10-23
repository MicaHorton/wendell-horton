import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Navpage extends Component { 
    constructor (props) {
        super(props);
        this.toggleColor = this.toggleColor.bind(this);
        this.goBack = this.goBack.bind(this);
    }

    componentDidMount() {
        document.body.style.backgroundColor = 'rgb(96, 70, 70)';
    }

    toggleColor() {
        document.body.style.backgroundColor = 'white';
    }

    goBack() {
        console.log(this.props.history);
        this.props.history.goBack();
    }

    render () {
        let icon;
        icon = <FontAwesomeIcon className='fa-times' icon={faTimes} />

        return (
            <>
            <button className='toggle' onClick={() => {this.goBack(); this.toggleColor()}}> 
                    {icon}
            </button>
            <nav className='navpage'>
                <Link className='nav-item' to='/' onClick={() => this.toggleColor()}>Introduction</Link>
                <Link className='nav-item' to='/prologue' onClick={() => this.toggleColor()}>Prologue</Link>
                <Link className='nav-item' to='/chapter1' onClick={() => this.toggleColor()}>Chapter 1</Link>
                <Link className='nav-item' to='/chapter2' onClick={() => this.toggleColor()}>Chapter 2</Link>
                <Link className='nav-item' to='/chapter3' onClick={() => this.toggleColor()}>Chapter 3</Link>
                <Link className='nav-item' to='/chapter4' onClick={() => this.toggleColor()}>Chapter 4</Link>
                <Link className='nav-item' to='/chapter5' onClick={() => this.toggleColor()}>Chapter 5</Link>
                <Link className='nav-item' to='/chapter6' onClick={() => this.toggleColor()}>Chapter 6</Link>
                <Link className='nav-item' to='/chapter7' onClick={() => this.toggleColor()}>Chapter 7</Link>
                <Link className='nav-item' to='/chapter8' onClick={() => this.toggleColor()}>Chapter 8</Link>
                <Link className='nav-item' to='/chapter9' onClick={() => this.toggleColor()}>Chapter 9</Link>
                <Link className='nav-item' to='/chapter11' onClick={() => this.toggleColor()}>Chapter 11</Link>
                <Link className='nav-item' to='/chapter10' onClick={() => this.toggleColor()}>Chapter 10</Link>
            </nav>
            </>
        )
    }
}

