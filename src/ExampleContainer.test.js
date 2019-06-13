import React from 'react'
import renderer, { act } from 'react-test-renderer'
import ExampleContainer from './ExampleContainer'

// I need to mock children since shallow doesn't run any effects
// Say I need to test a "mount" effect
jest.mock('./ExampleView', () => props => <div data-id="ExampleView" {...props} />)

// So tests should test incoming data and validate outcoming data
describe('ExampleContainer', () => {
  test('should match snapshot', () => {
    let result
    act(() => {
      result = renderer.create(<ExampleContainer iHaveMounted={() => {}} onSomething={() => {}} />)
    })
    // Snapshot test has a `<div data-id="ExampleView"`, so we aren't doing
    // some excessive deep rendering when all we should be testing is this component
    // react-test-renderer/shallow did not trigger the useEffect (below) so we use this
    // technique to shallwo render but still trigger all the effects
    expect(result).toMatchSnapshot()
  })

  test('should call iHaveMounted on mount', () => {
    // This just tests to see if a prop is called on mount
    // In real life we may check some params sent back or validate that a listener
    // was engaged (and properly removed on unmount)
    const mounted = jest.fn()
    act(() => {
      renderer.create(<ExampleContainer iHaveMounted={mounted} />)
    })
    expect(mounted).toHaveBeenCalled()
  })

  test('when a child does something expect the prop function to have `whoa`', () => {
    const onSomething = jest.fn()
    act(() => {
      renderer.create(<ExampleContainer onSomething={onSomething} iHaveMounted={() => {}} />)
    })
    // Somehow trigger the child's action... not sure how
    // Urm....
    expect(onSomething).toHaveBeenCalledWith({ clicked: true, whoa: true })
  })
})
