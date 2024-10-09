/* eslint-disable no-unused-vars */
import React from "react";
import { getLoginDetails, getUserDetails } from "../Api/GetData";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from "../ReduxToolkit/TokenSlice";
import {toast } from 'react-toastify';

const Login = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const handleFormSubmit = async (formData) => {
    const input = Object.fromEntries(formData.entries());
    const response = await getLoginDetails(input);

    if (response.status === 200) {
      //data getting from token
      dispatch(setToken(response.data.token)); //token set in localStorage
      Navigate("/");
      toast.success(response.data.msg);
    } else {
      // alert(response);
      if (response.status === 400) {
        toast.error((response.data.extraDetails));
      } else {
        toast.error((response.data.msg));
      }
    }
  };
  return (
    <div className="container login-container">
      <div className="grid grid-2--cols section-form-common">
        <div className="registration-image">
          <img src="/dashbord/images/login.png" alt="" />
        </div>
        <div className="form-section">
          <form action={handleFormSubmit} className="form flex">
            <h2 className="title-heading">Login Form</h2>

            <span className="form-input-span flex">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" autoComplete="off" required />
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
              <button>Login Now</button>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
