import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDataById, userUpdate } from "../../Api/GetData";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const UpdateData = () => {
  const Navigate = useNavigate();
  const [inputData, setInputData] = useState({
    username: "",
    email: "",
    phone: "",
  });
  const id = useParams().id;
  const token = useSelector((state) => state.tokenReducer);
  const GetData = async () => {
    try {
      const response = await getDataById(id, token);
      if (response.status === 200) {
        const { email, phone, username } = response.data.message;
        setInputData({
          email: email,
          phone: phone,
          username: username,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const updateData = async () => {
    try {
      const response = await userUpdate(id, token, inputData);
      if (response.status === 200) {
        toast.success("update successfully");
        Navigate("/admin/user");
      }
    } catch (error) {
      toast.error("backend error!");
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    updateData();
  };
  useEffect(() => {
    if (token) {
      GetData();
    }
  }, [token]);
  return (
    <div className="container update-data-container">
      <section className="section-update">
        <h2 className="title-heading"> Update the User Data </h2>
        <div className="section-form-update flex">
          {" "}
          <form action="" className="flex" onSubmit={handleFormSubmit}>
            <span className="form-input-span flex">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                autoComplete="off"
                required
                value={inputData.username}
                onChange={handleOnChange}
              />
            </span>
            <span className="form-input-span flex">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                autoComplete="off"
                required
                value={inputData.email}
                onChange={handleOnChange}
              />
            </span>
            <span className="form-input-span flex">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                name="phone"
                autoComplete="off"
                required
                value={inputData.phone}
                onChange={handleOnChange}
              />
            </span>
            <span>
              <button type="submit"> Update</button>
            </span>
          </form>
        </div>
      </section>
    </div>
  );
};

export default UpdateData;
