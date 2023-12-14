import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


const Home = () => (
    <div>
        <h2>Home</h2>
        <p>This is my portfolio website home page</p>
    </div>
);


import APC_0062 from '../assets/APC_0062.jpg';
import IMG_4271 from '../assets/IMG_4271.HEIC';
import IMG_5008 from '../assets/IMG_5008.HEIC';
import IMG_5093 from '../assets/IMG_5093.jpg';
import IMG_5614 from '../assets/IMG_5614.HEIC';
import IMG_6257 from '../assets/IMG_6257.HEIC';
const Photos = () => (
    <div>
        <h2>Photos</h2>
        <p>Photographs taken by me</p>
        <img src={APC_0062.jpg} alt='Water flowing over rocks' />
        <img src={IMG_4271.HEIC} alt='Mountain view from a ski hill' />
        <img src={IMG_5008.HEIC} alt='Jelly fish in a tank' />
        <img src={IMG_5093.jpg} alt='Sunset over a lake' />
        <img src={IMG_5614.HEIC} alt='Sunset over trees' />
        <img src={IMG_6257.HEIC} alt='Sunrise' />
    </div>

);



const Resume = () => (
    <div style={{ textAlign: 'center' }}>
        <h1>Resume</h1>
        <h2>My Links</h2>
        <h3>Github</h3>
        <li>https://github.com/epp5198</li>
        <h3>Linkedin</h3>
        <li>www.linkedin.com/in/egan-peck</li>
        <h2>Skills</h2>
        <a>
        <h3>Coding</h3>
        <li>XML</li>
        <li>Relax NG</li>
        <li>HTML</li>
        <li>React</li>
        <h3>Digital Art</h3>
        <li>Adobe Illustrator</li>
        <li>Adobe Photoshop</li>
        <li>Adobe Premier Pro</li>
        <li>Adobe Subject 3D Stager</li>
        </a>
        <h2>Related Courses</h2>
        <li>Introduction to Digital Humanities</li>
        <li>Intro to Photography</li>
        <li>Text Encoding</li>
        <li>Text Analysis</li>
        <li>Special Topics- Animation</li>
    </div>
);

const Projects = () => (
    <div>
        <h2>Projects</h2>

        <h3>The Simpsons Project</h3>
        <li><a href= "https://epp5198.github.io/TheSimpProject/">The Simpsons Project</a></li>
        <li>A group project from myself and two other student using HTML, Python, XML, Relax NG to see how 'The Simpson' has changd over time</li>
        <h3>Letters from Europe</h3>
        <li><a href= "https://fkb5105.github.io/Letters-from-Europe-FA2022/about.html">Letters from Europe</a></li>
        <li>A group project from myself and three other student using XML and XSLT to digitize Mary Behrend's journal</li>
    </div>
);

const Navbar = () => (
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/photos">Gallery</Link>
            </li>
            <li>
                <Link to="/resume">Resume</Link>
            </li>
            <li>
                <Link to="/projects">Projects</Link>
            </li>
        </ul>
    </nav>
);

const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <hr />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/photos" element={<Photos />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/projects" element={<Projects />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;