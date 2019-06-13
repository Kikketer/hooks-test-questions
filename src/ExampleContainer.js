import React, { useEffect } from 'react'
import ExampleView from './ExampleView'

const ExampleContainer = ({ onSomeBusinessDone, iHaveMounted }) => {
  useEffect(() => {
    // An example of a "on mount" style effect that we may need to test
    // Grab data, do some initial logic whatever, but test that I call a prop
    // within this mount call
    iHaveMounted()
  }, [])

  const onDoSomeBussinessLogic = (eventData = {}) => {
    // Do something with the data perhaps
    eventData.whoa = true
    onSomeBusinessDone(eventData)
  }

  return <ExampleView onSomething={onDoSomeBussinessLogic} />
}

export default ExampleContainer
