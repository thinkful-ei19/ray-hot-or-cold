import React from 'react';

import GuessForm from './guess-form';

import './guess-body.css';

export default function GuessBody(props) {
    return (
        <section>
            <h2 id="feedback">{props.feedback}</h2>
            <GuessForm />
        </section>
    );
}
