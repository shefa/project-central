# Project Central
Platform for managing year 2 group projects at Cardiff University

Initial POC/demo by Georgi Marinov

Project Central will be hosted live during the development phase on http://projectcentral.soon.it/

## Stack
* Meteor.js
* SemanticUI
* PostgreSQL

## Installation & Running locally
*Meteor* and *Git* are the only prerequisites. ( Install meteor: `curl https://install.meteor.com/ | sh` )
1. `git clone https://github.com/venom1724/project-central.git`
2. `cd project-central/app/`
3. `meteor npm install`
4. `meteor`

The app will be running at http://localhost:3000/

## Directory structure 
* **app/**  -  meteor project root
  * **client/** - contains client side code
    * **views/**
      * lib/ - contains SemanticUI, automatically filled after npm install 
    * **controllers/**
  * **server/** - contains server side code, e.g. database handlers and communication
  * **models/** - models are shared between the server and client
  * **public/** - images and other resources

## Working with the system
Since Project Central is in development state, there are some testing accounts of different groups

Registering on the system will create a student account.

If you wish to use different functionality, you must use the accounts below:

* Module Leader Account
  * E-mail: leader@test.com
  * Pass:   123leader
* Client Account
  * E-mail: client@test.com
  * Pass:   123client
* Supervisor Account
  * E-mail: supervisor@test.com
  * Pass:   123supervisor
* Student Account ( You can create your own )
  * E-mail: student@test.com
  * Pass:   123student
