import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import { useSelector } from "react-redux";
import { getUserDetails } from "../../Api/GetData";
import { toast } from "react-toastify";

const AdminLayout = () => {
  const Navigate = useNavigate();
  const [data, setData] = useState(null);
  const token = useSelector((state) => state.tokenReducer);
  const fetchData = async () => {
    try {
      const response = await getUserDetails(token);
      if (response.status === 200) {
        setData(response.data.msg);
      } else {
        console.log("something bad happend");
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (data && !data.isAdmin) {
    Navigate("/");
    toast.error("User is not an admin")
  }
  useEffect(() => {
    if (token) {
      fetchData();
    }
  }, [token]);

  return (
    <>
      <AdminHeader />
      <Outlet />
    </>
  );
};

export default AdminLayout;
