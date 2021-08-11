import React from 'react';
import SupportFooter from '../components/SupportFooter.js';

const About = () => {
    return (
        <div>
            <div className='page-wrapper'>
                <h1 className='text-primary text-center my-4'>
                    About Northwest Health Career Path (NWHCP)
                </h1>

                <p className='lead'>
                    NWHCP seeks to connect underrepresented students of all ages
                    who are interested in pursuing a career in healthcare with
                    opportunities that will help them to achieve their goal.
                </p>
                <p>
                    To do so, we collect and distribute information on what we
                    call pathway or outreach programs. Students can access this
                    information on our website, allowing them to identify
                    opportunities in their local area. Our hope is that other
                    users like advisors, counselors, and program administrators
                    will also utilize this information to direct students and
                    find ways to bridge gaps in programming.
                </p>

                <p>
                    In addition to improving the visibility of learning
                    opportunities for underrepresented students, we also work to
                    bolster communication between the pathway programs
                    themselves. We create opportunities for staff, faculty and
                    students to come together each year at the annual <strong>Northwest
                    Health Career Path Summit</strong>. Participants are given the
                    opportunity to share their knowledge on how to remove the
                    barriers that underrepresented students face in moving
                    forward with their dreams. This Summit is also a great venue
                    for networking, professional development, and collaboration.
                </p>
            </div>

            <SupportFooter />
        </div>
    );
};

export default About;
