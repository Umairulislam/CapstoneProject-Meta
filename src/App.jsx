import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

const App = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold underline">Hello world!</h1>
            <FontAwesomeIcon icon={faGithub} className="icon" />
        </div>
    )
}

export default App
