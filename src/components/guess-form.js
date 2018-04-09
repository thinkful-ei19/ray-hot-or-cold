import React from 'react';

import './guess-form.css';

export default function GuessForm() {
    return (
        <form> 
            <label for="">Guess the number</label>
            <input type="text" placeholder="Enter your Guess"></input>
            <input type="submit" class="button" name="submit"></input>
        </form>
    );
};