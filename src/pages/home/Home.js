import React from "react";
import 'css/home.css';

const Home = () => {
  return (
    <React.Fragment>
      <main
        style={{ margin: 'auto', width: '57%' }}
      // class="home-wrapper"
      >
        <div class="container">
          <section id="top">
            <div class="row">
              <div class="col m10 offset-m1 s12 ">
                <div class="center-align">
                  <img style={{ marginTop: "40px" }} class="responsive-img" src="./assets/logo.png" alt='logo' />
                </div>
                <p class="center-align italic-light">
                  Illuminating the path between the dreams of today and the healthcare of tommorow.
                        </p>
                <div class="center-align">
                  <img class="responsive-img" src="./assets/roadmap.png" alt='roadmap' />
                </div>
                <div class="col s10 offset-s1">
                  <p class="quote">
                    Thousands of students in need. Five states with shortages of primary care physicians. One medical school trying to turn the
                    tide. As part of UW Medicine,
                                <b>Waypoint</b> maps the healthcare education pipeline so that programs can coordinate their
outreach, and students can find the services they need to succeed as healthcare professionals.
                            </p>
                </div>
              </div>
            </div>
          </section>


          <section id="problem">

            <div class="row">
              <div class="col m10 offset-m1 s12">
                <h2 class="center-align">Why not Waypoint?</h2>
                <p class="flow-text">
                  Since the 1970’s health professionals have known of a lack of primary care physicians
                  in the Greater Pacific Northwest region.
                  As the only accredited medical school in the area, the task fell on the UW School of Medicine
                  to solve this problem.
                        </p>

                <div class="row">
                  <div class="col s8 xs12 offset-s2 center-align">
                    <img class="responsive-img" src="./assets/statesBig.png" alt='wwami region' />
                    <p class="italic-light">The five states of the WWAMI Region.</p>
                  </div>
                </div>

                <p class="flow-text">
                  Over the next decades the School of Medicine would create the
                            <b>WWAMI initiative</b>, an innovative approach to promoting health care careers in underserved
areas with targeted youth outreach and medical residencies.
                        </p>

                <h3>But there's a problem...</h3>

                <p class="flow-text">
                  No one knows where this outreach is working and what areas need help. Students fall off the map, programs can't collaborate,
                  and the initiative suffers as a whole.
                        </p>
              </div>
            </div>
          </section>
          <section id="solution">
            <div class="row">
              <div class="col m10 offset-m1 s12">
                <h2 class="center-align">Guide the Way</h2>
                <div class="center-align">
                  <img class="responsive-img" src="./assets/Map-Initial-View.svg" alt='map' />
                  <p class="italic-light">
                    With the mapping tool, students can easily find relevant programs in their area.
                            </p>
                </div>


                <p class="flow-text">
                  Waypoint offers students and partnering organizations a simple information hub for finding and connecting with outreach programs.
                  No longer do students risk the chance of not continuing their involment, and no longer do organizations
                  have to jump through hurdles just to connect and collaborate with similar offerings in their
                  area of operation.
                        </p>
                <h3>Process as a Product</h3>

                <p class="flow-text">
                  The data that fuels Waypoint was created practically from scratch. We designed a method of data collection for the WWAMI
                  Inititiave that enables them to collect clean, extensive information for an ever growing number
                  of outreach programs. As more organizations provide this information, Waypoint will provide a
                  greater wealth of information.
                        </p>
                <div class="center-align">
                  <img class="responsive-img" src="./assets/steps.svg" alt='pipeline steps' />
                  <p class="italic-light">
                    Creating a robust API for accessing the data collected allows future teams to utilize its potential to the fullest.
                            </p>
                </div>

                <p class="flow-text">
                  Waypoint was built on the premise that good tools rely on good data. Knowing that organizational needs change, we made the
                  database that houses all of the information we've gathered available as its own tool. Through
                  our partner Seattle Data for Good, all of the details of this project and instructions for using
                  the data derived from it will be made available to an entire community of innovators who will
                  continue to help the WWAMI Initiative acheive its goal of eliminating the shortage of physicians
                  in areas of need.
                        </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Home;
