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
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<div className="page-wrapper text-center">
				<h1 className="text-primary " style={{ fontSize: "1.3rem" }}>
					Northwest Health Career Path
				</h1>
				<p className="lead text-dark">
					There's something for every student in healthcare
				</p>
				<div
					className="d-flex"
					style={{ alignItems: "center", textAlign: "left" }}
				>
					<img src="/images/home/doctors.svg" atl="" />
					<div>
						<p style={{ fontSize: "1.2rem", lineHeight: "2rem" }}>
							Made for students pursuing a career in the health professions.
							<br /> Explore our site to find supplemental programs and
							opportunities that will help you reach your goals. 
						</p>
						<p className="lead ">
							Let's match you up with programs that might be right for you!
						</p>
					</div>
				</div>
				<div className="text-center pb-4">
					<Link to="/programs">
						<Button size="lg" variant="primary">
							Get Started!
						</Button>
					</Link>
				</div>
				<p className="" style={{ position: "relative", bottom: "-3rem" }}>
					Click <Link to="/about">here</Link> to learn more about us.
				</p>
			</div>
		</div>
	);
};
export default Home;
