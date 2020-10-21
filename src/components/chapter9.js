import React, { Component } from 'react';
import loadMathJax from './load-mathjax.js';

export default class Chapter9 extends Component {
    
   componentDidMount() {
       loadMathJax();
   }
    render () {
        return (
            <div className='content'>                
               <p>Pandoc wouldn't convert :(</p>

            </div>
            
        )
    }
}

