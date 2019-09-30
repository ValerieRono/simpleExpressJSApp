# A simple expressJS App
A simple ExpressJS app with REST API endpoints. The API allows one to fetch a list of users from the JSON file. The API also allows one to fetch a specific user from the JSON file.

---
## Requirements

For development, you will only need Node.js*, installed in your environment.

Ensure no other process is running on port 3000

## Install

    $ git clone https://github.com/ValerieRono/simpleExpressJSApp.git
    $ cd simpleExpressJSApp
    $ npm install

## Running the project

    $ npm start

## Testing the application

    $ use postman or any browser
    $ hit/visit http://localhost:3000
    
    
| Feature | Endpoint | Response |
| :--- | :--- | :--- |
| Get all users   | `http://localhost:3000/api/v1/users`     | response status: 200, returns A list of all users in the JSON file    |
| Get one user     | `http://localhost:3000/api/v1/users/:id`       | response status: 200, returns a user whose id corresponds to the id in the request or response status: 400 if user does not exist      |


*Visit [this site](https://nodejs.org/en/download/) to download and install node on your system