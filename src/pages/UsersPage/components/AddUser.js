import { useState } from "react";

const AddUser = () => {
  const [addUserForm, setAddUserForm] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (event) => {
    setAddUserForm({
      ...addUserForm,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(addUserForm); // submittable form data to the REST API
  };

  return (
    <div className="row">
      <h1>Add User</h1>
      <form className="col-md-4 offset-md-4" onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="nameInput" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="nameInput"
            name="name"
            placeholder="Enter Name"
            value={addUserForm.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phoneInput" className="form-label">
            Phone
          </label>
          <input
            type="text"
            className="form-control"
            id="phoneInput"
            name="phone"
            placeholder="Enter Phone"
            value={addUserForm.phone}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="emailInput" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="emailInput"
            name="email"
            placeholder="Enter Email"
            value={addUserForm.email}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Create User
        </button>
      </form>
    </div>
  );
};

export default AddUser;
