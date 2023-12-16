import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const AddUser = () => {
  const [addUserForm, setAddUserForm] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const { userId } = useParams();
  useEffect(() => {
    const fetchUserById = async () => {
      toast.dismiss();
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        let responseData = response.data;
        setAddUserForm({
          name: responseData.name,
          phone: responseData.phone,
          email: responseData.email,
        });
      } catch (err) {
        console.log(err);
      }
    };

    if (userId) {
      fetchUserById();
    }
  }, []);

  let submitButtonName = userId ? "Update User" : "Create User";
  const [submitButton, setSubmitButton] = useState(submitButtonName);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
    },
  });

  // console.log(errors); // Form Validation error messages.

  // const [isSaved, setIsSaved] = useState(false);
  // const [isError, setIsError] = useState(false);

  const handleChange = (event) => {
    setAddUserForm({
      ...addUserForm,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (data) => {
    // const handleSubmit = (event) => {
    // event.preventDefault();
    // console.log(addUserForm); // submittable form data to the REST API

    // Let's send the above data to the REST API
    // 1. What's the REST API URL? https://jsonplaceholder.typicode.com/users
    // 2. What's the HTTP Method? POST
    // 3. What's the REST API Client Tool? axios (npm i axios) or fetch
    // 4. What's the form data? addUserForm
    // debugger;
    toast.promise(
      // axios.post("https://jsonplaceholder.typicode.com/users", data),
      userId
        ? axios.put(
            `https://jsonplaceholder.typicode.com/users/${userId}`,
            addUserForm
          )
        : axios.post("https://jsonplaceholder.typicode.com/users", addUserForm),
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
        loading: () => {
          setSubmitButton(userId ? "Updating User..." : "Creating User...");
          document.getElementById("submitButton").disabled = true;
          return "Submitting Form";
        },
        success: () => {
          setSubmitButton(submitButtonName);
          console.log(`Payload : `);
          console.log(addUserForm);
          !userId &&
            setAddUserForm({
              name: "",
              phone: "",
              email: "",
            });
          document.getElementById("submitButton").disabled = false;
          return userId ? "PUT Success !!" : "POST Success !!";
        },
        error: () => {
          setSubmitButton(submitButtonName);
          document.getElementById("submitButton").disabled = false;
          return "Unable to create user. Try again later.";
        },
        // error: (err) => err.message,

        // TODO: there is an error for use state - possible solution - useEffect();
      }
    );
  };

  return (
    <div className="row">
      <h1>{userId ? `Edit User ${userId}` : "Add User"}</h1>
      {/* Normal Form Submit */}
      {/* <form className="col-md-4 offset-md-4" onSubmit={handleFormSubmit}> */}
      {/* React Hook Form Submit */}
      <form
        className="col-md-4 offset-md-4"
        onSubmit={handleSubmit((data) => {
          handleFormSubmit(data);
        })}
      >
        <button
          type="button"
          className="btn btn-outline-secondary mb-3"
          onClick={() =>
            userId ? navigate(`/users/${userId}`) : navigate("/users")
          }
        >
          Go Back
        </button>
        <div className="mb-3">
          <label htmlFor="nameInput" className="form-label">
            Name
          </label>
          <input
            {...register("name", { required: "* Required" })}
            type="text"
            className="form-control"
            id="nameInput"
            name="name"
            placeholder="Enter Name"
            value={addUserForm.name}
            onChange={handleChange}
          />
          <p className="text-danger">{errors.name?.message}</p>
        </div>
        <div className="mb-3">
          <label htmlFor="phoneInput" className="form-label">
            Phone
          </label>
          <input
            {...register("phone", {
              required: "* Required",
              maxLength: { value: 10, message: "Max length is 10" },
            })}
            type="text"
            className="form-control"
            id="phoneInput"
            name="phone"
            placeholder="Enter Phone"
            value={addUserForm.phone}
            onChange={handleChange}
          />
          <p className="text-danger">{errors.phone?.message}</p>
        </div>
        <div className="mb-3">
          <label htmlFor="emailInput" className="form-label">
            Email address
          </label>
          <input
            {...register("email", {
              required: "* Required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Please enter a valid email",
              },
            })}
            type="email"
            className="form-control"
            id="emailInput"
            name="email"
            placeholder="Enter Email"
            value={addUserForm.email}
            onChange={handleChange}
          />
          <p className="text-danger">{errors.email?.message}</p>
        </div>

        {/* {isSaved && <div className="alert alert-success">POST Success !!</div>} */}
        {/* {isError && (
          <div className="alert alert-danger">
            Unable to create user. Try again later.
          </div>
        )} */}
        <Toaster />

        <button id="submitButton" type="submit" className="btn btn-primary">
          {submitButton}
        </button>
      </form>
    </div>
  );
};

export default AddUser;
