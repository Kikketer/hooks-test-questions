import React from 'react'

const ExampleView = ({ onSomething, iHaveMounted }) => {
  const onDoSomething = () => {
    // Button pressed, let's do something random
    const eventData = { clicked: true }
    onSomething(eventData)
  }

  return (
    <>
      <h1>Hi there</h1>
      <button onClick={onDoSomething}>Click Here</button>
    </>
  )
}

export default ExampleView
