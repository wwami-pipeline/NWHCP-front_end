import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Button } from 'react-bootstrap';
import { StaticImage } from 'gatsby-plugin-image';

import { Dialog } from '../components/HomeDialog';

const Home = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <div className='page-wrapper text-center'>
                <h1 className='text-primary'>
                    Northwest Health
                    <br />
                    Career Path
                </h1>
                <p className='lead text-dark'>
                    There's something for every student in healthcare
                </p>
                <StaticImage src='../images/students.png' alt='student diversity'/>
                <h2 className='mt-4'>Achieve your future</h2>
                <p>
                    Are you a student pursuing a career in the health
                    professions? Do you come from a background that might place
                    barriers in your way? Explore our site to find supplemental
                    programs and opportunities that will help you reach your
                    goals. Start at the{' '}
                    <Link to='/how-to'>
                        <strong>How To</strong>
                    </Link>{' '}
                    page to learn how it works or continue below.
                </p>
                <p className='lead text-center'>
                    Let's match you up with programs that might be right for you!
                </p>
                <div className='text-center pb-4'>
                    <Button size='lg' variant='primary' onClick={handleShow}>
                        Find Your Program
                    </Button>
                </div>
                <Dialog show={show} setShow={setShow} />
                <p className='text-center'>
                    Click <Link to='/about'>here</Link> to learn more about us.
                </p>
            </div>
        </div>
    );
};

export default Home;
