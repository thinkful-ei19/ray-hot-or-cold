import React from 'react';

import Header from './header';
import GuessBody from './guess-body';
import GuessList from './guess-list';
import GuessCount from './guess-count';

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
                <GuessBody />
                <GuessCount count={3} />
                <GuessList />
            </section>
        );
    }
};