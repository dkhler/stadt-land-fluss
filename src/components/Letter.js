import React from "react"
import "./Letter.css"

const Letter = ({checked, name}) => (
    <div className={'letter mx-1 ' + (checked ? 'checked' : '')}>{name}</div>
)

export default Letter