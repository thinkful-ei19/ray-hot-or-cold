import React from 'react';

import Navigation from './navigation';
import GameInstruction from './game-instruction';

import './header.css';

export default function Header(props) {
    return (
        <header>
            <Navigation 
                whenGameRestarts={() => props.whenGameRestarts()}
                renderInstruction={() => props.renderInstruction()}
            />
            {props.whatInstruction ? <GameInstruction renderInstruction={() => props.renderInstruction()} /> : ''}
            <h1>Hot or Cold</h1>
        </header>
    );
};