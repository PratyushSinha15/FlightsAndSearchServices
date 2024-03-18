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

## Database Design

    - Airplane Table
        - ID 
        - Model_Number
        - Capacity

    - Flight Table
        - ID
        - departure_city_id
        - destination_city-id
        - departure
        - arrival

    - City Table
        - ID
        - Name


    - Airport
        - ID
        - name
        - city_id
        - address

    ### Relationship between tables

    1. 1 city can have multiple airports but 1 airports belongs to one city
    2. Form 1 airport many flights can fly but 1 flight will be flying from only 1 airport
    3. A flight belong to an airplane but one airplane can be used in multiple flights

    




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