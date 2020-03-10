Sports Poll
=====================================

The users use this application to vote for their favourite teams among a variety of different sports.
The use first registers using his/her email and password and then logins to vote for his/her favourite team from a random set of events.

## Technology stack
   * Node
   * Sequelize, Postgres
   * React
   * Material UI
   * Test : Supertest, Mocha, Jest
   
## Installations
   * Clone the repo as `git clone https://github.com/iloveyii/sports-poll-2.git`
   * Their are two directories node and frontend, therefore install npm packages accordindly.
```
    cd node && npm i
    cd ..
    cd frontend && npm i
 ```
 ## Tests
   * Run the tests for node as follows. Nb: it will reset db. Node server should not be running already.
```npm
    cd node
    npm run test
```
   * Run the tests for frontend as follows. 
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
   * Start React app like 
``` 
    cd frontend
    npm start
```

    
## Requirements

   * You many need to install the following.
     1. node >= 10.16.0
     2. npm >= 6.9.0
     3. Postgres
