import React from 'react';
import { Router } from '@reach/router';
import ProgramDetails from '../../components/ProgramDetails';

const OrgsRouter = () => (
        <Router>
            <ProgramDetails path="/orgs/:id" />
        </Router>
);

export default OrgsRouter;