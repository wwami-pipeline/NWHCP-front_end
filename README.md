# Waypoint Front-End
<img src="https://raw.githubusercontent.com/wwami-pipeline/Front-End/master/public/assets/logo.png" width="500">
Repository for the client-side code of Waypoint.

## Tech and Dependencies
Project setup using create-react-app for simplicity. The project requires the following dependencies:
- Material UI
- Leaflet
- React
- React-Dom
- React-Leaflet
- React-Router-Dom
- React-Scripts

Dependencies will be installed by following the setup instructions below.

## Setup
After cloning down the repo, run `npm install` to install and initialize all dependencies. If you do not have npm installed on your system, please refer to the instructions [here](https://www.npmjs.com/get-npm). Once the install is complete, run `npm start` to launch the local development server.

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
All React components for the site. Some components are broken into presnetational and container components. I have left depricated versions of components for reference purposes. 
#### CSS
This project uses standard css files, as opposed to css modules. Each component has its own css file. This is merely for organizational sake, as styles will apply across the whole site.
#### Data
Static data for testing purposes. Shows structure of the data that the API returns as well.
