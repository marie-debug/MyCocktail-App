import React from "react"
import { render, screen, waitFor } from '@testing-library/react'
import App from "./App"
import Searchbox from "./components/SearchBox"

// Mock get a cocktail data

function mockCocktail({name}) {
    const [cocktail, setCocktail] = useState()
    useEffect(() => {
        fetch("http://localhost:3000/my/cocktail")
        .then(response => response.json())
        .then(data => setCocktail(data.setup))
    }, [])
}


// Unit Test Suite List

// Explicit assertion test
describe('App is running OK', () => {
    test('Should render the App component without crashing', () => {
        render(<App />)
        // screen.debug()
    })
})

// 1. Search/Home elements render

describe('Search input field renders', () => {
    test('Should render the Input field for search', () => {
        const { container } = render(<Searchbox />)
        expect(container.querySelector('input').toBeInTheDocument)
    })
})

// 2. Elements on the search page render 

describe('Render elements on the Search/Home page', () => {
    test('Should select the input element by its role', () => {
        screen.queryByRole('textarea')
    })
    test('Should render search button', () => {
        const { container } = render (<App />)
        expect(container.querySelector('Search')).toBeDefined()
    })
})

describe('Render a cocktail from mock data', () => {
    test('Should call the mockCocktail API', async () => {
        render (<App />)
        await waitFor(() => 
            expect(mockCocktail).toHaveBeenCalled())
    })
    test('Should call the mockCocktail API once', async () => {
        render (<App />)
        await waitFor(() => 
            expect(mockCocktail).toHaveBeenCalledTimes(1))
    })
})


// Unit Test Suite List (TO ADD)

// High Level Functionality Renders
// 2. Render result of a cocktail (mock data)
// 3. Render a cocktail on the Favourites page (mock data)

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
