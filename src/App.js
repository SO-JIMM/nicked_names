import Button from "react-bootstrap/Button"
import React, { useState } from "react"
import "./App.css"
import names from "./names.json"
import ButtonGroup from "react-bootstrap/ButtonGroup"

const JIM = "Jim Grace"
const MEG = "Meg Whittaker"
const MARTY = "Marty Lawrence"
const BLAIR = "Blair Martin Hall"

function App() {
  const [selected, setSelected] = useState(null)
  const [answer, setAnswer] = useState(null)
  const refresh = () => {
    setSelected(null)
    setAnswer(null)
  }
  const handleGetName = () => {
    refresh()
    let rdm = Math.floor(Math.random() * names.length)
    setSelected(names[rdm])
  }

  const handleAnswer = (e) => {
    setAnswer(e.target.value)
  }
  return (
    <div className='App  bg-secondary bg-gradient bg-opacity-50'>
      {/* <div className='d-flex p-1 align-items-center flex-column'> */}
      <div className='App__Grid bg-light App__Body py-3 px-1'>
        <div className='d-flex p-1 align-items-center justify-content-center'>
          {selected && <h3 className='text-center'>{selected?.content}</h3>}
        </div>
        <div>
          {selected && (
            <div className='d-flex p-1 flex-column align-items-center justify-content-center'>
              <h6 className='text-center'>Whose Name?</h6>
              <ButtonGroup>
                <Button onClick={handleAnswer} value={JIM}>
                  Jim
                </Button>
                <Button onClick={handleAnswer} value={BLAIR}>
                  Blair
                </Button>
                <Button onClick={handleAnswer} value={MEG}>
                  Meg
                </Button>
                <Button onClick={handleAnswer} value={MARTY}>
                  Marty
                </Button>
              </ButtonGroup>
            </div>
          )}
        </div>
        <div className='d-flex p-1 align-items-center text-center justify-content-center'>
          {answer && selected && (
            <div
              className={`${
                answer === selected?.sender_name
                  ? "bg-success p-2 text-dark text-center bg-opacity-25"
                  : "bg-danger text-center p-2 text-dark bg-opacity-25"
              } w-50`}>
              {answer === selected?.sender_name ? "Correct" : "Incorrect"}
            </div>
          )}
        </div>

        <div className='d-flex p-1 align-items-center justify-content-center'>
          <Button onClick={handleGetName}>Get Nickname</Button>
        </div>
      </div>
    </div>
  )
}

export default App
