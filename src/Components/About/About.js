import React, {Component} from 'react';
import {SupportFooter} from '../SupportFooter/SupportFooter';

export class About extends React.Component {
    render() {
        return (
            <div>
                <div className="padding-sides center-text">
                    <h2 className="blue-color"><b>About Us</b></h2>
                    <p className="blue-color font-size-14">
                        The Northwest Health Career Path (NWHCP) connects underrepresented students of all ages with healthcare career programs
                    </p>
                    <p className="font-size-12">
                        To do so, we collect and post information on what we call pathway or outreact programs
                        <br />
                        Students can access this information on our website and identify opportunities in their local area.
                    </p>
                    <h3 className="blue-color">
                        <b>Mission</b>
                    </h3>
                    <p className="blue-color font-size-12">Our hope is that other users like advisors, counselors, and program administrators will utilize this information to direct students and find ways to bridge gaps in programming.</p>
                    <p className="font-size-12">
                        We also work to bolster communication between the pathway programs themselves.
                        <br />
                        <br />
                        We create opporunities for staff, faculty, and students to come together each year at the annual Northweest Health Career Path Summit.
                        <br />
                        <br />
                        Participants are given the opportunity to share their knowledge on how to remove the barriers that underrepresented students face in moving forward with their dreams.
                        <br />
                        <br />
                        This Summit is also a great venue for networking, professional development, and collaboration.
                    </p>
                </div>

                <SupportFooter />
            </div>
        )
    }
}