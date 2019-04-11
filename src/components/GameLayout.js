import React from "react"
import Letter from './Letter'
import LetterList from './LetterList'
import "./GameLayout.css"

const GameLayout = ({letters, activeLetter, onNextClick, onResetClick}) => (
    <div className="container">
        <div className="columns">
            <div className="column col-12">
                <LetterList letters={letters}/>
            </div>
            <div className="column col-8 col-mx-auto">
                <div className="divider divider-dark"></div>
            </div>
            <div className="column col-12 col-mx-auto nonselect text-center active-letter">
                <Letter checked={false} name={activeLetter}/>
            </div>

            <div className="column col-sm-12 col-8 col-mx-auto mt-2 text-center">
                <div className="btn-group btn-group-block nonselect">
                        <button className="btn btn-blanko nonselect" onClick={() => onNextClick(letters)}><i className="icon icon-forward mx-2"></i>Nächster Buchstabe</button>
                        <button className="btn btn-blanko nonselect" onClick={() => onResetClick()}><i className="icon icon-refresh mx-2"></i>Zurücksetzen</button>
                </div>
            </div>
        </div>
    </div>
)

export default GameLayout