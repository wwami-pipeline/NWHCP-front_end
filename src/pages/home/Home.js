import React from "react";
import 'css/home.css';

const Home = () => {
  return (
    <React.Fragment>
      <main
        style={{ margin: 'auto', width: '60%' }}
      // class="home-wrapper"
      >
        <div class="container">
          <section id="top">
            <div class="row">
              <div class="col m10 offset-m1 s12 ">
                <h2 class="title center-align">
                  Northwest Health Career Path Project
                </h2>
                <h3 class="center-align">
                  Transform your dreams of today into tomorrow's reality!
                </h3>
                <div class="center-align">
                  <button className="center-align programButton">
                    <a className='buttonLink' href="/map">Check out our map</a>
                  </button>
                  <div class="center-align">
                    <div><img class="responsive-img " src="./assets/people.png" alt='people' /></div>
                  </div>
                </div>

                <div class="col s10 offset-s1">
                  <h2 class="center-align">Welcome!</h2>
                  <p class="flow-text">
                    Are you a middle school, high school, undergraduate, or post-graduate student
                    interested in becoming a health professional?</p>
                  <p class="flow-text">
                    Do you identify as belonging to a group that has been identified as
                    underrepresented in the healthcare fields, including ethnic, racial,
                    socioeconomically and geographically disadvantaged, or LGBTQ?
                  </p>
                  <p class="flow-text">
                    Our site can provide you with the educational and career support that you will
                    need to reach your goals.
                  </p>
                  <p class="flow-text">Keep in mind, healthcare is a field that ofers a wide variety of career options
                                    beyond clinical care like technology, research, community and environmental
                    health, ofice administration, and so much more!</p>

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
      </main >
    </React.Fragment >
  );
};

export default Home;
