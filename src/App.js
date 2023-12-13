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
        <h2>Resume</h2>
        <p>Resume</p>
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
                </Routes>
            </div>
        </Router>
    );
};

export default App;