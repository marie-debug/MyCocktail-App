import { describe, it } from 'vitest'
import { render } from '@testing-library/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 
import App from '../App'


describe("Search Page", () => {
    it("Show title - My Cocktail", () => {
        render(
            <Router>
                <App />
            </Router>
        )
    })
})

