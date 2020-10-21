import React, { Component } from 'react';
import loadMathJax from './load-mathjax.js';

export default class Chapter8 extends Component {
    
   componentDidMount() {
       loadMathJax();
   }
    render () {
        return (
            <div className='content'>
                <h1>Space Plasma Physics and the Global Navigation Satellite System</h1>
                <h2>Ionospheric Plasma Turbulence and Satellite Systems</h2>
                    <p>The scintillation and tomography receiver in space (CITRIS) instrument will orbit the Earth near <span className="math inline">560 </span>km altitude to detect signals from the ground–based array of more than 50 DORIS UHF/S–band radio beacons established at sites around the world by the French Centre National d’Etudes Spatiales (CNES) and the Institut Géographique National (IGN). The CITRIS receiver is on the US Air Force Space Test Program Satellite (STPSAT1) launched in 2006. CITRIS records the ionospheric Total Electron Content (TEC) and radio scintillations with a unique ground–to–space geometry. The new instrument was developed to study the ionosphere using data obtained with the UHF and S–band radio transmissions from the DORIS beacons because ionospheric radio scintillations can seriously degrade the performance of many space–geodetic systems, including the DORIS precise satellite orbitography system and Global Navigation Satellite Systems (GNSS). The ionospheric data is based on radio signals sampled at a rate of <span className="math inline">200 </span>Hz by the Center for Information Technology Research in the Interest of Society (CITRIS) receiver. Numerical models have been used to predict that the Doppel-Ring-Speicher (DORIS) signals measured by CITRIS may have <span className="math inline">30 </span>dB fluctuations in amplitude and <span className="math inline">30 </span>rad in phase as the satellite flies over kilometer–scale ionospheric structures. The data from the space–based CITRIS receiver helps to update and validate theories on the generation and effect of ionospheric irregularities known to influence radio systems. By using simultaneous beacon transmissions from DORIS on the ground and from low–Earth orbit beacons in space, the concept of reciprocity in a nonbilateral propagation medium like the ionosphere is tested. Computer simulations are used to predict the magnitude of amplitude and phase scintillations that are expected to be recorded with the CITRIS instrument. Geostationary beacon transmissions to ground permit the recording of temporal variations in the ionosphere at a fixed–ground longitude. The Global Navigation Satellite Systems (GNSS), consisting of the current Global Positioning System (GPS), Global Navigation Satellite System (GLONASS), and future Galileo satellites, are placed in MEO near <span className="math inline">20, 000 </span>km altitude with about a 12–h period. Ionospheric measurements made with these satellites have both spatial and temporal variations. With the presence of over <span className="math inline">30 </span>GNSS satellites, ionospheric data provides an abundance of networks with ground–based receivers, e.g., [<em>Saito, et al.</em> (1998), <em>Mannucci, et al.</em> (1998), <em>Garcia–Fernandez</em> (2005)].</p>
                    <p>The ionosphere plasma is a source of error and data loss for many communications, navigation, and radar systems. As satellite radio signals propagate from space through the ionosphere to the ground, they can become distorted by a large number of effects [<em>Davies</em> (1990)] including phase fluctuations, Faraday rotation, amplitude fluctuations, group delay, absorption, scattering, frequency shifts, and multipath (Fig.&nbsp;<a href="#F8.1" data-reference-type="ref" data-reference="F8.1">[F8.1]</a>). Ionospheric characterization is needed to identify these influences, to predict their occurrence and to mitigate their effects on accurate positioning.</p>
                
                <p>Bernhardt, P. A., Siefring, C. L., Galysh, I. J., Rodilosso, T. F., Koch, D. E., MacDonald, T. L., Wilkens, M. R. and Landis, G. Paul (2006). Ionospheric applications of the scintillation and tomography receiver in space (CITRIS) mission when used with the DORIS radio beacon network, <em>J. Geodesy.</em> <strong>80</strong>, pp.&nbsp;473–485, <a href="https://doi.org/10.1007/s00190-006-0064-6">https://doi.org/10.1007/s00190-006-0064-6</a>.</p>
                <p>Davies, K. (1990). <em>Ionospheric Radio</em>, Electromagnetic Waves Series <strong>31</strong> (Publisher: Peter Peregrinus Ltd., London, United Kingdom), ISBN:0–86341–186–X.</p>
                <p>Garcia–Fernandez, M., Hernandez–Pajares, M., Juan, J. M., Sanz, J. (2005). Performance of the improved Abel transform to estimate electron density profiles from GPS occultation data, <em>GPS Solut.</em> <strong>9</strong>, pp.&nbsp;105–110, <a href="https://doi.org/10.1007/s10291-005-0139-5">https://doi.org/10.1007/s10291-005-0139-5</a>.</p>
                <p>Mannucci, A. J., Wilson, B. D., Yuan, D. N., Ho, C. H. Lindqwister, U. J. and Runge, T. F. (1998). A global mapping technique for GPS–derived ionospheric total electron content measurements, <em>Radio Science</em> <strong>33</strong>, pp.&nbsp;565–582, <a href="https://doi.org/10.1029/97RS02707">https://doi.org/10.1029/97RS02707</a>.</p>
                <p>Saito, Y., Uemura, S. and Hamaguchi, K. (1998). Cathode ray tube lighting elements with carbon nanotube field emitters, <em>Jpn. J. Appl. Phys.</em> <strong>37</strong>, Part 2, p.&nbsp;L346, <a href="https://doi.org/ 10.1143/JJAP.37.L346">https://doi.org/ 10.1143/JJAP.37.L346</a>.</p>
            </div>
        )
    }
}

/* 
1) put in component and do retypset. but the content should exist before the script does. 
except it doesn't. wait it does. you're commiting the content, then adding the script.

2) put in index.js
3) use import

*/