import React from 'react';

import './navigation.css';

export default function Navigation(props) {
    return (
        <nav>
            <ul className="navigation-bar">
                <li>
                    <a 
                        className="what" 
                        href="what"
                        onClick={(event) => {
                            event.preventDefault()
                            props.renderInstruction()
                        }}
                    >
                        What?
                    </a>
                </li>
                <li>
                    <a 
                        className="new" 
                        href="response"
                        onClick={(event) => {
                            event.preventDefault()
                            props.whenGameRestarts()
                        }}
                    >
                        + New Game
                    </a>
                </li>
            </ul>
        </nav>
    );
};