# NWHCP Front-End

## About
Client-side code provides mapping and filtering capabilities. This is to help interested students find programs that match to them, as well as help programs identify gaps in coverage. This site fits mobile.

## Tech and Dependencies
Project setup using Gatsby.js for better SEO. The current version of the client-side application is a web-based mobile app, that has not been optimized for desktop. It is completely open-source, leveraging Gatsby, Bootstrap, Sass, and Leaflet. The project requires the following dependencies (see package.json for versions):

- Gatsby
- React
- Leaflet
- React-Leaflet
- Bootstrap
- React-Bootstrap
- Sass
- Font Awesome 5
- Gatsby-Plugin-Layout
- Gatsby-Plugin-Sass

Dependencies will be installed by following the setup instructions below.

## Setup
After cloning down the repo, run `npm install` to install and initialize all dependencies. If you do not have npm installed on your system, please refer to the instructions [here](https://www.npmjs.com/get-npm). Once the install is complete, run `npm start` to launch the local development server.

## Deploy
Built static html/js/css from ```npm run build``` will be hosted by nginx, which is also the gateway of the whole system. See NWHCP-docker for more information.

## Contents

### src/pages
Everything that is specific to one page. Gatsby sets up automatic routing based on filenames.

### src/components
Smaller components called by pages. The gatsby-plugin-layout wraps each page with Layout.js. For more info visit https://eliaslog.pw/gatsbyjs-how-to-persist-layout-and-keep-state-between-pages-with-createcontext-and-usereducer/