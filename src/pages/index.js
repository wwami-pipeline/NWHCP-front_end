/* main page */
import React from "react";
import { Link } from "gatsby";
import { Button, Carousel } from "react-bootstrap";

const Home = () => {
  return (
    <div
      className="pt-3"
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div>
        <h1
          className="text-primary"
          style={{
            textAlign: "center",
          }}
        >
          There's something for every student in healthcare
        </h1>
      </div>
      <div
        className="d-flex"
        style={{
          textAlign: "left",
          flex: "1",
          margin: "50px",
          display: "flex",
          flexDirection: "column",
          alignContent: "flex-end",
        }}
      >
        {/* <img src={require("/images/home/doctors.svg")} atl="" /> */}
        <p
          style={{
            fontSize: "1.2rem",
            lineHeight: "2rem",
            width: "75%",
            fontSize: "25px",
          }}
        >
          Made for students pursuing a career in the health professions.
          <br /> Explore our site to find supplemental programs and
          opportunities that will help you reach your goals.
        </p>
        <p
          className="lead "
          style={{
            width: "75%",
            fontSize: "25px",
          }}
        >
          Let's match you up with programs that might be right for you!
        </p>
      </div>
      <div className="text-center pb-4">
        <Link to="/programs">
          <Button
            size="lg"
            variant="primary"
            style={{
              borderRadius: "10px",
              padding: "20px",
              fontWeight: "bold",
            }}
          >
            Get Started!
          </Button>
        </Link>
      </div>
      <p
        className=""
        style={{
          position: "relative",
          bottom: "-3rem",
          textAlign: "center",
          fontSize: "20",
          flex: "1",
        }}
      >
        Click <Link to="/about">here</Link> to learn more about us.
      </p>
    </div>
  );
};
export default Home;
