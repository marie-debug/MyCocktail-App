import App from "./App"
import '@testing-library/jest-dom'
import { render } from "@testing-library/react"


// Search Page 
// 1. Search page displays
// 2. input field works
// 3. search button works

// Results
// 1. Results display from search 
// 2. Add to Favoutes works

// Favourites
// 1. Favourites page displays
// 2. Saved cocktails display

// Components - Header / Footer
// 1. Header displays 
// 2. Navigation in header works (links work)
// 3. Footer displays

describe('Search page displays', () => {
    it('Shows the search page Hero Text - It\s cocktail hour!', () => {
    expect(container.querySelector('h1')).toHaveTextContent('It\s cocktail hour!')
    })
})

