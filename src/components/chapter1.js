import React, { Component } from 'react';
import loadMathJax from './load-mathjax.js';

export default class Chapter1 extends Component {
    
   componentDidMount() {
       loadMathJax();
   }
    render () {
        return (
            <div className='content'>
                <h1>Star Power from Nuclear Plasmas</h1>
                <h2>The Universe is Filled with Galaxies</h2>
                    <p>Our Sun is a typical main sequence G–type star. The first black hole was observed by a large coordinated international science team each with different instruments from 2017 to 2018 and published in a series of six articles in the Astrophysical Journal Letters 875:LI–L6 in April 2019. This was the first measurements of the properties of the massive black hole M87 shown in Fig. <a href="#fig1-2ITER" data-reference-type="ref" data-reference="fig1-2ITER">[fig1-2ITER]</a>. The concept of Black Holes was first published by Rip Thorn in 1994 and with their discovery was awarded the Nobel Prize.</p>
                    <p>The object was first noted in 1918 in a giant elliptical galaxy named Virgo. Optical and infrared data in 1997 gave estimates of mass <span class="math inline">$\rm MBH=3-6\times 10^9\,\rm M_\odot$</span> solar masses at a distance of <span class="math inline">17 </span>Mpc. This object was the second largest visible black hole after the black hole in Sagittarius named Sgr <span class="math inline"><em>A</em><sup>*</sup></span>. The M87 has a powerful Kpc long bright plasma jet observed in both the radio and optical frequency emission bands and in the X–ray bands. Plasma material moves down the jet approaching the black hole at the speed of light.</p>
                    <p>The bright edges of the jet Very-Long-Baseline Interferometry (VLBI) data are launched in the central <span class="math inline">100 <em>μ</em> </span>As. The high mass and proximity of M87 gives the clear images of the black hole and its jet. The launching on the horizon is explained by Generalized Relativistic MHD (GRMHD) simulations.</p>
                    <p>The spin distribution of the plasma in the Massive Black Holes (MBHs) contains rich information on the MBH growth and history. The spin evolution of MBHs shows that each MBH experiences two phases of accretion. An initial phase of coherent accretion following either the standard thin disk accretion or the super–Eddington disk. The second phase is a chaotic–accretion phase composed of many episodes with different disk orientations. When the chaotic–accretion phase is significant to the growth of an MBH, the MBH spin quickly reaches the maximum value because of the initial coherent accretion, then changes to a quasi–equilibrium state fluctuates in the chaotic–accretion episodes around a value determined by the mean ratio of the disk to the MBH mass <span class="math inline">$(\rm M_\odot)$</span>. The fluctuations decline in the late chaotic accretion if <span class="math inline">$\mathrm{MBH}\mathrel{\mathpalette\oversim&gt;}(1-3)\times 10^8\rm M_\odot$</span>.</p>
                    <p>The turning point to this decline is determined by the equality of the disk radius and disk size. By matching the currently available spin measurements with samples generated from the two–phase models on the spin–mass plane, we find that MBHs must experience significant chaotic–accretion phase with many episodes and that the mass accreted in each episode is roughly 1-2% of <span class="math inline"><em>M</em><sub>⊙</sub></span>. MBHs with <span class="math inline">$\mathrm{MBH}\mathrel{\mathpalette\oversim&gt;}10^8\rm M_\odot$</span> appear to have intermediate–to–high spins (<span class="math inline"> ∼ 0.5</span>-1). The best matches also infer that (1) the radiative efficiencies (<span class="math inline"><em>η</em></span>) of the active MBHs, the correlation between <span class="math inline"><em>η</em></span> and <span class="math inline"><em>M</em><sub>⊙</sub></span> is weak; (2) the mean radiative efficiency of active MBHs in the range <span class="math inline"><em>η</em> ∼ 0.09</span>-0.15, consistent with the global constraints [<em>Zhang and Lu</em> (2019)].</p>
                <h2>G–stars burn hydrogen in their core for billions of years</h2>
                    <p>Stars are classified according to their spectral characteristics in the Havard system with the highest temperatures Class O, the highest temperature, through B, A, F, G, K and M to their lowest temperature range. The Sun is in the middle of the group in the G group with temperature range from <span class="math inline">5, 000 </span>K to <span class="math inline">6, 000 </span>K which gives the yellow stars with masses of 0.8-<span class="math inline">1.04 <em>M</em></span> solar mass. The hottest class is O–stars with masses greater than <span class="math inline">16 </span>M solar and the coolest stars are M–stars with masses 0.08-<span class="math inline">0.45 </span>M solar. The evolutions with age birth to burn out is described in the Hertzsprung–Russel Diagram (HRD) that shows the evolution of the stars luminosity versus color and age.</p>
                    <h3>Massive stars and their surrounding gas with spectroscopy</h3>
                        <p>The first stars and galaxies provided the seeds from which all galaxy evolution grew. Knowledge of these galaxies is needed to understand ionizing photon production, which provides an understanding of early galaxy evolution. Several programs that are establishing the needed framework to interpret galaxies from <span class="math inline"><em>z</em> ∼ 0</span>10, are bridging the present–day and early universe. Multi–wavelength spectroscopy is used to disentangle the spectral signatures that characterize the interplay between massive stars and their surroundings and provide a basis for interpreting how the radiative processes shape galaxies. The ionizing stellar populations with the baryon<span class="math inline">+</span>metal feedback cycle and the conditions of ionizing photon production and escape are used to interpret the first galaxy formations and the cosmic evolution.</p>
                        <p>In preparation for the coming UV window onto the early universe with the advent of The James Webb Space Telescope and the extremely large telescopes such as the Giant Magellan Telescope (GMT), will provide data for developing the model for the early universe. The COS Legacy Archival Spectroscopic Survey (CLASSY) program on the Hubble Space Telescope program will produce high–resolution UV spectral atlas of star–forming galaxies. CLASSY will calibrate tools that will allow us to describe the stars and interstellar medium in galaxies across redshifts that will help the studies of the cosmic origins, ionizing production, and the evolution of galaxies.</p>
                    <h3>Exoplanets with extreme precision spectroscopy</h3>
                        <p>There is now evidence for the existence of Earth–like planets orbiting other stars far from the Sun, but the data is noisy from the other larger Jupiter–like planets and the noise of their own star. To overcome these challenges a multidisciplinary approach is used to study the stellar and planetary physics with new instruments and innovative data analysis techniques. Based on technological and scientific advances in the years 2015–2020s the field of Radial Velocity (RV) exoplanet detection is bringing evidence for existence of Earth– and Mars–like planets in other solar systems. In the 2020s there are building and commissioning phases for hunting and measuring the Doppler spectrographs aiming at <span class="math inline"> &lt; 30 </span>cm/s RV precision in the optical search for Earth analogs in orbiting other stars with speeds <span class="math inline"> &lt; 1 </span>m/s in the pursuit of finding M–dwarf planets. These massive instruments leverage a range of technological advances, from high–homogeneity illumination delivery setups with sophisticated wavelength calibration systems. Currently there are six new planet–hunting instruments that Arpita Roy, California Institute of Technology, is developing. These new instruments are expected to give a new unprecedented understanding of stars, and their spectroscopic data leading to the detection of planetary atmospheres.</p>
                <h2>Stars explosively expand as the hydrogen and then helium burn–up forming red giants — Aldebaran and Alpha Centauri — or collapse into Black Holes</h2>
                    <p>Aldebaran is a red giant star about 65 light years from the Sun with a surface temperature of <span class="math inline">3, 900 </span>K and radius 44 times the solar radius that is well studied from being approached by space probe Pioneer 10. Being one of the brightest stars in the sky, Aldebaran was discovered in Athens Greece in 500 AD.</p>
                <h2>The Sun formed an accretion disk 4.5 billion years ago</h2>
                    <p>The Sun formed an accretion disk 4.5 billion years ago leaving residual plasma that collapsed into the planets during formation of our solar system. We describe the evolution of our solar system and the planets around our Sun. The evolution of our solar system has been revealed in the last forty-five years by the two space explorers Voyager 1 and Voyager 2 launched in 1975 and now flying outside our solar system. The Sun is one of billions of stars in the Milky Way Galaxy far out from the center of the galaxy. The Sun’s history is described in numerous books and Wikipedia is a typical star in the billions of galaxies in the universe. Our knowledge of this star is unique from the many solar spacecraft missions and the Solar and Heliospheric Observatory built jointly by NASA and European Space Agency in 1995.</p>
                    <p>Mildly supersonic <span class="math inline"><em>M</em><sub><em>s</em></sub> = <em>u</em>/<em>c</em><sub><em>s</em></sub> ∼ 1.4</span>-5 plasma winds are common place in astrophysics and space physics. The plasma winds are associated with mass accretion to a central star. Plasma winds also occur in the precursor phase to the Type Ia Supernova (SNIa) where plasma is pulled into the magnetic White Dwarf (WD) from the companion star. Plasma winds are intercepted by Neutron Stars (NS). After stars are ignited, the stellar wind outflow creates bow shocks at the magnetic planets and at the termination of the stellar outflow where the thermal pressure jumps to match that of the interstellar plasma gas. In the 1990s the heliopause was estimated to be at 110-<span class="math inline">180 </span>AU before the Voyager 1 spacecraft was able to observe the accelerated particles when passing through the associated plasma shock at the heliopause.</p>
                    <h3>Exploring the Solar System with Voyager 1 and Voyager 2</h3>
                        <p>Voyager 2 crossed into interstellar space a year ago in 2019. Now, five teams of astronomers have analyzed the data it returned to paint a picture of this boundary in the outer solar system shown in Fig. <a href="#V1" data-reference-type="ref" data-reference="V1">[V1]</a>.</p>
                        <p>Four decades after its launch into the outer solar system, Voyager 2 crossed the boundary that separates the Sun’s domain from the plasma that floats between the stars. Its crossing on November 5, 2018 happened six years after that of the speedier Voyager 1.</p>
                        <p>Voyager 1 returned a complicated view of the heliopause outer boundary. In fact, astronomers had a hard time figuring out when the spacecraft had actually made the crossing. Now, Voyager 2 gave a point of comparison with a simple picture of the heliopause boundary. In a dedicated issue of <em>Nature Astronomy</em>, astronomers analyze the two data reports.</p>
                        <h4>Far from the Sun — the Oort Cloud</h4>
                            <p>One could argue that neither Voyager has really left the solar system. For example, the Sun’s gravity holds the hypothesized shell of icy objects known as the Oort Cloud in orbit at a distance of some 100,000 astronomical units (AU), the average distance between Earth and the Sun — far beyond the Voyagers. What the two spacecraft have left behind, however, is the heliosphere, the cavity around the Sun blown out by the solar wind.</p>
                            <p>Even though the Sun is pouring out charged particles into this bubble, the density of those particles decreases as the square of their distance from the Sun. By the edge of the heliosphere, matter has become incredibly sparse, a mere 0.002 electrons per cubic centimeter, as Donald Gurnett and William Kurth (2019) (both at University of Iowa) report in their study of Voyager 2 data. These solar particles have not lost their energy and remain extremely hot. The gas and dust between the stars, on the other hand, is cold and dense. The particles of the <em>interstellar medium</em>, and the magnetic fields they carry, sweep around the heliosphere like ocean waves around a boat. The boundary between the two, known as the <em>heliopause</em>, is by its nature a turbulent plasma. The heliopause “breathes," expanding when the Sun is more magnetically active and shrinking when the Sun goes quiet. The heliopause boundary is marked by a jump in particle density and a drop in temperature that was clearly observed as the Voyagers traveled farther from the Sun.</p>
                        <h4>The Voyagers’ journey outward</h4>
                            <p>The Voyagers were launched a few weeks apart in 1977 for a grand tour of the outer solar system. Because it was traveling faster, Voyager 1 reached the heliopause first, speeding through the boundary in the northern hemisphere. However, some of its plasma instruments failed in 1980, so scientists had to analyze data from its other working instruments to get readings on what particles in its vicinity were doing. While Voyager 1 reached the edge of the solar plasma bubble on August 25, 2012, scientists did not fully realize this until a year later.</p>
                            <p>What made the crossing confusing was that scientists had expected the direction of the magnetic field to change abruptly as Voyager 1 traversed from solar plasma to the interstellar plasma, but Voyager 1 saw no change. Was it simply a coincidence that the magnetic field from inside the bubble, which comes from the Sun, had lined up just right with the magnetic field from outside the bubble, where the plasma comes from the stars?</p>
                            <p>Particle number densities versus radial distance from the Sun in Astronomical Units (AU) is shown in Fig. <a href="#densities" data-reference-type="ref" data-reference="densities">[densities]</a> The black dots and lines are from Voyager 1 (V1) and red dots and lines are from Voyager 2 (V2). Densities from “plasma oscillations" are electron densities from the Plasma Wave Instrument (PWS). Densities “from the PLS (plasma) instrument" are proton densities, which are almost the same as the electron densities [<em>Gurnett and Kurth</em> (2019)].</p>
                        <h4>Voyager 2’s view of the heliopause</h4>
                            <p>Like Voyager 1, Voyager 2 crossed the “nose" of the heliosphere — that is, into the flow of interstellar plasma, though Voyager 2 passed through the southern hemisphere. But unlike Voyager 1 and Voyager 2 had five working instruments, including the plasma instrument that failed on Voyager 1. This instrument’s reading of a 20–fold jump in the plasma density is what confirmed that Voyager 2 had gone beyond the heliopause. The change occurred over only a small distance of <span class="math inline">0.005 </span>AU, as shown in Fig. <a href="#densities" data-reference-type="ref" data-reference="densities">[densities]</a>.</p>
                            <p>Another marker of the heliopause is a sudden change in the nature of the energetic particles. The energies of solar wind particles is low in comparison to those coming from the galaxy at large. As Voyager 2 crossed through the heliopause, the low–energy ions from the solar wind drop away, replaced by galactic cosmic rays produced in distant and the long–ago supernova explosions. However, Voyager 2 saw no sudden shift in magnetic field accompanying the abrupt changes in particle density shown in Fig. <a href="#densities" data-reference-type="ref" data-reference="densities">[densities]</a>.</p>
                            <p>What was also surprising was that both spacecraft had crossed the heliopause at roughly the same distance from the Sun: <span class="math inline">121.6 </span>AU and <span class="math inline">119 </span>AU, respectively. Voyager 1 made its move across the magnetopause as the Sun was nearing a peak in solar activity, sending out regular “explosions" of plasma and energy known as coronal mass ejections. By the time Voyager 2 went across the Sun’s activity was quiet. The heliopause should have “breathed in" during this time interval, yet both spacecraft went over the boundary at roughly the same distance.</p>
                            <p>Density measurements show that both spacecraft crossed the heliopause in under a day, yet neither one saw a whole boundary. Voyager 1 saw the outside plasma leaking in, reported by Edward Stone (NASA–JPL–Jet Propulsion Lab) [<em>Stone, et al.</em> (2019)], Voyager’s project scientist and lead of a group. “Even before we left the heliosphere, we had two episodes where we were connected to the outside." The interstellar medium had penetrated the heliopause in these instances and invaded the heliosphere during the Voyager 1 crossing.</p>
                            <p>For Voyager 2, Stone reported that the situation was reversed from the Voyager 1 crossing plasma structures. Even after its heliopause crossing, the spacecraft was still detecting particles originating in the solar wind. This time, the inside heliosphere plasma was leaking out across the boundary.</p>
                            <p>Observations from both Voyagers 1 and 2 continue to reveal the full complexity of the heliopause. Voyager 1 saw a “stagnation region" before the heliopause, where particle velocities dropped near zero. Voyager 2 saw multiple boundary layers inside the heliopause. Both spacecraft saw a boundary layer extending at least <span class="math inline">10 </span>AU past the heliopause, a region that Gurnett likened to the boundary layer that forms when air flows over an airplane wing.</p>
                        <h4>Astra and the bow wave in the heliosphere</h4>
                            <p>Next up, technically speaking, is the bow wave that forms ahead of the heliosphere as it travels through the interstellar medium, like the bow wave that forms at the prow of a ship. Depending on how fast the solar system moves relative to the interstellar plasma, this wave might even be a shock, more akin to the bow shock in front of a fighter jet. While the Voyagers continue to travel along at <span class="math inline">3 </span>AU per year in interstellar space, they only have another five years of power left. They will be the last probes to pass through these boundaries for at least the next 25 years. Their current goal is to measure the true interstellar plasma that is undisturbed by the Sun, its field and the particles that the Sun sends out.</p>
                            <p>The Voyager 1 and 2 Saturn encounters occurred nine months apart, in November 1980 and August 1981. Voyager 1 is leaving the solar system. Voyager 2 completed its encounter with Uranus in January 1986 and with Neptune in August 1989.</p>
                            <p>Comparing data from different instruments aboard the two spacecrafts shows that the probe crossed the outer edge of the heliosphere on November 5, 2019. This boundary, called the heliosphere, is where the tenuous, hot solar wind meets the cold, dense interstellar medium. Voyager 1 crossed this boundary in 2012, but Voyager 2 carries a more working instrument than Voyager 1.</p>
                            <p>Voyager 2 now (in 2020) is more than 11 billion miles (18 billion kilometers) from Earth. Mission operators still can communicate with Voyager 2 as it enters this new phase of its interstellar journey, but information, moving at the speed of light, takes about 16.5 hours to travel from the spacecraft to Earth. By comparison, light traveling from the Sun takes about eight minutes to reach Earth.</p>
                            <p>Together, the two Voyagers provide detailed data on how the heliosphere plasma interacts with the constant interstellar wind flowing from beyond. Their observations complement data from NASA’s Interstellar Boundary Explorer (IBEX), a mission that is remotely sensing that boundary. NASA also is preparing an additional mission — the Interstellar Mapping and Acceleration Probe (IMAP), due to launch in 2024 — to expand on the Voyager’s observations.</p>
                            <p>The boundary of the solar system is beyond the outer edge of the Oort Cloud, a collection of small objects that are still under the influence of the Sun’s gravity. The width of the Oort Cloud is not known precisely, but it is estimated to begin at about 1,000 Astronomical Units (AU) from the Sun and to extend to about <span class="math inline">100, 000 </span>AU. One AU is the distance from the Sun to the Earth.</p>
                            <p>The Voyager probes are powered using heat from the decay of radioactive material, contained in a device called a Radioisotope Thermal Generator (RTG). The power output of the RTGs diminishes by about four watts per year, which means that various parts of the Voyagers, including the cameras on both spacecraft, have been turned off over time to manage power.</p>
                            <p>Voyager 2 launched in 1977, 16 days before Voyager 1. Both V1 and V2 have traveled well beyond their original destinations. The spacecraft were built to last five years and conduct close–up studies of Jupiter and Saturn. However, as the mission continued, additional flybys of the two outermost giant planets, Uranus and Neptune, proved possible. As the spacecraft flew across the solar system, remote–controlled reprogramming was used to give the Voyagers with greater capabilities than they possessed when they left Earth. Their lifespans have stretched to 41 years, making Voyager 2 NASA’s longest running mission.</p>
                            <p>Voyager’s mission controllers communicate with the probes using NASA’s Deep Space Network (DSN), a global system for communicating with interplanetary spacecraft. The DSN consists of three clusters of antennas in Goldstone, California; Madrid, Spain; and Canberra, Australia.</p>
                            <p>The Voyager Interstellar Mission is a part of NASA’s Heliophysics System Observatory, sponsored by the Heliophysics Division of NASA’s Science Mission Directorate in Washington. Jet Propulsion Lab (JPL) built and operates the twin Voyager spacecraft. NASA’s DSN, managed by JPL, is an international network of antennas that supports interplanetary spacecraft missions and radio and radar astronomy observations for the exploration of the solar system and the universe. The network also supports selected Earth–orbiting missions. The Commonwealth Scientific and Industrial Research Organization, Australia’s national science agency, operatea both the Canberra Deep Space Communication Complex, part of the DSN, and the Parkes Observatory, which NASA is using to downlink data from Voyager 2.</p>
                    <h3 class="unnumbered">View of the Solar System from the Voyagers</h3>
                        <p>Voyager 2 left the heliosphere on November 5, 2018. While Voyager 1 left the heliosphere six years earlier than Voyager 1, the signals from its crossing were complex and difficult to interpret. In contrast, the signals from Voyager 2 were simple and showed monotonic increase in the plasma density from <span class="math inline">$0.002\,\rm ions/cm^3$</span> in the heliosphere to <span class="math inline">$0.5\,\rm ions/cm^3$</span> in a period less than one hour from crossing the heliopause to the interstellar plasma [Nature Astronomy November 2019]. The data shows clearly that the plasma between the stars is higher density and colder than inside the heliosphere. The more complex data from the earlier Voyager 1 crossing are now interpreted as showing that there was a bulge or plume of interstellar plasma that penetrated into the heliosphere plasma on the other side of the path, drawn between the widely–separated exiting points of the two Voyager spacecrafts. The two spacecrafts have several years of travel time in the interstellar plasma on opposite sides of the heliopause [Sky and Telescope, p. 10, February, 2020 and <a href="https://is.gd/voyager2">https://is.gd/voyager2</a>].</p>
                        <p>For our Milky Way Galaxy the Large Magellanic Cloud is the largest neighboring galaxy and has a large number of hot stars emitting X–rays in a star–forming region of that Milky Way Galaxy. A new X–ray telescope, EROSITA, is mapping out the locations of the X–ray stars. The expectation is that EROSITA may find thousands of X–ray sources. EROSITA is an X–ray instrument built by the Max Planck Institute for Extraterrestrial Physics in Germany as part of the Russian–German Spektr–RG space observatory, which also carries the Russian telescope ART–XC. It was launched by Roscosmos on 13 July 2019 from Baikonur and deployed in a six–month halo orbit around the second Lagrange point.</p>
                        <p>The Voyager encounters with Saturn occurred nine months apart in November 1980 and August 1981. While Voyager 1 was leaving the solar system Voyager 2 completed its encounter with Uranus in January 1986 and with Neptune in August 1989.</p>
                        <p>The heliosphere may be viewed as a “protective bubble" of particles and magnetic fields created by the Sun. Voyager 1 crossed this boundary in 2012 while Voyager 2 carries more sophisticated instrumentation has provided more detailed data on the interstellar space plasma.</p>
                <h2>Planet Earth is an Optimal Distance from the Sun</h2>
                    <p>Planet Earth is an optimal distance from the Sun allowing life to form as recorded from the fossils. The fossils on Earth show the evolution of the planet from the Cambrian to the recent Cenozoic fossils. The first forms of life started about four billions years after the planet Earth was formed in the Paleozoic period followed by the Cenezoic period of our creatacdios limestone in central Texas and the cenozoic period where the humans evolved from apes.</p>
                    <p>In July 1969 the Apollo 11 astronauts, Neil Armstrong and Edwin “Buzz" Aldrin, landed on the moon while Michael Collins orbited the moon in the command module named Columbia. The previous Apollo missions to the moon had researched the lunar surface searching for the best landing site so that Apollo 11 landed in a safe level area where Armstrong and Aldrin were able to walk a hundred yards, picking up samples of moon rocks and soil to return to Earth. Subsequent missions to the moon, Apollo 12, 13, 14, 15, 16 and the last Apollo 17 returned many samples of soil to heavy rocks. The rocks were largely basalt volcanic materials and some from the interior of the moon with Mg–Fe–Ca silicate minerals and Ca–Al and Fe–Ti oxides.</p>
                    <p>A detailed review of the Apollo 11 and subsequent Apollo 12 to 17 discoveries is published in the July 2019 issue of <em>Physics Today</em>, Vol. 72, No. 7, written by B. L. Jolliff and M. S. Robinson, Professors at the University of Washington in St. Louis, Missouri and Arizona State University. The article gives a detailed account of discoveries and their importance in the history of space physics. The success of the United States being the first to land on the moon and a series of other planets, is due to President John F. Kennedy recognizing the urgency of building a space physics and defense system to compete with the Soviet Union’s first orbit spacecraft, Sputnik, launched October 4, 1957 orbiting the Earth. Sputnik set off great alarm in the United States during the Cold War.</p>
                <h2 id="mars-shows-forms-of-life-but-hotter-venus-shows-no-evidence-of-surface-life">Mars Shows Forms of Life But Hotter Venus Shows No Evidence of Surface Life</h2>
                    <h3 id="gtype-stars-burn-hydrogen-in-their-core">G–type stars burn hydrogen in their core</h3>
                    <p>The Sun is a G–type star in the Milky Way galaxy. G–type stars burn hydrogen in their core for 10 billion years and then expand to become red giants like Aldebaran or Alpha Centauri. There are billions of stars in the Milky Way galaxy rotating in spiral arms about the core black hole at the core of the galaxy.</p>

                <p>Berg, D. (2020). Bridging Galaxy Evolution Across Cosmic Time: Tracing the Interplay Between Massive Stars the Surrounding Gas Spectroscopy, Physics Colloquium, Ohio State University, February 19, 2020.</p>
                <p>Dessler, A. J. (1983). <em>Physics of the Jovian Magnetosphere</em> (Cambridge Planetary Science Old). (Cambridge and New York, Cambridge University Press, 1983), pp. 498–504 , <a href="https://doi.org/10.1017/CBO9780511564574">https://doi.org/10.1017/CBO9780511564574</a></p>
                <p>Gurnett, D. and Kurth, W. S. (2019). Plasma densities near and beyond the heliopause from the Voyager 1 and 2 plasma wave instruments, <em>Nature Astron.</em> <strong>3</strong>, pp. 1024–1028, <a href="https://doi.org/10.1038/s41550-019-0918-5">https://doi.org/10.1038/s41550-019-0918-5</a>.</p>
                <p>Lawson, Anton E. (2002). What Does Galileo’s Discovery of Jupiter’s Moons Tell Us About the Process of Scientific Discovery? <em>Science and Education</em> <strong>11</strong>, pp. 1–24, <a href="https://doi.org/10.1023/A:1013048828150">https://doi.org/10.1023/A:1013048828150</a>.</p>
                <p>Roy, A., Planetary Atmospheres, California Institute of Technology.</p>
                <p>Stone, E., Cummings, Alan C., Heikkila, Bryant C. and Lal, Nand. (2019). Cosmic ray measurements from Voyager 2 as it crossed into interstellar space, <em>Nature Astron.</em> <strong>3</strong>, pp. 1013–1018, <a href="https://doi.org/10.1038/s41550-019-0928-3">https://doi.org/10.1038/s41550-019-0928-3</a>.</p>
                <p>Zhang, X. and Lu, Y. (2019). On constraining the growth history of massive Black Holes via their distribution on the spin–mass plane, <span><em>Astrophys. J.</em></span> <strong>873</strong>, p. 101, <a href="https://doi.org/10.3847/1538-4357/ab06c6">https://doi.org/10.3847/1538-4357/ab06c6</a>.</p>
            </div>
            
        )
    }
}

