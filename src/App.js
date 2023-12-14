import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const Home = () => (
    <div>
        <h2>Home</h2>
        <p>This is my portfolio website home page</p>
    </div>
);

const Photos = () => (
    <div>
        <h2>Photos</h2>
        <p>Photographs taken by me</p>
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
        <h2>Work Experience</h2>
        	<li>My Care Now, DuBois, PA 						August 2018-Present</li>
        	<p>Work painting rooms along with maintenance matters including patching holes in walls and replacing light fixtures</p>
        	<li>Big Lots, DuBois, PA 						June 2022-August 2022</li>
        	<p>Worked as a store associate and cashier during summer break</p>
        	<p>Learned teamwork and communication skills</p>
        	<li>Christ the King Manor, DuBois, PA 					June 2017-August 2018</li>
        	<p>Worked as a painter and maintenance worker painting rooms, repairing walls, and assisting with other maintenance matters</p>
        <p>Learned problem solving and teamwork skills</p>

    </div>
);

const Projects = () => (
    <div>
        <h2>Projects</h2>
        <p>These are my projects</p>
        <h3>The Simpsons Project</h3>
        <li><a href= "https://epp5198.github.io/TheSimpProject/">The Simpsons Project</a></li>
        <li>A group project from myself and two other student using HTML, Python, XML, Relax NG to see how 'The Simpson' has changd over time</li>
        <h3>Letters from Europe</h3>
        <li><a href= "https://fkb5105.github.io/Letters-from-Europe-FA2022/about.html">Letters from Europe</a></li>
        <li>A group project from myself and three other student using XML and XSLT to digitize Mary Behrend's journel</li>
    </div>
);

const Navbar = () => (
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/photos">Photos</Link>
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