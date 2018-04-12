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
            answer: Math.floor((Math.random() * 100) + 1),
            whatInstruction: false
        };
    }

    userGuess(guess) {
        guess = Number(guess);
        if(guess === 'NaN') {
            throw new Error('Must enter a valid number');
        }

        const answerDifference = Math.abs(this.state.answer - guess);
        let response;

        if(answerDifference >= 40) {
            response = 'You are Super Cold';
        } else if(answerDifference >= 30) {
            response = 'You are Cold';
        } else if(answerDifference >= 20) {
            response = 'You are Warm';
        } else if(answerDifference >= 15) {
            response = 'You are Hot!';
        } else if(answerDifference >= 5) {
            response = 'You are SUPER HOT!!';
        } else {
            response = 'You are CORRECT!!';
        }
        
        this.setState({
            guesses: [...this.state.guesses, guess],
            response
        });
    }

    resetGame() {
        this.setState({
            guesses: [],
            response: 'Make your Guess',
            correctAnswer: Math.floor((Math.random() * 100) + 1)
        });
    }

    setInstruction() {
        this.setState({
            whatInstruction: !this.state.whatInstruction
        });
    }


    render() {
        const guesses = this.state.guesses;
        const response = this.state.response;
        const count = guesses.length;

        return (
            <section>
                <Header 
                    renderInstruction={() => this.setInstruction()}
                    whatInstruction = {this.state.whatInstruction}
                    whenGameRestarts={() => this.resetGame()}
                />
                <GuessBody 
                    response={response}
                    whenUserGuesses={guess => this.userGuess(guess)}
                />
                <GuessCount count={count} />
                <GuessList guesses={guesses} />
            </section>
        );
    }
};