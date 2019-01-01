import React from "react"
import { Game } from "../components/game.component"
import {Helmet} from "react-helmet";

import "../../node_modules/spectre.css/dist/spectre-icons.css"
import "../../node_modules/spectre.css/dist/spectre.css"
import "./index.css"

export default () => (
      <div>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Stadt-Land-Fluss</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no"></meta>
        </Helmet>
        <div className="container grid-xl content p-2">
            <Game/>
        </div>
      </div>
  )