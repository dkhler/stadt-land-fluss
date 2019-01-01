import React from "react"
import { Component } from "react"
import { Letter } from "./letter.component"

import "./game.component.css"

const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const startingSymbol = '-';

export class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentLetter: startingSymbol,
            checkedLetters: [],
        };
    }

    getUncheckedLetters() {
        return letters.filter((letter) => !this.state.checkedLetters.includes(letter));
    }

    pickRandomLetter() {
        let uncheckedLetters = this.getUncheckedLetters();

        var randomLetter = "";

        if (uncheckedLetters.length !== 0)
        randomLetter = uncheckedLetters[Math.floor(Math.random()*uncheckedLetters.length)];

        return randomLetter;
    }

    isChecked(letter) {
        return this.state.checkedLetters.includes(letter);
    }

    checkLetter(letter) {
        var newCheckedLetters = this.state.checkedLetters.slice();

        if (!newCheckedLetters.includes(letter))
            newCheckedLetters.push(letter);

        return newCheckedLetters;
    }

    handleNextClick() {
        let nextLetter = this.pickRandomLetter();  
        
        if (nextLetter) {
            this.setState({
                currentLetter: nextLetter,
                checkedLetters: this.checkLetter(nextLetter)
            });
        }
    }

    handleResetClick() {
        this.setState({
            currentLetter: startingSymbol,
            checkedLetters: []
        });
    }

    renderLetter(letter) {
        return(
            <Letter checked={this.isChecked(letter)} name={letter}/>
        );
    }

    render() {
        return (
            <div className="columns">
                <div className="column col-12">
                    <div className="nonselect text-center">
                        {letters.map((letter) => this.renderLetter(letter))}
                    </div>
                </div>
                <div className="column col-8 col-mx-auto">
                    <div class="divider divider-dark"></div>
                </div>
                <div className="column col-12 col-mx-auto nonselect mainletter text-center">
                    <Letter name={this.state.currentLetter}/>
                </div>
                <div className="column col-sm-12 col-8 col-mx-auto mt-2 text-center">
                    <div class="btn-group btn-group-block nonselect">
                            <button className="btn btn-blanko nonselect" onClick={() => this.handleNextClick()}><i class="icon icon-forward mx-2"></i>Nächster Buchstabe</button>
                            <button className="btn btn-blanko nonselect" onClick={() => this.handleResetClick()}><i class="icon icon-refresh mx-2"></i>Zurücksetzen</button>
                    </div>  
                </div>  
            </div>
      );
    }
}