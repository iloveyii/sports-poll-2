Sports Poll
===========

This application is used to vote for a favourite team in various sports.
The user first registers and then login to vote for his/her favourite team from a random set of events in a particular sport at a time.

![screenshot](https://github.com/iloveyii/sports-poll-2/blob/master/frontend/screenshot.png)
## Technology stack
   * Node
   * Sequelize, Postgres
   * React
   * Material UI
   * Test : Supertest, Mocha, Jest
   
## Installations
   * Clone the repo as 
   ``` 
   git clone https://github.com/iloveyii/sports-poll-2.git
   ```
   * Their are two directories node and frontend, therefore install npm packages accordingly.
```
    cd node && npm i
    cd ..
    cd frontend && npm i
 ```
 ## Tests
   * Create a db in Postgres and change .env file at node/.env accordingly.
   * Run the tests for node as follows. Nb: it will reset db. Node server should not be running already.
```npm
    cd node
    npm run test
```
   * Run the tests for frontend as follows. Please run node server before running these tests.
```npm
    cd frontend
    npm run test
```
   
 
 ## First run
   * Start the node server ( set credentials for node in .env). Better to reset the db.
```
    cd node
    npm run migrate:reset
    npm start
```
   * Start React app like [You need to run it from same domain (localhost:8080) for cookies to work, therefore build React app and serve it from node app]
``` 
    cd frontend
    npm run build
```

    
## Requirements

   * You may need to install the following.
     1. node >= 10.16.0
     2. npm >= 6.9.0
     3. Postgres
