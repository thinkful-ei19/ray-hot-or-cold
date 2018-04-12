import React from 'react';

import './guess-form.css';

export default function GuessForm(props) {
        return (
            <form onSubmit={(event) => {
                event.preventDefault()

                if(props.whenUserGuesses) {
                    const inputValue = event.target.userInput.value;
                    props.whenUserGuesses(inputValue);
                }
            }}> 
                <input type="text" className="text" id="userGuess" name="userInput" placeholder="Enter your Guess"></input>
                <input type="submit" className="button" name="submit" value="Guess Number"></input>
            </form>
        );
};