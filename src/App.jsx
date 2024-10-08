// eslint-disable-next-line no-unused-vars
import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AppLayout from "./Layout/AppLayout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Service from "./Pages/Service";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import ErrorElement from "./Layout/ErrorElement";
import AdminContacts from "./Pages/AdminPages/AdminContacts";
import AdminUser from "./Pages/AdminPages/AdminUser";
import AdminLayout from "./Layout/LayoutAdmin/AdminLayout";
import UpdateData from "./Pages/AdminPages/UpdateData";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<AppLayout />} errorElement={<ErrorElement />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="services" element={<Service />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="admin" element={<AdminLayout />}>
            <Route path="user" element={<AdminUser />} />
            <Route path="contacts" element={<AdminContacts />} />
            <Route path=":id/update" element={<UpdateData />} />
          </Route>
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
