import React, { Component } from 'react';
import loadMathJax from './load-mathjax.js';

export default class Chapter2 extends Component {
    
   componentDidMount() {
       loadMathJax();
   }
    render () {
        return (
            <div className='content'>
                <h1>Explosive Hydrogen Fusion Reactions</h1>
                <h2>Core Solar Plasmas Burn Hydrogen that Produces Helium Exhaust</h2>
                    <p>Here “burning" means the nuclear fusion reaction combines two nuclei to produce a heavier more stable nucleus. The stars and sun have <span className="math inline">$\rm H+H\to D+p+\alpha$</span> nuclear reaction. Core solar plasma is burning hydrogen to form helium exhaust plasma through two nuclear reactions. First the hydrogen nuclei collide and react to form the isotopes — deuterium and tritium.</p>
                <h2>Understanding Fusion Reactions</h2>
                    <p><strong>TEXT TO BE ADDED</strong></p>
                    <h3>History of the hydrogen bomb led to development of the fusion bomb “Mike” after World War II</h3>
                    <p><strong>TEXT TO BE ADDED</strong></p>
                <h2>History of the Hydrogen Bomb in <em><strong>Dark Sun</strong></em> by <em><strong>R. Rhodes</strong></em> (2005) Records the History and Controversies of Developing the Fusion Bomb From 1955–1973.</h2>
                    <p>On January 31, 1950, U.S. President Harry S. Truman publicly announces his decision to support the development of the hydrogen bomb, a weapon theorized to be hundreds of times more powerful than the atomic bombs dropped on Japan during World War II.</p>
                    <p>Five months earlier, the United States had lost its nuclear supremacy when the Soviet Union successfully detonated an atomic bomb at their test site in Kazakhstan. Then, several weeks after that, British and U.S. intelligence came to the staggering conclusion that German-born Klaus Fuchs, a top–ranking scientist in the U.S. nuclear program, was a spy for the Soviet Union. These two events, and the fact that the Soviets now knew everything that the Americans did about how to build a hydrogen bomb, led Harry Truman to approve massive funding for the super–power race to complete the world’s first “superbomb," as he described it in his public announcement on January 31, 1950.</p>
                    <p>On November 1, 1952, the United States successfully detonated “Mike," the world’s first hydrogen bomb, on the Eniwetok Atoll in the Pacific Marshall Islands. The 10.4–megaton thermonuclear device, built upon the Teller–Ulam principles of staged radiation implosion, instantly vaporized an entire island and left behind a crater more than a mile wide. The incredible explosive force of Mike was also apparent from the sheer magnitude of its mushroom cloud — within 90 seconds the mushroom cloud climbed to 57,000 feet and entered the stratosphere. One minute later, it reached 108,000 feet, eventually stabilizing at a ceiling of 120,000 feet. Half an hour after the test, the mushroom stretched 60 miles across, with the base of the head joining the stem at 45,000 feet altitude.</p>
                    <p>Three years later, on November 22, 1955, the Soviet Union detonated its first hydrogen bomb on the same principle of radiation implosion. Both super powers were now in possession of the “hell bomb,” as it was known by many Americans, and the world lived under the threat of thermonuclear war for the first time in history.</p>
                <h2>Cold War and the Proliferation of the Hydrogen Bomb Research, Development and Deployment</h2>
                    <p><strong>TEXT TO BE ADDED</strong></p>
                <h2>Declassification of the Thermonuclear Reaction Through Vienna IAEA Treaty 19XX</h2>
                    <p><strong>TEXT TO BE ADDED</strong></p>
                <h2>Comparison of the Inventions in the Soviet Union and the USA</h2>
                    <p>Comparison of the inventions in the Soviet Union and in the United States. In the USA both Princeton, under the Sherwood Project, and Los Alamos Nuclear Laboratory and the Lawrence Livermore Laboratory.</p>
                <h2>International Treaty Bans Further Atmospheric H–Bomb Testing (Signed 5 August 1963; Effective 10 October 1963</h2>
                    <p>International Treaty bans further atmospheric H–bomb testing leads first to underground testing and then forbidden testing.</p>
                <h2>Light–weight H–bombs</h2>
                    <p>Continued secret development of light–weight H–bombs and the Strategic Defense Initiative.</p>

                <p>Rhodes, R. (2005). <span><em>Dark Sun</em></span>, ISBN:978–0–684–82414–7. 2013, American Institute of Physics).</p>
            </div>     
            
        )
    }
}

