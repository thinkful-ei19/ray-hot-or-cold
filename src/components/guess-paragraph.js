import React from 'react';

import './guess-paragraph.css';

export default function GuessParagraph(props) {
    return (
        <p>
            "Guess #"
            <span id="count">18</span>
            "!"
        </p>
    );
};