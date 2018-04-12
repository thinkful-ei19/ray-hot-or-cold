import React from 'react';

import Header from './header';
import GuessBody from './guess-body';
import GuessList from './guess-list';
import GuessCount from './guess-count';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            guesses: [],
            response: 'Make your Guess',
            answer: Math.floor(Math.random() * 100)
        };
    }

    userGuess(guess) {
        guess = Number(guess);
        if(guess === 'NaN') {
            throw new Error('Must enter a valid number');
        }



    }

    resetGame() {
        this.setState({
            guesses: [],
            response: 'Make your Guess',
            correctAnswer: Math.floor(Math.random() * 100)
        })
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