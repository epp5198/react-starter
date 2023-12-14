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
    <div>
        <h1>Resume</h1>
        <h2>Skills</h2>
        <li>XML</li>
        <li>Relax NG</li>
    </div>
);

const Projects = () => (
    <div>
        <h2>Projects</h2>
        <p>These are my projects</p>
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