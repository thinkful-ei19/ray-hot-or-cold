import React from 'react';

import './navigation.css';

export default function Navigation(props) {
    return (
        <nav>
            <ul className="navigation-bar">
                <li>
                    <a href="">What?</a>
                </li>
                <li>
                    <a href="">+ New Game</a>
                </li>
            </ul>
        </nav>
    );
};