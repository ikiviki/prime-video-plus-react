import axios from "axios";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const AddUser = () => {
  const [addUserForm, setAddUserForm] = useState({
    name: "",
    phone: "",
    email: "",
  });

  // const [isSaved, setIsSaved] = useState(false);
  // const [isError, setIsError] = useState(false);

  const handleChange = (event) => {
    setAddUserForm({
      ...addUserForm,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // console.log(addUserForm); // submittable form data to the REST API

    // Let's send the above data to the REST API
    // 1. What's the REST API URL? https://jsonplaceholder.typicode.com/users
    // 2. What's the HTTP Method? POST
    // 3. What's the REST API Client Tool? axios (npm i axios) or fetch
    // 4. What's the form data? addUserForm
    toast.promise(
      axios.post(
        "https://jsonplaceholder.typicode.com/users",
        addUserForm
      ),
      // .then((res) => {
      // console.log(res);
      // setIsSaved(true);
      // })
      // .catch((err) => {
      //   console.log(err);
      //   // setIsError(true);
      // })
      // .finally(() => {
      //   // console.log("Finally !!!!!");
      // }),
      {
        loading: "Submitting form",
        success: "POST Success !!",
        error: "Unable to create user. Try again later.",
        // error: (err) => err.message,
      }
    );
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

        {/* {isSaved && <div className="alert alert-success">POST Success !!</div>} */}
        {/* {isError && (
          <div className="alert alert-danger">
            Unable to create user. Try again later.
          </div>
        )} */}
        <Toaster />

        <button type="submit" className="btn btn-primary">
          Create User
        </button>
      </form>
    </div>
  );
};

export default AddUser;
