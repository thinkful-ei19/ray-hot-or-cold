import React from 'react';

import GuessForm from './guess-form';

import './guess-body.css';

export default function GuessBody(props) {
    return (
        <section>
            <h2 id="response">{props.response}</h2>
            <GuessForm  whenUserGuesses={guess => props.whenUserGuesses(guess)} />
        </section>
    );
}
