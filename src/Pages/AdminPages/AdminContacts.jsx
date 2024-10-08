import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { deleteContactDataById, getadminContact } from "../../Api/GetData";
import { toast } from "react-toastify";

const AdminContacts = () => {
  const [contactData, setContactData] = useState(null);
  const token = useSelector((state) => state.tokenReducer);
  const getContactData = async () => {
    const response = await getadminContact(token);
    if (response.status === 200) {
      setContactData(response.data.message);
    }
  };

  const handleDeleteContact = async (id) => {
    const response = await deleteContactDataById(id, token);

    if (response.status === 200) {
      toast.success(response.data.message);
      getContactData(); //refresh the data
    } else {
      toast.error("backend error");
    }
  };

  useEffect(() => {
    if (token) {
      getContactData();
    }
  }, [token]);
  return (
    <div className="container contact-admin--container">
      <div className="section-contact--admin grid">
        <h2 className="common-heading">Contacts Data</h2>
        <table>
          <thead>
            <tr className="grid">
              <th>Username</th>
              <th>Email</th>
              <th>Message</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {contactData?.map((contact) => (
              <tr key={contact._id} className="grid">
                <td>{contact.username}</td>
                <td>{contact.email}</td>
                <td>
                  {contact.message.length > 16
                    ? contact.message.slice(0, 16)+"..."
                    : contact.message}
                </td>
                <td>
                  <button onClick={() => handleDeleteContact(contact._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminContacts;
