import React, { useState, useEffect } from "react";
import "./UpdateProfile.css";
import Loader from "../layout/Loader/Loader";
import { Link } from "react-router-dom";
import { BsKeyFill, BsKey } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  clearErrors,
  loadUser,
  updatePassword,
} from "../../actions/userAction";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";
import { UPDATE_PASSWORD_RESET } from "../../constants/userConstants";
import Metadata from "../layout/Metadata";

const UpdatePassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert();
  const { user } = useSelector((state) => state.user);
  const { error, isUpdated, loading } = useSelector((state) => state.profile);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const updatePasswordSubmit = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("password", password);
    myForm.set("confirmPassword", confirmPassword);
    dispatch(updatePassword(myForm));
  };

  useEffect(() => {
    if (user) {
      setPassword(user.password);
    }
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (isUpdated) {
      alert.success("Password updated");
      dispatch(loadUser());
      navigate("/account");
      dispatch({
        type: UPDATE_PASSWORD_RESET,
      });
    }
  }, [dispatch, error, alert, navigate, isUpdated, user]);

  return (
    <>
      <Metadata title="Update Password" />
      {loading ? (
        <Loader />
      ) : (
        <div className="profileBg">
          <div className="updateProfileContainer">
            <div className="updateProfileBox">
              <h2 className="updateProfileHeading">Update Password</h2>
              <form
                className="updateProfileForm"
                encType="multipart/form-data"
                onSubmit={updatePasswordSubmit}
              >
                <div className="updateProfileName">
                  <BsKey />
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="updateProfileName">
                  <BsKeyFill />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    required
                    name="confirmPassword"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>

                <input
                  type="submit"
                  value="Update Password"
                  className="updateProfileBtn"
                  disabled={loading ? true : false}
                />
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UpdatePassword;
