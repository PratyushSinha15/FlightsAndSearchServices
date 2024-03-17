# Welcome to Flights Service

## Project Setup
    - clone the project on your local
    - Execute `npm install` on the same path as of your root directory of teh downloaded project
    - Create a `.env` file in the root directory and add the following environment variable
        - `PORT=3000`
    - Inside the src/config folder create a new file config.json and then add the following piece of json
    ```
    {
    "development": {
        "username": <YOUR_DB_LOGIN_NAME>,
        "password": <YOUR_DB_PASSWORD>,
        "database": "Flights_Search_DB_DEV",
        "host": "127.0.0.1",
        "dialect": "mysql"
    }
    }
    ``` 





/
    - src/
        index.js //server
        models/
        controllers/
        middlewares/
        services/
        utils/  here we will include funtion or code based which are common or commonly used  in our projects
        config/ here we store our database configurations or AWS configurations
        reppository/
    
    -tests/ [later]