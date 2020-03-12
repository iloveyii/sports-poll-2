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
      ![demo](https://github.com/iloveyii/sports-poll-2/blob/master/clone-install-repo.gif)
   ``` 
   git clone https://github.com/iloveyii/sports-poll-2.git
   ```
   * Their are two directories node and frontend, therefore install npm packages accordingly.
```
    cd sports-poll-2
    cd node && npm i
    cd ..
    cd frontend && npm i
 ```
 ## Tests
   * Create a db in Postgres and change .env file at node/.env accordingly.
   * Run the tests for node as follows. Nb: it will reset db. Node server should not be running already.
   ![demo](https://github.com/iloveyii/sports-poll-2/blob/master/node/test-node.gif)
```npm
    cd node
    npm run test
```
   * Run the tests for frontend as follows. Please run node server before running these tests.
    ![demo](https://github.com/iloveyii/sports-poll-2/blob/master/frontend/test-frontend.gif)
```npm
    cd frontend
    npm run test
```
   
 
 ## First run
   * Start the node server ( set credentials for node in .env). Better to reset the db.
    ![demo](https://github.com/iloveyii/sports-poll-2/blob/master/node/node-migrate.gif)
```
    cd node
    npm run migrate:reset
    npm start
```
   * To see a list of API endpoints browse to `http://localhost:8080/api/v1`
   * Start React app like [You need to run it from same domain (localhost:8080) for cookies to work, therefore build React app and serve it from node app]
    ![demo](https://github.com/iloveyii/sports-poll-2/blob/master/frontend/frontend-build.gif)
``` 
    cd frontend
    npm run build
```
   * Browse to `http://localhost:8080` to see the frontend app up and running.
   ![demo](https://github.com/iloveyii/sports-poll-2/blob/master/frontend/frontend-demo.gif)

    
## Requirements

   * You may need to install the following.
     1. node >= 10.16.0
     2. npm >= 6.9.0
     3. Postgres


## Deploy on AWS 
   * Install aws command line on Ubuntu 18.04 as
```
   sudo apt update
   sudo apt install awscli
   aws --version
   sudo apt-get purge awscli && sudo pip install awscli // if cert err then use

```
  * Configure aws command line
