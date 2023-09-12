import React, { useEffect } from "react";
import Metadata from "../layout/Metadata";
import Loader from "../layout/Loader/Loader";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Profile.css";
const Profile = () => {
  const navigate = useNavigate();
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);
  useEffect(() => {
    if (isAuthenticated === false) {
      navigate("/login");
    }
  }, [navigate, isAuthenticated]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Metadata title={`${user.name}'s Profile`} />
          <div className="profileBg">
            <div className="profileContainer">
              <div className="profilePic">
                <h1>My Profile</h1>
                <img src={user.avatar.url} alt={user.name} />
                <Link to="/me/update">Edit Profile</Link>
              </div>
              <div className="details">
                <div>
                  <h4>Full Name</h4>
                  <p>{user.name}</p>
                </div>
                <div>
                  <h4>Email</h4>
                  <p>{user.email}</p>
                </div>
                <div>
                  <h4>Joined On</h4>
                  <p>{String(user.createdAt).substr(0, 10)}</p>
                </div>
                <div>
                  <Link to="/orders">My Orders</Link>
                  <Link to="/password/update">Change Password</Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Profile;
