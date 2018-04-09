import React from 'react';

import Navigation from './navigation';
import './header.css';

export default function Header(props) {
    return (
        <header>
            <Navigation />
            <h1>Hot or Cold</h1>
        </header>
    );
};