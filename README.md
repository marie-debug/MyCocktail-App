# MyCocktail-App


**Group Members**

* Marion Akinyi
* Katrina Tomaszczyk

____________________________________________________________________________________

**Important Links**

[Railway Deployment](https://mycocktail.up.railway.app/) - My Cocktail App in Production

[GitHub Repository](https://github.com/marie-debug/MyCocktail-App) 

[Trello](https://trello.com/invite/b/bGaDJxU8/ATTI8ede4dc9eb69ccd7f3c83fc1213fe4b54F7075F6/t3a2-mern-app-part-a) - Product Delivery (Board is Public)

[Miro](https://miro.com/app/board/uXjVPzbXD88=/) - Virtual Whiteboard for Team Collaboration (Public Link)

[README.md Part-A](/docs/part-a/README.md) - Analysis, Architecture and Design Documentation

[Testing Documentation](https://docs.google.com/spreadsheets/d/1U3pMThnGplNzZ5qum9VkcPLLFF5LL1UI-itZlAt9ZiU/edit#gid=609410239) - Deveopment and Production Testing
____________________________________________________________________________________

## Table of Contents

[Run Scripts](#scripts)

[Packages](#packages)

[Backend](#backend)
- [API Routes](#api)
- [Mongo - Atlas](#mongo)

[Frontend](#frontend)

[Project Delivery](#tracking)

[Testing](#testing)
- [Unit Testing](#unit-testing)

# Run Scripts<a name="scripts"></a>

To start the backend and frontend, run the following commands. 

**Folder: MyCocktail-App**

Backend

``npm run backend``

**Note:** Includes nodemon 

Example of Backend Script running:

<img src="docs/images/be_script.png" width="200">


Frontend

``npm run frontend``

Example of Frontend Script running: 

<img src="docs/images/fe_script.png" width="200">


## Packages<a name="packages"></a>

**Backend Packages**

* express
* dotenv
* mongoose
* nodemon -D

**Frontend Packages**

* vite
* .dotenv
* react-router-dom
* react-icons
* axios
* toastify
* boostrap

# Backend <a name="backend"></a>

## API Routes<a name="api"></a>

**Function:** Ability to save a cocktail to your list (Favourites). This includes the ability to see all cocktails in the list, add a new cocktail, update an existing cocktail and delete one from the list. (CRUD functionality)

**Route Folder:**  myCocktail_routes.js

**GET** http://localhost:3000/my/cocktail

**POST** http://localhost:3000/my/cocktail

**PUT** http://localhost:3000/my/cocktail/name

**DELETE** http://localhost:3000/my/cocktail/name

## Testing Screenshots of Routes

<img src="docs/images/img_routes/get_cocktail.png" width="200">
<img src="docs/images/img_routes/post_cocktail.png" width="200">
<img src="docs/images/img_routes/put_cocktail.png" width="200">
<img src="docs/images/img_routes/delete_cocktail.png" width="200">

## Mongo Atlas<a name="mongo"></a>

**Project Name:** MyCocktail-App

**Cluster Name:** MyCocktail-App

**Collections:** 
1. my-cocktails
2. users (TBA - Next Iteration)

<img src="docs/images/mongo/collections.png" width="500">

**Post Request**

Successful POST request testing through POSTMAN

<img src="docs/images/img_routes/added_cocktail.png" width="500">

__________________________________________________________

# Frontend<a name="frontend"></a>

* Add images here of testing and screenshots of FE


# Project Delivery<a name="tracking"></a>

Every Monday, Wednesday and Friday a Team catch up:
* Walk the Trello board (discuss in-progress, blocked, finished)
* Discuss any feedback, improve on processes or share any knowledge
* Talk about what is next on the list to do

<img src="docs/images/trello/week1.png" width="500">
<img src="docs/images/trello/week2.png" width="500">

## Trello Screenshots

**Week 1: Day 1**

* Start with a Team catch up 
* Create a Repository
* Create folder structures for Backend/Frontend
* Install dependencies

<img src="docs/images/trello/day1.png" width="500">

**Day 3** 

* Challenges and steep learning curve to get the React Frontend working
* Success on getting a payload 
* After investigation with better payload data, the api we are using is api ninja
* A few challenges in learning to use git collaborately. Working well now.

<img src="docs/images/trello/day3.png" width="500">

<img src="docs/images/mw_day3.png" width="200"> <img src="docs/images/mw_day3_nav.png" width="200">

**Day 5**

* Public Holiday on Thursday (Australia Day) 
* Finishing up on Search functionality in React
* Seperated SearchBox as a component 
* Styling updated 

<img src="docs/images/design_inspiration.png" width="300">

<img src="docs/images/dt_day5.png" width="300">

___________________________________________________________

**Week 2 - Day 3**

* successfully deployed the app to Railway! https://mycocktail.up.railway.app/
* Review status/ requirements in Trello - update the board 
* Review user functionality and set next tasks 
* Unit Testing - vitest / jsdom 
* Production testing

**Day 5**

* FE and BE unit tests 
* Another round of testing in Development and Production
* Add success toast for adding a cocktail to favourites 
* Finding other smaller tweaks to improve the user experience
* Add a delete/ remove functionality for Favourites (user can remove a cocktail from their list)

<img src="docs/images/trello/w2_day5.png" width="500">
___________________________________________________________

# Testing<a name="testing"></a>

[Testing Spreadsheet](https://docs.google.com/spreadsheets/d/1U3pMThnGplNzZ5qum9VkcPLLFF5LL1UI-itZlAt9ZiU/edit#gid=609410239) - Public Link

The above attachment includes testing of:
* Development throughout proces
* Testing of Production once deployed and after significant changes 

<img src="docs/images/testing/dev_test_1Feb.png" width="500">


# Unit Testing<a name="unit-testing"></a>

Since the Frontend was built with vite, testing is with vitest. 

**Packages**

* vitest
* jsdom
* @testing-library/react
* @testing-library/react-hooks / --legacy-peer-deps
* @testing-library/user-event
* @testing-library/jest-dom 

Note: Installed as Development dependencies

``npm i -D ...``

**Configuration**

* Add test information to vite.config.js

<img src="docs/images/testing/vite_setup.png" width="300">

* Updated package.json script

Under scripts

``"test":"vitest"``

* To test run 

``npm test ``

<img src="docs/images/testing/npm_test.png" width="300">


Websites:

* https://vitest.dev/
* https://testing-library.com/docs/react-testing-library/intro/

