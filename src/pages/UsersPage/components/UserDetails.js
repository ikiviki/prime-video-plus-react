import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UserDetails = () => {
  const [user, setUser] = useState([]);

  // Reading URL param (userId) through useParams().
  const { userId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    /*
      What's the REST API URL? https://jsonplaceholder.typicode.com/users/1 or /2 or /3
      What's the HTTP Method? GET
      What's the REST API Client Tool? axios
      Should we send any form data? NO
    */
    const fetchUserById = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        setUser(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchUserById();
  }, []);

  return (
    <div className="row mt-2">
      <h2>
        <span>View User Details</span>
      </h2>
      <div className="col-md-12">
        <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => navigate("/users")}>
          Go Back
        </button>
        <div className="card mt-2">
          <div className="card-header">
            You are viewing details of User Id: {user.id}
          </div>
          <div className="card-body">
            <h5 className="card-title">Name: {user.name}</h5>
            <p className="card-text">Email: {user.email}</p>
            <p className="card-text">Phone: {user.phone}</p>
            <button className="btn btn-primary">Edit</button>
            <button className="btn btn-outline-danger">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
