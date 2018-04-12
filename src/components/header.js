import React from 'react';

import Navigation from './navigation';
import GameInstruction from './game-instruction';

import './header.css';

export default function Header(props) {
    return (
        <header>
            <Navigation />
            {/* <GameInstruction /> */}
            <h1>Hot or Cold</h1>
        </header>
    );
};