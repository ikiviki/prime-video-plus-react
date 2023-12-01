import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const UsersPage = () => {
  const [users, setUsers] = useState([]); // Positive state.
  const [isLoading, setIsLoading] = useState(true); // Loading state.
  const [isError, setIsError] = useState([]); // Negative state.

  // Will be called only after INITIAL RENDERING.
  useEffect(() => {
    // Ideal place for us to connect to REST API.
    console.log("Inside userEffect");
    /*
      What's the REST API URL? https://jsonplaceholder.typicode.com/users
      What's the HTTP Method? GET
      What's the REST API Client Tool? axios
      Should we send any form data? NO
    */
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        console.log(response.data); // Successful response.
        setUsers(response.data);
      } catch (err) {
        console.log(err); // Error response.
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []); // You can have dependency list in this array.

  return (
    <>
      <Helmet>
        <title>User Management</title>
      </Helmet>

      <div className="p-5 mb-4 bg-body-tertiary rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">User Management App!</h1>
          <p className="col-md-8 fs-4">
            Find all saved users, Create user, Fetch their details, Update and
            Delete as well
          </p>
          <Link
            to="/users/add"
            className="btn btn-primary btn-lg"
            type="button"
          >
            Create User
          </Link>
        </div>
      </div>

      <div className="row">
        <h2>Listing Users</h2>
        {users.map((user) => {
          return (
            <div className="col-md-3 mt-2" key={user.id}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{user.name}</h5>
                  <p className="card-text">E-Mail: {user.email}</p>
                  <div className="card-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <Link to={`/users/${user.id}`} className="btn-link">
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default UsersPage;
