// import { faHome } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
// import { Link } from "gatsby";
import { Button } from "react-bootstrap";

import { Dialog } from "../components/HomeDialog";

const Home = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div className="page-wrapper">
        <h1 className="text-primary text-center">Achieve your future</h1>
        <p className="lead text-center">
          There's something for every student in healthcare.
        </p>
        <p className="text-center">
          Explore our site to find educational opportunities and learning
          programs that will help you reach your goals.
        </p>
        <p className="lead text-center">
          Let's match you up with programs that might be right for you.
        </p>
        <div className="text-center pb-4">
          <Button size="lg" variant="primary" onClick={handleShow}>
            Find Your Program
          </Button>
        </div>
        <Dialog show={show} setShow={setShow} />
        {/* <p className="text-center">
          Click{" "}
          <Link to="/about" exact>
            here{" "}
          </Link>
          to learn more about us.
        </p> */}
      </div>
    </div>
  );
};

export default Home;