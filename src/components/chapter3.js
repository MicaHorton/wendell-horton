import React, { Component } from 'react';
import loadMathJax from './load-mathjax.js';

export default class Chapter3 extends Component {
    
   componentDidMount() {
       loadMathJax();
   }
    render () {
        return (
            <div className='content'>
                <h1>Soviet Union Development of the TOKAMAK Toroidal Fusion Plasma Confinement Vessel</h1>
                <h2>Declassification of Secrets of Nuclear Fusion Bombs in the 1967 Geneva Conference</h2>
                    <p>In the 20th Century only six countries — the United States, Russia, United Kingdom, China, France, and India — have conducted thermonuclear weapon tests. Whether India has detonated a “true" multi–staged thermonuclear weapon was first controversial. North Korea tested a fusion weapon as of January 2016, though this claim is disputed.</p>
                    <p>Declassification laws following the 1967 Geneva Conference allows international sharing progress for fusion power.</p>
                <h2>Tokamak in Moscow Verified by British Team Uses New LASER Technology</h2>
                    <p>British Team uses new LASER technology to verify Soviet claim of high plasma temperature and fusion power from T–3 tokamak at the Kurchatov Nuclear Laboratory in Moscow.</p>
                <h2>USA drops Their Stellarator Project</h2>
                    <p>After verification of KeV tokamak plasmas the USA drops their Stellarator project and reproduces the Soviet results in large toroidal plasma machine using Neutral Beam Injectors (NBI) and high–power Radio Frequency (RF) heating that increased plasmas temperature to fusion power levels in 1968.</p>
                <h2>Radio Frequency Heating in Plasmas to Produce Nuclear Fusion</h2>
                    <p>Nuclear fusion reactions in D–T plasmas begin at temperature <span className="math inline">10<sup>4</sup> </span>K and above 10&nbsp;million degrees <span className="math inline">$10^7\rm K=100\,$</span>KeV.</p>
                    <p>High–electron temperatures <span className="math inline"><em>T</em><sub><em>e</em></sub></span> reduce charge exchange losses and increase fast particle–slowing down time, thereby enhancing the efficiency of plasma heating and current drive. The role of RF electron heating is critical in Fusion Power plasmas. The recent verification of RF heating is in the Field–Reversed Configuration (FRC) plasma, as described in this chapter.</p>
                    <p>Here we give examples of machines that have produced significant fusion power from high–temperature plasma from Radio Frequency (RF) heating. The most effective way to produce the fusion power plasma is through RF heating.</p>
                    <p>Radio frequency methods for heating the electron component of the magnetically–confined plasma becomes the internationally–accepted method for producing fusion–grade plasmas. Japan, Europe and the US produce several magnetic–confinement machines with KeV electron temperatures.</p>
                    <p>High–electron temperature <span className="math inline"><em>T</em><sub><em>e</em></sub></span> improves plasma confinement and performance. The RF electron heating study produces new insights into the physics underlying effects of unique FRC magnetic configuration confinement.</p>
                    <p>Plasma is over–dense <span className="math inline">(<em>ω</em><sub><em>p</em><em>e</em></sub> &gt; 30<em>ω</em><sub><em>c</em><em>e</em></sub>)</span>. The radial profiles of the HHFW heating in the C–2 FRC plasmas are shown in Figs.&nbsp;<a href="#F3.2" data-reference-type="ref" data-reference="F3.2">[F3.2]</a>–<a href="#F3.3" data-reference-type="ref" data-reference="F3.3">[F3.3]</a> for five frequencies.</p>
                    <p>For the electron heating in the Field–Reversed Configuration (FRC) in the University of California in Irvine and the Tri Alpha Laboratory, the waves are</p>
                    <ul>
                    <li><p>EBW (<span className="math inline">2.45 </span>GHz, <span className="math inline">5 </span>GHz, <span className="math inline">8 </span>GHz, <span className="math inline">18 </span>GHz, and <span className="math inline">28 </span>GHz)</p></li>
                    <li><p>Upper–hybrid resonant frequency (<span className="math inline">50 </span>GHz, <span className="math inline">55 </span>GHz)</p></li>
                    <li><p>Whistler wave frequency (0.5-<span className="math inline">1.0 </span>GHz).</p></li>
                    <li><p>Landau damping — the force acting on electrons is <span className="math inline">$F_{'{'}\rm LD{'}'}=eE_\|$</span></p></li>
                    <li><p>Transit–Time Magnetic Pumping (TTMP or MP), in which the force is <span className="math inline">$F_{'{'}\rm MP{'}'}=-\nabla_\|(\mu B_\|)$</span></p></li>
                    </ul>
                    <p>The radial profiles of the RF waves are shown in Fig.&nbsp;<a href="#F3.4" data-reference-type="ref" data-reference="F3.4">[F3.4]</a> for the plasma parameter in Table&nbsp;<a href="#T3.1" data-reference-type="ref" data-reference="T3.1">1.1</a>. The machine is shown in Fig.&nbsp;<a href="#F3.5" data-reference-type="ref" data-reference="F3.5">[F3.5]</a> and is normal for the inventor Norman Rostoker.</p>
                    <p>The machine geometry is shown in Fig.&nbsp;<a href="#F3.5" data-reference-type="ref" data-reference="F3.5">[F3.5]</a> and the parameters in Table&nbsp;<a href="#T3.1" data-reference-type="ref" data-reference="T3.1">1.1</a>.</p>
                
                <div id="T3.1">
                <table>
                    <caption>Parameters achieve in C–2W <em>Norman</em> (2018)</caption>
                    <thead>
                    <tr className="header">
                        <th>Parameter</th>
                        <th>Value</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="odd">
                        <td><span className="math inline">$B_{'{'}\rm ext{'}'}$</span></td>
                        <td><span className="math inline"> ∼ 1 </span>KG</td>
                    </tr>
                    <tr className="even">
                        <td><span className="math inline"><em>r</em><sub><em>s</em></sub></span></td>
                        <td><span className="math inline"> ∼ 36 </span>cm</td>
                    </tr>
                    <tr className="odd">
                        <td><span className="math inline"><em>L</em></span></td>
                        <td>2-3<span className="math inline"> </span>m</td>
                    </tr>
                    <tr className="even">
                        <td><span className="math inline"><em>N</em><sub><em>e</em></sub></span></td>
                        <td><span className="math inline">$\sim 3\times 10^{'{'}13{'}'}\,\rm cm^{'{'}-3{'}'}$</span></td>
                    </tr>
                    <tr className="odd">
                        <td><span className="math inline"><em>T</em><sub><em>i</em></sub></span></td>
                        <td>1000-2000<span className="math inline"> </span>eV</td>
                    </tr>
                    <tr className="even">
                        <td><span className="math inline"><em>T</em><sub><em>e</em></sub></span></td>
                        <td>300<span className="math inline"> </span>eV</td>
                    </tr>
                    <tr className="odd">
                        <td><span className="math inline"><em>W</em> = 4 </span>kJ</td>
                        <td></td>
                    </tr>
                    <tr className="even">
                        <td><span className="math inline">$P_{'{'}\rm NB{'}'}$</span></td>
                        <td>800-1000<span className="math inline"> </span>MW</td>
                    </tr>
                    </tbody>
                </table>
                </div>

                <p><span id="T3.1" label="T3.1">[T3.1]</span></p>
                <p>Here <span className="math inline"><em>e</em></span> and <span className="math inline"><em>μ</em></span> are the charge and the magnetic moment of an electron <span className="math inline"><em>E</em><sub>∥</sub></span> and <span className="math inline"><em>B</em><sub>∥</sub></span> are the parallel components of the fast wave electric and magnetic field. Figure&nbsp;<a href="#F3.5" data-reference-type="ref" data-reference="F3.5">[F3.5]</a> shows the RF heating power profiles for five neighboring RF frequencies that produce the ion temperature.</p>
                <p>Inside the separatrix where <span className="math inline">$k_\perp\rho_{'{'}\rm Larmor{'}'}\gg 1$</span>, at magnetic field null in mid–plane <span className="math inline">(<em>z</em> = 0)</span>. This leads to thermal ions heating from the High Harmonic Fast Wave (HHFW) damping on the thermal ions.</p>
                <p>The data shows good wave penetration into the plasma core with strong ion heating and with high electron absorption efficiency away from the mid–plane.</p>
                <p>The key parameters that have effects on the RF heating and power balance are</p>
                <p><span className="math inline">•</span> Initial ratio of <span className="math inline"><em>ω</em>/<em>ω</em><sub><em>c</em><em>i</em>[<em>D</em>]</sub></span>;</p>
                <p><span className="math inline">•</span> Initial value of <span className="math inline"><em>n</em><sub>∥</sub></span>;</p>
                <p><span className="math inline">•</span> Antenna radial and axial location;</p>
                <p><span className="math inline">•</span> Density profile</p>
                <p>System properties are</p>
                <ul>
                <li><p>Absorption, harmonics number <span className="math inline"><em>n</em> = (11 − 20)</span></p></li>
                <li><p>Conditions for significant power damping on ions <span className="math inline">$K_\perp\rho_{'{'}\rm Larmor{'}'}\gg 1$</span> and <span className="math inline"><em>ω</em>/<em>k</em><sub>⊥</sub> ≥ 2<em>V</em><sub><em>T</em><sub><em>i</em></sub></sub></span></p></li>
                <li><p>100% single pass power absorption;</p></li>
                <li><p>TTMP is the dominated power absorption mechanism for core electron heating;</p></li>
                <li><p>Maximum power damping on electrons occurs when</p></li>
                <li><p>Wave parallel phase velocity <span className="math inline">$V_{'{'}\rm  ph\|{'}'}=\omega/k_\|&lt; V_{'{'}T_e{'}'}$</span>;</p></li>
                </ul>
                <p>Significant power absorption by thermal ions occurs where the conditions of <span className="math inline">$k_\perp\rho_{'{'}\rm Larmor{'}'}\gg 1$</span> and <span className="math inline"><em>ω</em>/<em>k</em><sub>⊥</sub> &lt; 2<em>v</em><sub><em>T</em><sub><em>i</em></sub></sub></span>;</p>
                <p>There is a trade–off between good wave penetration and favorable power partition between electrons and ions as in all RF–driven plasmas.</p>
                
                <h2>Radio Frequency (RF) Plasma Control</h2>
                    <p>The Radio Frequency (RF) control of the plasma is a key tool for maintaining the steady–state fusion power for all types of magnetic confinement geometries. RF plasma control encompasses a wide range of activity from theoretical and design work on antennas, to wave propagation and absorption research requiring numerical simulation and experiments. The experimental work includes both high–temperature RF plasma heating and control in tokamaks, stellarators, and advanced concepts such as the linear reversed–field confinement machine.</p>
                    <p>Scattering of Lower Hybrid (LH) RF waves by plasma turbulence in WEST and EAST tokamaks yields key information on the core current drive [<em>Horton, et al.</em> (2017), <em>Horton</em> (2018)]. Anomalous ECH current drive from six gyrotrons in DIII–D shows the RF wave refraction and scattering from the electron density fluctuations from the drift wave turbulence [<em>Brookman</em> (2017)].</p>
                    <p>Drift–kinetic equations and anisotropic Finite Larmor Radius–Magnetohydrodynamic (FLR–MHD) models predict the intermittent blob emission and transport [<em>Zheng, et al.</em> (2016, 2017), <em>Hatch, et al.</em> (2017)] measured in the outer regions of the toroidal plasmas.</p>
                    <h3>Filaments in the edge–confinement region of TJ–II Stellarator</h3>
                        <p>Floating potential measurements from two remote reciprocating probes in the plasma edge region of the TJ–II stellarator [<em>van Milligen, et al.</em> (2017)] are analyzed using the transfer entropy, revealing the spatial dimensions and propagation properties of the lamentary wave structures. The results were verified by performing simulations with a resistive MHD model and analyzing data from synthetic diagnostics. The transfer entropy captures the rotation of the plasma elements and allows the calculating of their rotation velocity. The deduced velocity was compared to the poloidal velocity of the plasma and showed agreement [<em>van Milligen, et al.</em> (2018)].</p>
                    <h3>D-<span className="math inline"><sup>3</sup></span>He fueled FRC power plant for the 21st Century</h3>
                        <p>The principle advantage of D-<span className="math inline"><sup>3</sup></span>He fueled fusion is the mitigation of the engineering problems produced by the <span className="math inline">14 </span>MeV neutrons. <em>Momota and Tomita</em> (1992) describe the requirements needed to construct an attractive D-<span className="math inline"><sup>3</sup></span>He fusion reactor. The intrinsic characteristics of a field–reversed magnetic confinement is to provide a high plasma–pressure confinement machine configuration.</p>
                        <p>Potential and critical issues are the basis of a comprehensive D-<span className="math inline"><sup>3</sup></span>He fueled FRC reactor design called “ARTEMIS" (after Apollo’s sister in Greek), which offers an attractive prospect of fusion power development for the 21st century. The ARTEMIS fusion reactor is inherently safe and environmentally acceptable in view of the low radioactivity and fuel resources. Furthermore, the estimated cost of electricity is relatively low compared to a light water reactor. An experimental research program needed to develop the D-<span className="math inline"><sup>3</sup></span>He fueled FRC fusion reactors is discussed by <em>Momota and Tomita</em> (1992). Magnetic reconnection is a common mechanism or phenomena in space plasmas, such as coronal mass ejections and magnetospheric substorms and also a mechanism of confinement degradation due to violation of magnetic surfaces in magnetically–confined plasmas [<em>Biskamp</em> (2000), <em>Drake</em> (2001), <em>Yamada, et al.</em> (2010)].</p>
                    <h3>Driven magnetic reconnection</h3>
                        <p>The concept of driven magnetic reconnection is explained in the framework of theory [<em>Horton and Tajima</em> (1988)]. An imposed small–amplitude Magnetohydrodynamics (MHD) plasma flow velocity is specified at a finite distance from the magnetic neutral line in a plasma current sheet. The critical condition for driven reconnection is shown to be a function of the wavelength of the imposed flow compared with its distance from the neutral line as well as the orientation of the incoming plasma flow. Two–dimensional, incompressible extended MHD is used to develop the theory for a simple model of the collisionless magnetic reconnection problem. The linear, driven reconnection growth rate is analyzed. The theoretical model gives the time scale of the delay of the substorm energization of the order of a half an hour.</p>
                    <h3>Super–saturation mechanism of tokamak sawtooth relaxation</h3>
                        <p>Theoretical and computational analysis using the full 3D magnetohydrodynamic equations were carried out by <em>Sato, et al.</em> (1989). The plasma data and simulations showed that while a slow super–saturation mechanism is continuing between a slow current peaking and a slow–growing <span className="math inline"><em>m</em> = 1</span> kink mode until a sudden crash occurs when an <span className="math inline"><em>m</em> = 1</span> large–scale nonlinear unstable kink instability takes place, overcoming a nonlinear crescent magnetic structure which protects the flood of the super–saturation mechanism.</p>
                    <h3>Measurements of electron thermal transport due to electron temperature gradient modes in basic plasma experiments</h3>
                        <p>The gradients <span className="math inline">∇<em>T</em><sub><em>e</em></sub>, ∇<em>n</em><sub><em>e</em></sub></span> drive the <span className="math inline"><em>T̃</em><sub><em>e</em></sub>, <em>ñ</em><sub><em>e</em></sub>→</span> turbulent transport and the collisional transport. The first experimental scaling of the thermal conductivity <span className="math inline">$\raise.5ex\hbox{'{'}$\chi${'}'}_e(r)$</span> versus the amplitude of the electron temperature gradient fluctuation <span className="math inline"><em>T̃</em><sub><em>e</em></sub>(<em>r</em>, <em>t</em>)</span> was measured by <span className="math inline"><em>X</em>, <em>Y</em>, <em>Z</em></span> in the Adiabatic Toroidal Compressor (ATC) machine versus the electron temperature profile. Production and identification of Electron Temperature Gradient (ETG) turbulence modes in a stead–state cylinder with hydrogen plasma was reported in the Columbia Linear Machine (CLM) by <em>Wei, et al.</em> (2010). A measurement of electron thermal conductivity <span className="math inline">$\raise.5ex\hbox{'{'}$\chi${'}'}_e(r)$</span> was carried out using a high–frequency triple probe giving a value of <span className="math inline">$\raise.5ex\hbox{'{'}$\chi${'}'}_{'{'}\perp e{'}'}$</span> ranging between 2-<span className="math inline">$10\,\rm m^2/\rm s$</span>, which is of the order of a several times the gyroBohm diffusion coefficient. The experimental result agreed with the value of nonlocal thermal conductivity obtained from theoretical calculations and are consistent with gyrokinetic simulation results reported in the Columbia Linear Machine (CLM). The ETG turbulence is universal and of key importance for fusion plasmas.</p>
                        <p>For the tokamak plasma with a single–null magnetic separatrix, <em>Zheng, et al.</em> (2016) and <em>Miura, et al.</em> (2018) show how the drift–kinetic equations and anisotropic FLR–MHD model simulations explain the strength of the intermittent plasma blob emissions and transport across the magnetic separatrix in the Scrape–Off Layer (SOL). The complex structures propagating in SOL plasma have mixed ballooning–interchange and tearing mode features [<em>Miura, et al.</em> (2017)].</p>
                        <p>Impurity ions and plasma dust are transported across the Last Closed Flux Surface (LCFS) into the core plasma is described by drift–wave turbulence that is strong in the Scrape–Off Layer (SOL) driven turbulent fluxes. Controlling the plasma crossing, the SOL requires advanced uses of Radio Frequency RF plasma heating and toroidal current drive mechanisms.</p>
                        <p>More than five machines have focused on the impact of scattering of RF waves by plasma turbulence where RF waves are an irreplaceable tool for toroidal current drive and for control of the plasma instabilities. Lower Hybrid (LH) waves drive currents as shown in numerous machines including Tore Supra, WEST and EAST. The WEST research shows that the deposition profile Electron Cyclotron (EC) waves drive the current and suppress magnetic islands and the DIII–D research identifies why the RF deposition region is larger than previously predicted. Inductive start–up produces runaway electrons that accelerate without limit. RF external controls are needed to control the driving toroidal current without the formation of runaways.</p>
                    <h3>Calculations of the intrinsic plasma stochasticity in tokamak divertor separatrix magnetic configurations</h3>
                        <p>Poloidal divertors are the prime technique for controlling the influx of impurities and the Hall–MHD stability of high performance modes of operation in tokamaks. The complex mixture of magnetic islands and stochastic magnetic field lines across the lower single divertor is shown in detail by the genesis of the magnetic transport developing from a last closed magnetic surface at <span className="math inline"><em>q</em> = 0.7</span> and on the outboard mid–plane at <span className="math inline"><em>R</em> = 0.73 </span>m tokamak. A complex region of magnetic island and chaotic field lines is shown in the region of <span className="math inline">$0.4\,\rm m\times 0.4\,$</span>m surrounding the lower X–point of lower single null divertor.</p>
                        <p><em>Caldas, et al.</em> (2006) develop the plasma turbulence from the gradient–driven waves in plasmas and compare with experimental data from the Brazilian Tokamak (TBR) and Tokamak Chauffage Alfvén Brasilien (TCABR) tokamaks in Brazil. The conclusion is that low dimensional drift wave turbulence describes the measured turbulence and transport including the measured intermittency and space scales of the turbulence. An overview of the turbulence measured in the TCABR tokamak is given by <em>Bellintani, et al.</em> (2006) with 4.0 to <span className="math inline">4.5 </span>MHz Alfvén waves driven plasmas that develop transport barriers with the LH transitions. Runaway plasmas with <span className="math inline">33 </span>GHz electron plasma and electron cyclotron frequency waves are measured and modeled showing the locale Alfvén waves resonances measured with reflectometers and confirming the Alfvén wave resonance model predictions.</p>
                        <p>High–power electron cyclotron waves ECH propagating perpendicular to the magnetic field produce ponderomotive forces and are used to create poloidal forces and flows which in turn produce radial forces on the plasma. This is used in <em>Carbajal, et al.</em> (2020) to drive plasma spin–up in a poloidal direction along with an associate driving of the toroidal plasma current. The radial ponderomotive force produces the poloidal rotation driving the <em>Biglari, et al.</em> (1990) transition to an improved plasma confinement state. <em>Carbajal, et al.</em> (2020) calculates with numerical simulations that a <span className="math inline">$5\,\rm kW/cm^2$</span> produces the radial ponderomotive force that leads to the transition in the to the H–mode plasma confinement. Both the X–modes and O–modes from the EC waves are analyzed and used to drive a steady–state plasma toroidal plasma current in the tokamak models.</p>
                        <p>Spin–offs from the methods used to control of the outer layers of plasma transport and heating work provide the opportunity for improved descriptions and predictions of the first wall erosion created by the escaping plasma and by thermal plasma bursts.</p>
                        <p>The disruption–induced forces on the tokamak wall are evaluated analytically within the large–aspect–ratio expansion for axisymmetry, circular plasmas in the absence of halo currents. The plasma disruptions are modeled as rapid changes in the plasma pressure Thermal Quench (TQ) and net Current Quench (CQ). The distribution disruption over the poloidal angle force is derived as a function of (TQ) and (CQ) inputs. The derived formulas allow comparison of the TQ– and CQ–produced forces calculated with and without the poloidal currents induced in the confinement–vessel walls. The latter variant (CQ) without the walls represents the inherent property of the codes, treating the wall as a set of toroidal current filaments. Such a simplification leads to unacceptably large errors in the simulated forces for both thermal quench and current–quench dynamics. The TQ part of the force prevails over that due to CQ in the high–<span className="math inline"><em>β</em></span> plasma scenarios developed for JT–60SA and ITER [<em>Pustovitov and Kiramov</em> (2018)].</p>
                    <h3>Advances in the physics studies for the JT-60SA tokamak exploitation and research plan</h3>
                        <p>JT–60SA, the largest tokamak that will operate before ITER, has been designed and built jointly by Japan and Europe, and is due to start operation in 2020. Its main missions are to support ITER exploitation and to contribute to the demonstration fusion reactor machine and scenario design. Peculiar properties of JT–60SA are its capability to produce long–pulse, high–<span className="math inline"><em>β</em></span>, and highly shaped plasmas. The preparation of the JT–60SA Research Plan, plasma scenarios, and exploitation are producing physics results that are not only relevant to future JT–60SA experiments, but often constitute original contributions to plasma physics and fusion research. Results of this kind are presented in this paper, in particular in the areas of fast ion physics, high–beta plasma properties and control, and nonlinear edge localized mode–stability studies.</p>
                <h2>Soviet Union and China Build Toroidal Fusion Power Machines</h2>
                    <p><strong>TEXT TO BE ADDED</strong></p>
                <h2>The Deuterium–Tritium Tokamak Fusion Test Reactor (TFTR) at Princeton Plasma Physics Laboratory Produces Significant Fusion Power Approaching Break–even Called <span className="math inline">$\mathbf{'{'}\rm Q_{'{'}\rm DT{'}'}=1{'}'}$</span></h2>
                    <p><strong>TEXT TO BE ADDED</strong></p>
                <h2>France and MIT Sets Records Developing high–<span className="math inline"><em>β</em></span> Fueled Tokamak High–<span className="math inline"><em>β</em></span> Fusion Machines With Special Heating Methods</h2>
                    <p><strong>TEXT TO BE ADDED</strong></p>
                <h2>Germany Follows an Independent Approach with the Stellarator Confinement Vessel at Wendelstein (Greifswald, Germany) and at the Heisenberg and Stuttgart Laboratories</h2>
                    <p><strong>TEXT TO BE ADDED</strong></p>
                <h2>International Agreement in European Union is to Build a Large Volume–shaped Toroidal D–T Fusion Machine Named the Joint European Torus (JET) Designed to Achieve a Record for D–T Fusion–Burning Plasma Power</h2>
                    <p><strong>TEXT TO BE ADDED</strong></p>

                <h2>Bibliography</h2>
                <p>Biskamp, D. (2000). <span><em>Magnetic Reconnection in Plasmas</em></span> (Cambridge University Press), <a href="http: //adsabs.harvard.edu/abs/2000mrp. . book. . . . .B">http: //adsabs.harvard.edu/abs/2000mrp. . book. . . . .B</a>.</p>
                <p>Bellintani Jr., V., Elfimov, A. G., Elizondo, J. I., Fagundes, A. N., Fonseca, A. M. M., Galváo, R. M. O., Guidolin, L., Kuznetsov, Yu. K., Lerche, E. A., Machida, M., Mariz, C., Nascimento, I. C., Ribeiro, C., Ruchko, L. F., de Sá, W. P., Sanada, E. K., Severo, J. H. F., da Silva, R. P., Tsypin, V., Usuriaga, O. C. and Vannucci, A. (2006). Overview of Recent Results of TCABR, <span><em>AIP Conf. Proceed.</em></span> <strong>875</strong>, p.&nbsp;350, <a href="https://doi.org/10.1063/1.2405964">https://doi.org/10.1063/1.2405964</a>.</p>
                <p>Biglari, H., Diamond, P. H. and Terry, P. W. (1990). Influence of sheared poloidal rotation on edge turbulence, <span><em>Phys. Fluids B</em></span> <strong>2</strong>, pp.&nbsp;1–4, <a href="https://doi.org/10.1063/1.859529">https://doi.org/10.1063/1.859529</a>.</p>
                <p>Brookman, W. M., Austin, M. E., Gentle, K. W., Petty, C. C., Ernst, D. E., Peysson, Y., Decker, J. and Barada, K. (2017). Experimental measurement of ECH deposition broadening: Beyond anomalous transport, <em>EPJ Web Conf.</em> <strong>147</strong>, p.&nbsp;03001, <a href="https://doi.org/10.1051/epjconf/201714703001">https://doi.org/10.1051/epjconf/201714703001</a>.</p>
                <p>Caldas, I. L., Marcus, F. A., Batista, A. M., Viana, R. L., Lopes, S. R., Heller, M. V. A. P., Guimarães–Filho, Morrison, P. J. and Horton, W. (2006). Turbulence–induced transport in tokamaks, <span><em>AIP Conf. Proceed.</em></span> <strong>875</strong>, p.&nbsp;341, <a href="https://doi.org/10.1063/1.2405962">https://doi.org/10.1063/1.2405962</a>.</p>
                <p>Carbajal, L., del-Castillo-Negrete, D. and Martinelli, J. J. (2020). Runaway electron transport in stochastic toroidal magnetic fields, <em>Phys. Plasmas</em> <strong>27</strong>, p.&nbsp;032502, <a href="https://doi.org/10.1063/1.5135588">https://doi.org/10.1063/1.5135588</a>.</p>
                <p>Drake, J. F. (2001). Magnetic explosions in space, <span><em>Nature</em></span> <strong>410</strong>, pp.&nbsp;525–526, <a href="https:doi.org/10.1038/35069160">https:doi.org/10.1038/35069160</a>.</p>
                <p>Hatch, S. M., LaBelle, J., Lotko, W., Chaston, C. C. and Zhang, B. (2017). IMF control of Alfvénic energy transport and deposition at high latitudes, <span><em>JGR Space Physics</em></span> <strong>122</strong>, pp.&nbsp;189–12,211, <a href="https://doi.org/10.1002/2017JA024175">https://doi.org/10.1002/2017JA024175</a>.</p>
                <p>Horton, W. and Tajima, T. (1988). Linear theory of driven reconnection, <span><em>J. Geophys. Res.</em></span> <strong>93</strong>, pp.&nbsp;2741–2748, <a href="http://dx.doi.org/10.1029/JA093iA04p02741">http://dx.doi.org/10.1029/JA093iA04p02741</a>.</p>
                <p>Horton, W., Brookman, M., Goniche, M., Peysson, Y. and Ekedahl, A. (2017). RF Heating Technology Workshop and US/JAPAN Workshop on RF Physics, “High–frequency RF waves in lower–hybrid current drive", Santa Monica, California, USA, Sept. 5–8, 2017.</p>
                <p>Horton, W. (2018). <span><em>Turbulent Transport in Magnetized Plasmas</em></span>, 2nd Edition (World Scientific, 2018), ISBN:978–981–3225–86–6.</p>
                <p>Miura, H., Zheng, L. and Horton, W. (2017). Numerical simulations of interchange/tearing instabilities in 2D slab with numerical model for edge plasma, <span><em>Phys. Plasmas</em></span> <strong>24</strong>, p.&nbsp;092111, <a href="http://dx.doi.org/10.1063/1.4993962">http://dx.doi.org/10.1063/1.4993962</a>.</p>
                <p>Miura, H., Miyazaki, J., Ide, M., Miyagi, D., Tsuda, M. and Yokoyama, S. (2018). Estimation method of optimal amount of overshooting current for temporal uniform magnetic field in conduction–cooled HTS coils, <span><em>IEEE Trans. Appl. Superconductivity</em></span> <strong>28</strong>, <a href="https://doi.org/10.1109/TASC.2018.2805688">https://doi.org/10.1109/TASC.2018.2805688</a>.</p>
                <p>Momota, H. and Tomita, Y. (1992). D-<span className="math inline"><sup>3</sup></span>He Fueled FRC Power Plant for the 21st Century, <span><em>Plasma Phys. Fusion Tech.</em></span> <strong>67</strong>, pp.&nbsp;539–549, <a href="https://doi.org/10.1585/jspfl958.67.539">https://doi.org/10.1585/jspfl958.67.539</a>.</p>
                <p>Pustovitov, V. D. and Kiramov, D. I. (2018). Local and integral disruption forces on the tokamak wall, <span><em>Plasma Phys. Control. Fusion</em></span> <strong>60</strong>, p.&nbsp;045011, <a href="https://doi.org/10.1088/1361--6587/aab056">https://doi.org/10.1088/1361--6587/aab056</a>.</p>
                <p>Sato, T., Nakayama, Y. Hayashi, T., Watanabe, K. and Horiuchi, R. (1989). Super–saturation and nonlinear crash of tokamak sawtooth oscillations, <span><em>Phys. Rev. Lett.</em></span> <strong>63</strong>, p.&nbsp;528, <a href="https://doi.org/10.1103/$PhysRevLett. 63.528">https://doi.org/10.1103/$PhysRevLett. 63.528</a>.</p>
                <p>van Milligen, B. Ph., Nicolau, J. H., Garcia, L., Carreras, B. A., Hidalgo, C. and the TJ–II Team. (2017). The impact of rational surfaces on radial heat transport in TJ–II, <span><em>Nucl. Fusion</em></span> <strong>57</strong>, p.&nbsp;056028, <a href="https://doi.org/10.1088/1741-4326/aa61lf">https://doi.org/10.1088/1741-4326/aa61lf</a>.</p>
                <p>van Milligen, B. Ph., Hidalgo, C. and The TJ–II Team (2018). Filaments in the edge–confinement region of TJ–II, <span><em>Nucl. Fusion</em></span> <strong>58</strong>, p.&nbsp;026030, <a href="https://doi.org/10.1088/1741-4326aa9db6">https://doi.org/10.1088/1741-4326aa9db6</a>.</p>
                <p>Wei, X., Sokolov, V. and Sen, A. K. (2010). Experimental production and identification of electron temperature gradient modes, <span><em>Phys. Plasmas</em></span> <strong>17</strong>, p.&nbsp;042108, <a href="ttps://doi.org/10.1063/1.3381070">ttps://doi.org/10.1063/1.3381070</a>.</p>
                <p>Yamada, M., Kulsrud, R. and Ji, H. (2010). Magnetic reconnection, <span><em>Rev. Mod. Phys.</em></span> <strong>82</strong>, p.&nbsp;603, <a href="https://doi. org/10.1103/RevModPhys. 82.603">https://doi. org/10.1103/RevModPhys. 82.603</a>.</p>
                <p>Zheng, L., Horton, W., Miura, H., Shi, T. H. and Wang, H. Q. (2016). Nonneutralized charge effects on tokamak edge magnetohydrodynamic stability, <span><em>Phys. Lett. A</em></span> <strong>380</strong>, pp.&nbsp;2654–2657, <a href="http://dx.doi.org/10.1016/j.physleta.2016.06.027">http://dx.doi.org/10.1016/j.physleta.2016.06.027</a>.</p>
            
            </div>
            
        )
    }
}
