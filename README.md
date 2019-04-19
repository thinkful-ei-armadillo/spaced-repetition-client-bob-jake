# Viva Mexico - A Spaced Repetition Capstone
This project was made for the second capstone requirement in Thinkful's engineering immersion program.

## Motivation
Our motivation was to change the world by teaching you ten different words in Spanish, although you probably already know most of them.

## Screenshots
coming soon...

## Tech Stack
React.js, Cypress.io, Express, Node.js, PostgreSQL

## Features
Language learning with spaced repetition.
A database built around a linked list.
The application changes the order of words based on your answers.
Full integration testing.
Front end testing with Cypress.

## API Reference
View our server at -https://github.com/thinkful-ei-armadillo/spaced-repetition-server-bob-jake

## Setup

To setup the application
1. Fork and clone the project to your machine
2. `npm install`. This will also install the application *Cypress.io* for running browser integration tests

## Running project
This is a `create-react-app` project so `npm start` will start the project in development mode with hot reloading by default.

## Running the tests
This project uses [Cypress IO](https://docs.cypress.io) for integration testing using the Chrome browser.

Cypress has the following expectations:

- You have cypress installed (this is a devDependency of the project)
- You have your application running at http://localhost:3000.
  - You can change the address of this expectation in the `./cypress.json` file.
- Your `./src/config.js` is using http://localhost:8000/api as the `API_ENDPOINT`

To start the tests run the command:
```bash
npm run cypress:open
```
On the first run of this command, the cypress application will verify its install. Any other runs after this, the verification will be skipped.

The command will open up the Cypress application which reads tests from the `./cypress/integration/` directory. You can then run individual tests by clicking on the file names or run all tests by clicking the "run all tests" button in the cypress GUI.

Tests will assert against your running localhost client application.

You can also start all of the tests in the command line only (not using the GUI) by running the command:
```bash
npm run cypress:run
```
This will save video recordings of the test runs in the directory `./cypress/videos/`.
