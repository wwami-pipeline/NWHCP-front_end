# NWHCP Front-End

![workflow](https://github.com/wwami-pipeline/NWHCP-gateway/actions/workflows/docker.yml/badge.svg)

## About
The Northwest Health Career Path (NWHCP) seeks to connect underrepresented students of all ages with healthcare programs and opportunities that will help them achieve their career goals.

This repository is for the client-side code of the NWHCP website. The website provides resources for students, a program search page with a Leaflet map and filtering capabilities, and a user account feature.

## Tech and Dependencies
This project was created with Gatsby.js for better SEO. It is completely open-source, leveraging Bootstrap for responsiveness, Sass, and Leaflet. The project requires the following dependencies (see `package.json` for version numbers):

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

## Setup
After cloning the repository to you local system, run `npm install` to install the web application and all dependencies. If you do not have npm installed on your system, please refer to the instructions [here](https://www.npmjs.com/get-npm). Once the install is complete, run `npm start` to launch the local development server.

<!--
## Deploy
Built static html/js/css from `npm run build` will be hosted by nginx, which is also the gateway of the whole system. See NWHCP-docker for more information.
-->

## Contents

#### src/pages
Everything that is specific to one page. Gatsby sets up automatic routing based on filenames.

#### src/components
Smaller components called by pages. `gatsby-plugin-layout` wraps each page with the Layout.js component. For more info visit https://eliaslog.pw/gatsbyjs-how-to-persist-layout-and-keep-state-between-pages-with-createcontext-and-usereducer/

#### gatsby-config.js
Config for Gatsby plugins like Sass, Gastby images, layout template, etc.

#### gatsby-node.js
Config for dynamic routes