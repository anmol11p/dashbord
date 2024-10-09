// eslint-disable-next-line no-unused-vars
import React from "react";
const Home = () => {
 
  return (
    <div className="container hero-container">
      <main className="section-hero">
        <div className="grid grid-2--cols hero-section-common-1">
          <div className="hero-section--content flex">
            <span>
              <p>We are the World Best IT Company </p>{" "}
            </span>
            <h2>Welcome to Anmolic</h2>
            <span>
              Are you ready to take your business to the next level with
              cutting-edge IT solutions.Look no further At Thapa Technical . we
              specialize in providing innovative IT services and solutions to
              make your unique needs.
            </span>
            <span className="btn-common flex">
              <NavLink to="/contact">
                <button> Connect Now</button>
              </NavLink>
              <NavLink to="/services">
                <button className="IInd-btn">Learn More</button>
              </NavLink>
            </span>
          </div>
          <div className="hero-section--img">
            <figure>
              <img
                src="/dashbord/images/home.png"
                alt="student study in laptop"
                width="60%"
              />
            </figure>
          </div>
        </div>
{/* 2nd section */}
        <div className="stats-container">
          <div className="stat-item">
            <h2>50+</h2>
            <span>Registered Companies</span>
          </div>
          <div className="stat-item">
            <h2>100,000+</h2>
            <span>Happy Clients</span>
          </div>
          <div className="stat-item">
            <h2>500+</h2>
            <span>Well Known Developers</span>
          </div>
          <div className="stat-item">
            <h2>24/7</h2>
            <span>Service</span>
          </div>
        </div>

{/* 3rd section */}
        <div className="grid grid-2--cols hero-section-common-2">
         
          <div className="hero-section--img">
            <figure>
              <img
                src="/dashbord/images/webdev.png"
                alt="student study in laptop"
                width="60%"
              />
            </figure>
          </div>
          <div className="hero-section--content flex">
            <span>
              <p>We are here to help you</p>
            </span>
            <h2>Get Started Today</h2>
            <span>
              Ready to take the First Step  toward a more efficient and secure IT infrastructure Contact us today for a free consultation and lets discuss how  Anmolic can help  your business thrive in digital age.
            </span>
            <span className="btn-common flex">
              <NavLink to="/contact">
                <button> Connect Now</button>
              </NavLink>
              <NavLink to="/services">
                <button className="IInd-btn">Learn More</button>
              </NavLink>
            </span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
