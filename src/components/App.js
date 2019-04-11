import React from "react"
import {Helmet} from "react-helmet";
import Game from "../containers/Game";

import "../../node_modules/spectre.css/dist/spectre-icons.css"
import "../../node_modules/spectre.css/dist/spectre.css"
import "./App.css"

const App = () => (
      <div>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Stadt-Land-Fluss</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no"></meta>
        </Helmet>
        <Game/>
    </div>
  )

export default App