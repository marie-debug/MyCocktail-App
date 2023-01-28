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

[Backend](#backend)

1. [Packages](#be-packages)


[Frontend](#frontend)

[Project Delivery](#tracking)

# Backend<a name="backend"></a>

* Added a package.json / package-lock.json folder to ``MyCocktail-App`` 
* Updated package.json script

To start server from MyCocktail-App

``npm run server`` 

This reads backend/app.js

! Also includes nodemon 

## Packages<a name="be-packages"></a>

* express
* dotenv
* mongoose
* colors
* nodemon -D

## API Routes

**Function:** Ability to add your own cocktails to your list (My Cocktails - Favourites). This includes the ability to see all cocktails in the list, add a new cocktail, update an existing cocktail and delete one from the list. (CRUD functionality)

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

## Mongo Atlas

**Project Name:** MyCocktail-App

**Cluster Name:** MyCocktail-App

**Collections:** 
1. my-cocktails
2. users

<img src="docs/images/mongo/collections.png" width="500">

____________________________________________________________

# Frontend<a name="frontend"></a>

## Packages

Packages used for the Frontend

* vite
* .dotenv
* react-router-dom
* react-icons
* axios
* toastify
* boostrap


## To run the frontend

```
cd frontend

npm install

npm run dev

```

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
