# NWHCP Front-End

## About
Client-side code provides mapping and filtering capabilities. This is to help interested students find programs that match to them, as well as help programs identify gaps in coverage. This site fits mobile.

## Tech and Dependencies
Project setup using create-react-app for simplicity. The current version of the client-side application is a desktop based web app, that has not been optimized for mobile. It is completely open-source, leveraging React and Leaflet. The project requires the following dependencies:
- Material UI
- Leaflet
- React
- React-Dom
- React-Leaflet
- React-Router-Dom
- React-Scripts
- Materialize CSS for mobile responsiveness

Dependencies will be installed by following the setup instructions below.

## Setup
After cloning down the repo, run `npm install` to install and initialize all dependencies. If you do not have npm installed on your system, please refer to the instructions [here](https://www.npmjs.com/get-npm). Once the install is complete, run `npm start` to launch the local development server.

## Deploy
Built static html/js/css from ```npm run build``` will be hosted by nginx, which is also the gateway of the whole system. See NWHCP-docker for more information.

## Contents
### Root
- ReactREADME: Quick reference on react. Created by react-create-app
- Package.json: Used for tracking dependencies
### Public
- Contains all publicly accessable files
- Assets: All static images used on the site
- Favicon
### Src
#### Components
All shared components for the site. E.g. header and footer.

#### Pages
Everything that is specific to one page. E.g., the map, which is not used elsewhere.

