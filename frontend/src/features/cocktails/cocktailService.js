import axios from 'axios'

const API_URL = 'my/cocktails'

// Create a new cocktail
const addCocktail = async (formData) => {
    const response = await axios.post(API_URL, formData)

    if (response.data) {
        localStorage.setItem('cocktails', JSON.stringify(response.data))
    }

    return response.data
}

const cocktailService = {
    addCocktail
}
export default cocktailService