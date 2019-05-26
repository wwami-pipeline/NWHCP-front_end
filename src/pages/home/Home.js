import React from "react";
import './home.css';

const Home = () => {
  return (
    <React.Fragment>
      <div class="container">
        <section id="top">
          <div class="row">
            <div class="col m10 offset-m1 s12 ">
              <h1 class="title center-align">
                Northwest Health Career Path
              </h1>
              <h3 class="center-align">
                Transform your dreams of today into tomorrow's reality!
              </h3>
              <div class="center-align">
                <a className='center-align primaryButton' href="/map">Check out our map</a>
                <div class="center-align">
                  <div><img class="responsive-img " src="./assets/banner.png" alt='people' /></div>
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
      </div>
    </React.Fragment>
  );
};

export default Home;
