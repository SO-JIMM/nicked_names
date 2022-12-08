import React from "react"
import logo from "./logo.svg"
import "./App.css"
import names from "./names.json"

function App() {
  const [selected, setSelected] = React.useState(null)
  const handleGetName = () => {
    let rdm = Math.floor(Math.random() * names.length)
    setSelected(names[rdm])
  }
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <div>{selected && <p>{selected?.content}</p>}</div>
        <button onClick={handleGetName}>Get Name</button>
      </header>
    </div>
  )
}

export default App
