// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { getContactDetails, getUserDetails } from "../Api/GetData";
import { useSelector } from "react-redux";
import { toast } from 'react-toastify';

const Contact = () => {
  // Access the token data here..
  const [contactInput, setContactInput] = useState({
    username: "",
    email: "",
    message: "",
  });

  const token = useSelector((state) => state.tokenReducer);
  const fetchData = async () => {
    try {
      const response = await getUserDetails(token);    
      const { username, email } = response.data.msg;
      setContactInput({
        username: username,
        email: email,
        message: "",
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (token) {
      fetchData();
    }
  }, [token]);

  const handleOnchange = (e) => {
    const { value, name } = e.target;
    setContactInput({
      ...contactInput,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await getContactDetails(contactInput);
     if(response.status===201){
      setContactInput({
        username: contactInput.username,
        email: contactInput.email,
        message: "",
      });
      toast.success("message send successfully")
     }
    if (response.status===400) {
      toast.error(response.data.extraDetails)
    }

    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container contact-container">
      <div className="section-about">
        <div className="flex grid grid-2--cols about-grid">
          <div className="div-1-about">
            <span>
              <h2 className="title-heading">Contact Us</h2>
            </span>
            <figure>
              <img src="/images/support.png" alt="" width="100%"  height="auto"/>
            </figure>
          </div>

          <div className="div-2-about flex">
            <form className="flex" onSubmit={handleFormSubmit}>
              <span className="form-input-span flex">
                <label htmlFor="username">User Name</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={contactInput.username}
                  onChange={(e) => handleOnchange(e)}
                  autoComplete="off"
                  required
                />
              </span>

              <span className="form-input-span flex">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  // defaultValue={dataToken && dataToken.email}
                  value={contactInput.email}
                  onChange={(e) => handleOnchange(e)}
                  autoComplete="off"
                  required
                />
              </span>

              <span className="form-input-span flex">
                <label htmlFor="message">message</label>

                <textarea
                  type="text"
                  name="message"
                  id="message"
                  autoComplete="off"
                  rows="6"
                  value={contactInput.message}
                  onChange={(e) => handleOnchange(e)}
                  required
                ></textarea>
              </span>
              <span>
                <button type="submit">Submit</button>{" "}
              </span>
            </form>
          </div>
        </div>

        <div className="map-google grid">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7014.17347480143!2d79.10817509111159!3d28.476934383776918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390abbd71d1e6b39%3A0x19e1ab44f6661257!2sAnjani%20Mustkil%2C%20Uttar%20Pradesh%20243303!5e0!3m2!1sen!2sin!4v1728032117915!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
