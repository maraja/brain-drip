# Brain Drip
> This is an Open Source project created and maintained by myself along with a few other dedicated developers. The goal for Brain Drip is to crowdsource curriculum. 

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Directory Structure](#directory)
* [Setup](#setup)
* [Documentation](#documentation)
* [Features](#features)
* [Contact](#contact)

## General info
This repository contains all the main services which Brain Drip comprises of. The API Gateway is built on GraphQL, the backend is on Node.js/Express.js, and the frontend is React.js.

## Technologies
* Node.js
* Express.js
* Sequelize ORM
* OpenAPI 3.0
* MySQL
* React.js
* GraphQL
* Docker

## Directory
    .
    ├── ...
    ├── braindrip-backend
    │   ├── src                     # source code for backend
    │   |   ├── db                  # DB Models and configuration
    │   |   ├── helpers             # Helper code
    │   |   ├── server  
    │   |   |   ├── auth            # Placeholder auth for JWT.
    │   |   |   ├── controllers     # Controllers for API
    │   |   |   └── routes          # Routes for API
    │   |   └── spec                # OpenAPI spec documentation
    │   ├── tests                   # End-to-end, integration tests (alternatively `e2e`)
    │   ├── sequelize               # Sequelize ORM configuration and migrations
    │   └── coverage                # Code coverage report
    ├── braindrip-app               # Frontend for brain drip
    ├── api-gateway                 # Gateway to handle frontend requests. Routes to backend service
    ├── node-deploy                 # Service to handle the upload of microservices to AWS (this folder is not used locally)
    ├── terraform                   # Terraform deployment scripts
    └── ...

## Setup
This project is built using Docker containers, thus you will need Docker installed for it to work. A docker-compose file is placed in the root of the repository. Follow the steps below to get started:

Check out the repository:

```
git clone https://github.com/maraja/brain-drip
```

Change into the repository directory:

```
cd brain-drip
```

Run the following Docker command within the root directory:

```
docker-compose up
```

#### To edit code
Before working with the code, you must have Node.js installed (the latest LTS version should work just fine). Change into the backend repository directory:

```
cd brain-drip/braindrip-backend
```
Install yarn:

```
npm install -g yarn
```

Install all the necessary modules:
```
yarn
```

Now you can begin editing! Once you start the application following the instructions at the beginning of the setup (i.e., running `docker-compose up`), editing any file will automatically restart the application.


#### To run tests

```
docker-compose run --rm backend yarn test
```

#### To re-initialize db

You can reinitialize the db in case anything goes wrong. Simply connect to the docker container as shown above and run the following command: `yarn init`

## Documentation
API Documentation can be found here: https://documenter.getpostman.com/view/395098/T17KeSmG?version=latest

## Features
List of features ready and TODOs for future development
* Lots of features!

To-do list:
* Learning Buckets!

## Extra Notes

Great resource for learning and setting up the db with sequelize. Although I used MySQL and this article uses PostGreSQL, all the concepts remain the same:
https://www.oriechinedu.com/posts/getting-started-with-sequelize-and-postgres

## Contact
Created by [@maraja](mailto:amit.maraj@gmail.com) - feel free to contact me!