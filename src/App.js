import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Home = () => (
    <div>
        <h2>Home</h2>
        <p>Welcome to the home page!</p>
    </div>
);

const About = () => (
    <div>
        <h2>About</h2>
        <p>This is the about page. It provides information about my website.</p>
    </div>
);

const Navbar = () => (
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
        </ul>
    </nav>
);

const App = () => {
    const [count, setCount] = useState(0);

    return (
        <Router>
            <div>
                <Navbar />
                <hr />
                <Routes>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                </Routes>
                <div>
                    <p>Count: {count}</p>
                    <button onClick={() => setCount(count + 1)}>Increment Count</button>
                </div>
            </div>
        </Router>
    );
};

export default App;