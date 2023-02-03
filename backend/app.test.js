import app from './app.js'
import request from 'supertest'
import CocktailModel from './models/cocktailModel.js'


describe("when user saves cocktail", () => {

    //should respond with a 200 status code
    it("should respond with a 201 status code if item is not found", async () => {

        const body = {
            name: "someNewcocktail",
            ingredient: ["cocktail", "test"],
            instructions: "test instructions",
            id: 346
        }

        await CocktailModel.findOneAndDelete(body)

        const response = await request(app).post('/my/cocktail').send(body)
        expect(response.status).toBe(201)
    })

    it("should respond with a 200 status code if item is found", async () => {

        const body = {
            name: "somecocktail",
            ingredient: ["cocktail", "test"],
            instructions: "test instructions",
            id: 345
        }

        await request(app).post('/my/cocktail').send(body)
        const response = await request(app).post('/my/cocktail').send(body)

        expect(response.status).toBe(200)
    })


})

describe("Get cocktail list", () => {
    let response


    beforeEach(async () => {
        response = await request(app).get('/my/cocktail')
        expect(response.status).toBe(200)
        expect(response.headers['content-type']).toMatch(/json/i)
    })



    it('Has an element with the correct data structure and data', () => {
        response.body.forEach(el => {
            expect(el._id).toBeDefined()
            expect(el.name).toBeDefined()
            expect(el._id.length).toBe(24)
            expect(el.ingredients).toBeDefined()
            expect(el.instructions).toBeDefined()
        })

    })

    it('Should return an array', () => {
        expect(response.body).toBeInstanceOf(Array)

    })


})




