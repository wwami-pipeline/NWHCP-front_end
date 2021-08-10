const path = require("path");

exports.onCreatePage = async ({ page, actions }) => {
    const { createPage } = actions;

    if (page.path.match(/^\/orgs/)) {
        createPage({
            path: "/orgs",
            matchPath: "/orgs/*",
            component: path.resolve(`src/pages/orgs/OrgsRouter.js`)
        });
    }
  }