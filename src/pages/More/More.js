import React from 'react';
import './more.css';

class More extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div class="container">
                    <section id="problem">
                        <div class="row">
                            <div class="column-left">
                                <img class="left-image responsive-img" src="./assets/about.png" alt='about' />
                            </div>
                            <div class="column-right">
                                <p class="col m10 offset-m1 s12">
                                    <h1 class="title center-align">How does the NWHCP site work?</h1>
                                    <p class="flow-text">
                                        Our map will link you to a variety of programs that will allow you to
                                    </p>
                                    <li class="flow-text">
                                        Learn about opportunities in the health sciences and STEM,
                                    </li>
                                    <li class="flow-text">
                                        Experience hands-on activities,
                                    </li>
                                    <li class="flow-text">
                                        Prepare academically,
                                    </li>
                                    <li class="flow-text">
                                        Build your resume,
                                    </li>
                                    <li class="flow-text">
                                        Explore the wide variety of health based careers. Learn about how to become a doctor, nurse, pharmacist, social worker, dentist, or therapist, and find out more about health professions that you might not even have heard of like health administration or health information technology!
                                    </li>
                                </p>
                            </div>
                        </div>
                    </section>

                    <section id="programs">
                        <div class="row">
                            <h1 class="title center-align">
                                What kind of programs are included?
                            </h1>
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

                <div id="support">
                    <div class="container support1">
                        <div class="row">
                            <div class="column-right">
                                <h2 class="center-align support-title">Join us</h2>
                                <p class="flow-text detail">
                                    Health career pathways provide an opportunity for students from diverse backgrounds to explore health careers through experiential learning.
                                </p>
                                <p class="flow-text detail">
                                    Help us create a health workforce that is reflective of the people of our communities by adding your program to our map. This can be done
                                    by filling out the <a class="highlight" href="https://redcap.iths.org/surveys/?s=3FNCRCFYC9">NWHCP survey</a>. Help us spread the world!
                                </p>
                            </div>
                            <div class="column-left center-align">
                                <img class="responsive-img" src="./assets/support.png" alt='support' />
                            </div>
                        </div>
                    </div>

                    <div class="container support2">
                        <div>
                            <h2 class="center-align support-title">Support</h2>
                            <p class="flow-text detail">
                                This project represents a collaboration between the UW School of Medicine Service Learning Program, AHEC for Western Washington, UWSOM Center for Health Equity, Diversity, and Inclusion, Eastern AHEC Center, and all of our community partners throughout the region.
                                </p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default More