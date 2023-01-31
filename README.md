# MyCocktail-App


**Group Members**

* Marion Akinyi
* Katrina Tomaszczyk

____________________________________________________________________________________

**Important Links**

[Trello](https://trello.com/invite/b/bGaDJxU8/ATTI8ede4dc9eb69ccd7f3c83fc1213fe4b54F7075F6/t3a2-mern-app-part-a) - Product Delivery (Board is Public)

[Miro](https://miro.com/app/board/uXjVPzbXD88=/) - Virtual Whiteboard for Team Collaboration (Anyone with link can view)

[README.md Part-A](/docs/part-a/README.md) - Analysis, Architecture and Design Documentation

____________________________________________________________________________________

## Table of Contents

[Run Scripts](#scripts)

[Packages](#packages)

[Backend](#backend)
- [API Routes](#api)
- [Mongo - Atlas](#mongo)

[Frontend](#frontend)

[Project Delivery](#tracking)

[Unit Testing](#testing)

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
2. users (tba)

<img src="docs/images/mongo/collections.png" width="500">

**Post Request**

Successful POST request testing through POSTMAN

<img src="docs/images/img_routes/added_cocktail.png" width="500">

____________________________________________________________

# Frontend<a name="frontend"></a>


# Project Delivery<a name="tracking"></a>

## Trello Screenshots

**Day 1**

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

__________________________________________________________________

# Unit Testing<a name="testing"></a>

Since the Frontend was built with vite, testing is using vitest. 

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

``npm text ``

<img src="docs/images/testing/npm_test.png" width="300">


Websites:

* https://vitest.dev/
* https://testing-library.com/docs/react-testing-library/intro/

