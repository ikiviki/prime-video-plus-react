import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const UsersPage = () => {
  return (
    <>
      <Helmet>
        <title>User Management</title>
      </Helmet>
      <div className="row">
        <h2>Listing Users</h2>
        <div className="col-md-3 mt-2">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Name: John</h5>
              <p className="card-text">E-Mail: j@k.com</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <Link to="/users/1" className="btn-link">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UsersPage;
