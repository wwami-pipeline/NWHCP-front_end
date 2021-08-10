import React from 'react';
import { Router } from '@reach/router';
import ProgramDetails from '../../components/Programs/ProgramDetails';

const OrgsRouter = () => (
        <Router>
            <ProgramDetails path="/orgs/:id" />
        </Router>
);

export default OrgsRouter;