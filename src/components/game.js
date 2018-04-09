import React from 'react';

import Header from './header';
import GuessForm from './guess-form';
import GuessParagraph from './guess-paragraph';
import GuessList from './guess-list';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <section>
                <Header />
                <GuessForm />
                <GuessParagraph />
                <GuessList />
            </section>
        );
    }
};