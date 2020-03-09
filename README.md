Sprts Poll
=====================================

The users use this application to vote for their favourite teams among a variety of different sports.
The use first registers using his/her email and password and then logins to vote for his/her favourite team from a random set of events.

## Technology stack
   * Node
   * Sequelize, Postgres
   * React
   * Material UI
   * Test : Supeterst, Mocha
   
## Installations
   * Clone the repo as `git clone https://github.com/iloveyii/sports-poll-2.git`
   * Their are two directories node and frontend, therefore install npm packages accordindly.
    ```
    cd node && npm i
    cd frontend && npm i
    ```
    * Start the node server ( set credentials for node in .env)
    ```
        npm run migrate:reset
        npm start
    ```
    * Start React app like `npm start`

    
### Requirements

   * You many need to install the following.
     1. node >= 10.16.0
     2. npm >= 6.9.0
     3. Postgres
