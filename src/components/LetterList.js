import React from "react"
import Letter from "./Letter"

const LetterList = ({letters}) => (
    <div className="nonselect text-center">
        {letters.map((letter) => (
            <Letter key={letter.id} {...letter} />
        ))}
    </div>
)

export default LetterList