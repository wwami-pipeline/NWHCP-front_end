/* main page */
import React from "react";
import { Link } from "gatsby";
import { Button } from "react-bootstrap";
import Students from "../images/nwhcp-students.png";

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
          There's something for every student in healthcare.
        </h1>
      </div>
      <div
        className="d-flex"
        style={{
          textAlign: "left",
          flex: "1",
          display: "flex",
          flexDirection: "column",
          alignContent: "flex-end",
        }}
      >
        <p
          style={{
            fontSize: "1.2rem",
            lineHeight: "2rem",
            width: "48%",
            position: "relative",
            left: "615px",
            top: "200px",
          }}
        >
          Made for students pursuing a career in the health professions.
          <br /> Explore our site to find supplemental programs and
          opportunities that will help you reach your goals.
        </p>
        <p
          className="lead "
          style={{
            width: "48%",
            fontSize: "25px",
            position: "relative",
            left: "615px",
            top: "200px",
          }}
        >
          Let's match you up with programs that might be right for you!
        </p>
        <img
          src={Students}
          alt="students"
          style={{
            width: "550px",
            height: "500px",
            position: "relative",
            bottom: "290px",
            right: "50px",
          }}
        />
      </div>
      <div
        className="text-center pb-4"
        style={{
          position: "relative",
          bottom: "265px",
        }}
      >
        <Link to="/programs">
          <Button
            size="lg"
            variant="primary"
            style={{
              borderRadius: "10px",
              border: "1px solid #101010",
              boxShadow: "1px #949494",
              padding: "29px",
              fontSize: "26px",
              fontWeight: "bold",
              width: "20%",
            }}
          >
            Get Started
          </Button>
        </Link>
      </div>
      <p
        className=""
        style={{
          position: "relative",
          bottom: "220px",
          textAlign: "center",
          fontSize: "40",
        }}
      >
        Click <Link to="/about">here</Link> to learn more about us.
      </p>
    </div>
  );
};
export default Home;
