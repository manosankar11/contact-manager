import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router";
import { toast } from 'react-toastify';

const AddContact = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [number,setNumber] = useState("");
    const contacts = useSelector((state) => state);
    const dispatch = useDispatch();

    const history = useHistory();
    const handleSubmit = (e) => {
    e.preventDefault();

    const checkEmail = contacts.find(contact =>
    contact.email === parseInt(email)
  );
  const checkNumber = contacts.find(contact =>
    contact.number === parseInt(number)
  );

  if (!email || !name || !number) {
    return toast.warning("Please fill in all fields!!");
  }
  if (checkEmail) {
    return toast.error("This email already exists!!");
  }
  if (checkNumber) {
    return toast.error("This phone number already exists!!");
  }
  const data = {
    id: contacts.length > 0 ? contacts[contacts.length - 1].id + 1 : 0,
    email,
    name,
    number,
  };

  dispatch({type: "ADD_CONTACT", payload:data});
  toast.success("Student added successfully!!");
  history.push("/");
};
return (
    <div className="container-fluid">
      <h1 className="text-center text-dark py-3 display-2">Add Post</h1>
      <div className="row">
        <div className="col-md-6 p-5 mx-auto shadow">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="number"
                placeholder="Phone"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="btn btn-block btn-dark"
                type="submit"
                value="Add Student"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};


export default AddContact;
