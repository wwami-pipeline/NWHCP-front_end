import React, { Component } from 'react';
import './about.css';

class About extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div class="container">
                    <section id="problem">
                        <div class="row">
                            <div class="column-left">
                                <p>
                                    <img class="left-image responsive-img" src="./assets/about.png" alt='about' />
                                </p>
                            </div>
                            <div class="column-right">
                                <p class="col m10 offset-m1 s12">
                                    <h2 class="title center-align">How does the NWHCP site work?</h2>
                                    <p class="flow-text">
                                        Our map will link you to a variety of programs that will allow you to
                                    </p>
                                    <li class="flow-text">
                                        Learn about oportunities in the <span class="highlight">health sciences and STEM</span>,
                                    </li>
                                    <li class="flow-text">
                                        Experience <span class="highlight">hands-on activities</span>,
                                    </li>
                                    <li class="flow-text">
                                        Prepare <span class="highlight">academically</span>,
                                    </li>
                                    <li class="flow-text">
                                        Build your <span class="highlight">resume</span>,
                                    </li>
                                    <li class="flow-text">
                                        Explore the <span class="highlight">wide variety of health based careers</span>. Learn about how to become a doctor, nurse, pharmacist, social worker, dentist, or therapist, and find out more about health professions that you might not even have heard of like health administration or health information technology!
                                    </li>
                                </p>
                            </div>
                        </div>
                    </section>

                    <section id="programs">
                        <div class="row">
                            <h2 class="title center-align">
                                What kind of programs are included?
                            </h2>
                            <p>
                                Select from activities that will help you build your resume as you apply for school and work.
                            </p>
                        </div>

                        <div class="center-align">
                            <ul class="features">
                                <li>
                                    <div>
                                        <img class="responsive-img icon" src="./assets/camp.png" alt='camp' />
                                        <p class="flow-text">Summer Camps</p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <img class="responsive-img icon" src="./assets/shadowing.png" alt='hadowing' />
                                        <p class="flow-text">Shadowing Opportunities</p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <img class="responsive-img icon" src="./assets/after-school.png" alt='after-school' />
                                        <p class="flow-text">After School Programs</p>
                                    </div>

                                </li>
                                <li>
                                    <div>
                                        <img class="responsive-img icon" src="./assets/workshop.png" alt='workshop' />
                                        <p class="flow-text">Workshops</p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <img class="responsive-img icon" src="./assets/intern.png" alt='intern' />
                                        <p class="flow-text">Internships</p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <img class="responsive-img icon" src="./assets/college.png" alt='college' />
                                        <p class="flow-text">College Access Programs</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>


            </React.Fragment>
        )
    }
}

export default About