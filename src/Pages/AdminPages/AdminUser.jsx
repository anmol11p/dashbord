import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { deleteUser, getAdminUser } from "../../Api/GetData";
import { toast } from "react-toastify";
import { NavLink, Outlet } from "react-router-dom";

const AdminUser = () => {
  const [userData, setuserData] = useState(null);
  const token = useSelector((state) => state.tokenReducer);
  const getUserData = async () => {
    try {
      const response = await getAdminUser(token);
      if (response.status === 200) {
        setuserData(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleDeleteUser = async (id) => {
    try {
      const response = await deleteUser(id, token);
      if (response.status === 200) {
        toast.success(response.data.message);
        getUserData(); //for getting fresh data
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (token) {
      getUserData();
    }
  }, [token]);

  return (
    <>    <div className="container admin-user-container">
      <section className="section-admin--user grid">
        <h2 className="common-heading">Admin User Data</h2>
        <table>
          <thead>
            <tr className="grid tr-1">
              <th>username</th>
              <th>email</th>
              <th>phone</th>
              <th>update</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
            {userData?.map((user, index) => {
              return (
                <tr key={index} className="grid tr-2">
                  <td>{user.username} </td>
                  <td> {user.email}</td>
                  <td>{user.phone}</td>
                  <td>
                    <button className="btn-1-admin">
                      
                      <NavLink to={`/admin/${user._id}/update`}>
                        Edit
                      </NavLink>
                    </button>
                  </td>
                  <td>
                    <button onClick={() => handleDeleteUser(user._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </div>
    
    </>

  );
};

export default AdminUser;
