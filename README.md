# Guide Classes

## *********** Client setup *************

## Client
    1.  setup project. Initialise with NPM.
        `$ npm init -y`
    2.  Manual setup(next.js - Docs) : to install 'next' , 'react' , 'react-dom'
        `$ npm install next react react-dom `
        `$ npm install next@latest react@latest react-dom@latest`

        2.2 adding "scripts" in package.json... as directed by the Docs

### pages
    Just create the component and return. It'll route on its own. As it is already present in the "pages" folder.

    3.  Create a 'pages' directory [It's required for the next.js to work.]
        fill in with the components
            3.1 index.js is default.
            3.2 rest the pages will be routed as "localhost:3000/page_name"

    4. `$ npm run dev`  : It will render at "localhost:3000"


#### _app.js   ^
    For the things that we want to make it avialable for the entire App.   
        *    Next.js uses the App Component to initialize pages.
        *   This app component runs before any page gets ready for users to see.
        *   This is a perfect place to add your bootstrap css so that it is abailable for the entire app
        *    IMPORTANT - restart the server.

        5. create "_app.js" : a Next.js internal file. To override it.
            usually for Bootstrap css

        6. `$ npm i bootstrap`
        7. `$ npm i antd` : Ant Design - similar to MUI (complicated) 


        8. We have included the libraries we installed just now. In _app.js file.
            8.1 : Now where ever we want to use the css. We can just include the className in the "className" tag. As in Bootstrap in HTML tags.

            8.2 : 

### public
    Folder for CSS or images work, etc.

        9. css folder. => create styles.css   : for the custom-css.
            & import it to "_app.js"

        

### components
    folder for components (not like pages in "page" for the routing purpose)

        10. TopNav.js : we want to make it available for the entire 

            10.2 : add the component to the _app.js file in "pages". So that as we need TopNav in every page of the website commonly.


#### Using the "antd" ant-design & "Link" from "next/link" (next.js)

            10.3 : we've used  <Menu><Item><Link>...</Link></Item></Menu>
                for the suitable way of using the UI



        11. Completed the "Register" page from 'pages/register.js' 
     












## *********** Server setup *************

## server

    1. setup server. Initialise with NPM.
        `$ npm init -y`

    2. installing the dependencies requiered for the Backend.
        `$ npm i express mongoose cors dotenv nodemon jsonwebtoken bcrypt morgan`

            express     : to build server. 
            mongoose    : to interact with MongoDB
            cors        : to communicate front-end & back-end [client & server]
            dotenv      : to use "Environment variables" 
            nodemon     : Helps in continuously running the server.
        xxx    esm         : Help in Import/Export syntax. (not availabe in node)
            jsonwebtoken : to create tokens, that will exchange between the client-server  for authentication.
            bcrypt      : to hash the password.         user's password => [Hash] => DataBase
            morgan      : see getting what kind of endpoint we're getting request. We get all the endpoint in the console. HELPs in Dubugging.


### server.js
    The entry point of our server. 
    for all the routes/controller functions/etc . So all of them are imported in this file.
    This will be the entry point. This file will be executed.

        1. package.json : adding "scripts" in package.json... as follow 
                            `"start" : "nodemon server.js"`

                        adding "type": "module" parallel to "scripts": ...


        2. server.js^ : We right initial server setup

        3. `$ npm start` 

### 






^ : In a file means, the file contains 