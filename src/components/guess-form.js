import React from 'react';

import './guess-form.css';

export default function GuessForm(props) {
    return (
        <form> 
            {/* <label for="">Guess the number</label> */}
            <input type="text" className="text" id="userGuess" placeholder="Enter your Guess"></input>
            <input type="submit" className="button" name="submit" value="Guess Number"></input>
        </form>
    );
};