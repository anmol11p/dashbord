import React from "react";
import { getRegistrationDetails, getUserDetails } from "../Api/GetData";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from "../ReduxToolkit/TokenSlice";
import {toast } from 'react-toastify';

const Register = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const handleFormSubmit = async (formData) => {
    const input = Object.fromEntries(formData.entries());
    const response = await getRegistrationDetails(input);

    if (response.status === 201) {
      //data getting from token
      // const userDetails = await getUserDetails(response.data.token);
      Navigate("/");
      toast.success(response.data.msg);
      dispatch(setToken(response.data.token));
    } else {
      if (response.status === 400) {
        toast.error(response.data.extraDetails);
      } else {
        toast.error(response.data.msg);
      }
    }
  };
  return (
    <div className="container registration-container">
      <div className="grid grid-2--cols section-form-common">
        <div className="registration-image">
          <img src="/mern-stack-frontend/images/register.png" alt="" />
        </div>
        <div className="form-section">
          <form action={handleFormSubmit} className="form flex">
            <h2 className="title-heading">Registration Form</h2>
            <span className="form-input-span flex">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" autoComplete="off" required />
            </span>
            <span className="form-input-span flex">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" autoComplete="off" required />
            </span>
            <span className="form-input-span flex">
              <label htmlFor="Phone">Phone</label>
              <input type="text" name="phone" autoComplete="off" required />
            </span>

            <span className="form-input-span flex">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                autoComplete="off"
                required
              />
            </span>
            <span className="btn-registration">
              <button>Register Now</button>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
