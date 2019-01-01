import React from "react"
import { Component } from "react"
import "./letter.component.css"

export class Letter extends Component {
    render() {
        let classes = "letter mx-1";
        if (this.props.checked)
            classes += " checked";

        return (
            <div className={classes}>{this.props.name}</div>
        );
    }
}