import React from "react"
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
      <div>{selected && <p>{selected?.content}</p>}</div>
      <button onClick={handleGetName}>Get Name</button>
    </div>
  )
}

export default App
