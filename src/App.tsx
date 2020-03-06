import React from "react"
import welcome from '../static/images/welcome.svg'

const App: React.FC<{}> = () => {
    return (
        <div className="app">
            <img src={welcome} alt="Welcome"/>
            <div>Welcome to <span>React Boilerplate</span> 🥳🥳🥳</div>
            <div>Let's start your project by editing&nbsp;
                <span className="entry">src/App.tsx</span>
            </div>
        </div>
    )
}

export default App