import React from "react"
import ReactDOM from "react-dom"
import Counter from "./components/counter"
import Parent from "./components/Receive.js"

ReactDOM.render(<div>
{/*<Counter ></Counter>*/}
<Parent></Parent>
</div>,document.getElementById("app"))