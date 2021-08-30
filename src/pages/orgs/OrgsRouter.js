import React from 'react';
import { Router } from '@reach/router';
import ProgramDetails from '../../xcomponents/Programs/ProgramDetails';

// Dynamic routing by organization ID for program detail pages
// See gatsby-node.js for configuration
const OrgsRouter = () => (
        <Router>
            <ProgramDetails path="/orgs/:id" />
        </Router>
);

export default OrgsRouter;