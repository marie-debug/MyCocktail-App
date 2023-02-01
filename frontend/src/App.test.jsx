import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import { assert, expect, test } from 'vitest'

// Basic Test to make sure tests are working with vitest (The Test Runner)

test('Math.sqrt()', () => {
    expect(Math.sqrt(4)).toBe(2)
  })
  
  test('JSON', () => {
    const input = {
      foo: 'hello',
      bar: 'world',
    }
  
    const output = JSON.stringify(input)
  
    expect(output).eq('{"foo":"hello","bar":"world"}')
    assert.deepEqual(JSON.parse(output), input, 'matches original')
  })

  // Testing the html elements on the Search page (Working with js-dom and the react-library)

  test('Should render a button with text Search', () => {
    render(<Search />)
    const button = screen.getByText('Search')
    expect(button.textContent).toBe('Search')
})