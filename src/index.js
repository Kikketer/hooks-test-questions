import React from 'react'
import ReactDOM from 'react-dom'
import ExampleContainer from './ExampleContainer'

import './styles.css'

function App() {
  return (
    <div className="App">
      <ExampleContainer onSomeBusinessDone={() => {}} iHaveMounted={() => {}} />
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
