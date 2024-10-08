/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getUserDetails } from "../Api/GetData";

const About = () => {
  const [Data,setData]=useState(null)
  const token=useSelector((state)=>state.tokenReducer)
  const fetchData=async()=>{
    try {
      const response=await getUserDetails(token)
        setData(response.data.msg)
    } catch (error) {
      console.log(error);
      
    }
  }
  useEffect(()=>{
    if (token) {
      fetchData()
    }
  },[token])

  
  return (
    <div className="container about-container">
      <div className="grid grid-2--cols about-section">
        <div className="div-1">
          <span className="about-heading flex">
            Welcome. <h2> {Data? `${Data.username} to our website`:"to our website"} </h2>{" "}
          </span>
          <h2 className="common-heading">Why Choose Us?</h2>
          <div className="para-about-parent">
            <span className="para-about-common">
              Expertise: Our team consists of experienced IT professionals who
              are passionate about staying up-to-date with the latest industry
              trends.
            </span>
            <span className="para-about-common">
              Innovation: We continuously innovate and develop cutting-edge
              solutions tailored to our clients needs.
            </span>
            <span className="para-about-common">
              Commitment: We are committed to delivering high-quality, reliable
              services that exceed client expectations.
            </span>
            <span className="para-about-common">
              Collaboration: Our collaborative approach ensures we work closely
              with our clients to achieve the best results.
            </span>
            <span className="para-about-common">
              Customer Satisfaction: Our priority is to provide exceptional
              service and maintain long-term relationships with our clients.
            </span>
          </div>
          <span className="btn-common flex">
            <NavLink to="/contact">
              <button> Connect Now</button>
            </NavLink>
            <NavLink to="/services">
              <button className="IInd-btn">Learn More</button>
            </NavLink>
          </span>
        </div>
        <div className="div-2">
          <div className="image-about">
            <figure>
              <img src="/mern-stack-frontend/images/about.png" alt="studen study in laptop" />
            </figure>
          </div>
        </div>
      </div>
      <div className="stats-container">
        <div className="stat-item">
          <h2>10+</h2>
          <span>Years of Expertise</span>
        </div>
        <div className="stat-item">
          <h2>200+</h2>
          <span>Innovative Projects</span>
        </div>
        <div className="stat-item">
          <h2>50+</h2>
          <span>Industry Professionals</span>
        </div>
        <div className="stat-item">
          <h2>100%</h2>
          <span>Client Satisfaction</span>
        </div>
      </div>
    </div>
  );
};

export default About;
