import React, { Component } from 'react';
import { Link, useParams } from 'react-router-dom';


import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Header extends Component { 
    constructor (props) {
        super(props);
    }

    render () {
        let icon;
        icon = <FontAwesomeIcon className ='fa-bars' icon={faBars} />

        if (this.props.location.pathname != '/navpage') {
            return (
                <div className='header'>
                    <Link className='toggle' to='navpage'> 
                        {icon}
                    </Link>
                    <h1>Wendell Horton</h1>           
                </div>
            )
        } else {
            return null
        }

 
    }
}

