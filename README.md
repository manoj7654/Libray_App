
# Library App

The library app, built with Node.js, Express, MongoDB, and TypeScript, offers a digital platform for efficient management and access to a library's book collection. Users can create accounts, search for books by various criteria, and view comprehensive details such as availability and borrowing history. The app enables users to place holds on books that are currently checked out, receiving notifications when they become available. Administrators, with enhanced privileges, can effortlessly add new books, update information, manage user accounts, and monitor borrowing activity. This app streamlines library operations, enhancing user experience, and facilitating effective book management in a digital environment.

## Features

 * Users can register here for creating book
* Implemented Role-Based-Access-Control
* Users can create book they must have role CREATOR,VIEWER
* Users can see all the books and also created by them 
* Users can also see created less than 10 minutes and greater than 10 minutes


## Installation

1. Clone the repository:

      git clone <repository_url>

     

# Install the dependencies:

     cd Library_App
     npm install

            "dependencies": {
            "bcrypt": "^5.1.0",
            "cookie-parser": "^1.4.6",
            "dotenv": "^16.3.1",
            "express": "^4.18.2",
            "jsonwebtoken": "^9.0.1",
            "mongoose": "^7.3.2",
            "nodemon": "^2.0.22",
            "ts-node": "^10.9.1",
            "typescript": "^5.1.6"
        },

# Set up environment variables:
 * Create a .env file in the root directory of the project and add the following variables:


        port= Your port Number
        mongoUrl= Your mongoDb Url // for connecting to mongodb database

        key= your secret_key   // for generating jwt token
       

# Start the server:

     nodemon index.ts
The server will start running on the specified port.

# API Endpoint

1. User Endpoints 

   `Register`

    * method : POST
    * Endpoint : /register
    * Request body:

                    {
                "name": "abc",
                "email": "abc@example.com",
                "password": "abc",
                "role": ["CREATOR","VIEWER","VIEW_ALL"]
                            }

    * Response : If user is not register before then it will register successfully other wise throw an error user already exist.

    `Login`
    
   Log in for  existing user.
   * method : POST
   * Endpoint : /login
   * Request body :
     
            {
         "email": "abc@example.com",
          "password": "1234"
         }

3. Book Endpoints

   `Create Book`
    
    * method : POST
    * Endpoint : /books
     * Authentication : User need to login first then they can add book and also users role should be CREATOR and VIEWER.
    * Request body : 
      {
        "title": "The Book Title",
        "author": "Author Name"
        }
      
    * Response:

      200 OK: Book created successfully.
      
 
   
    `Get Books`
   * Get all the books created by VIEWER Requires the user to have the "VIEWER" role.
 * method : GET
    * Endpoint : /books
     * Authentication : User need to login first then they can get book.
    * Response:

      200 OK: Books retrieved successfully.
      


   `Get All Books `
   * Get all the books. Requires the user to have the "VIEW_ALL" role.
    * method : GET
    * Endpoint : /books
     * Authentication : User need to login first then they can get book
*Request Headers
Authorization: Bearer JWT token
*Query Parameters
old (optional): Set to "1" to filter books created 10 minutes ago and more.
new (optional): Set to "1" to filter books created less than 10 minutes ago.
   
    * Response:
      200 OK: Books retrieved successfully.
      

# Middleware

 ## authentication

Middleware function to authenticate requests. It checks for a valid JWT token in the Authorization header.

## authorization

Middleware function to authorise requests as per userrole.

## logger

Middleware function to to store all the request and methods which is requested by the users 


## Database Connection
The application uses MongoDB as the database. The connection to the database is established in the config/db.ts file. Make sure to provide the correct MongoDB connection URL in the .env file.

