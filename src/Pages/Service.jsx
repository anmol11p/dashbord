/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { getServiceData } from "../Api/GetData";

const Service = () => {
  const [ServiceData, setServiceData] = useState(null);

  const dataFetch = async () => {
    const response = await getServiceData();
    setServiceData(response.data.services);
  };
  useEffect(() => {
    dataFetch();
  }, []);

  return (
    <div className="container service-container">
      <section className="service-section">
        <h2 className="title-heading">Services</h2>
        <ul className="serviceCardParent grid grid-3--cols">
          {ServiceData?.map((service) => (
            <li className="card-service flex" key={service._id}>
              <figure className="grid">
               
                <img src="/mern-stack-frontend/images/design.png" alt="" />
              </figure>
              <p className="flex">
                <span>{service.provider}</span>
                <span>{service.price}</span>
              </p>
              <h2>{service.service}</h2>
              <span>{service.description}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Service;
