import React, { useState, useEffect, useCallback } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  auth,
  signInWithEmailAndPassword,
  signInWithgoogle,
  signInWithFacebook,
} from "../../shared/firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignIn(props) {
  const emailInput = useCallback((inputElement) => {
    if (inputElement) {
      inputElement.focus();
    }
  }, []);
  const history = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [user, loading, error] = useAuthState(auth);
  const [errorLogin, setErrorLogin] = useState({});
  const logInEmailandPassword = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      let errors = {};
      if (err.code === "auth/wrong-password") {
        errors.password = "Password is incorrect";
      }
      if (err.code === "auth/user-not-found") {
        errors.user = "user is incorrect";
      }
      setErrorLogin(errors);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const onSubmitForm = (e) => {
    e.preventDefault();
    setFormErrors(validate(form));
  };
  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Email is required!";
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = "Invalid email!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    }
    return errors;
  };
  const login = () => {
    if (form.email !== "" && form.password !== "") {
      logInEmailandPassword(form.email, form.password);
      if (user) {
        toast.success("Login successful");
        history("/");
      }
    }
    if (user) {
      toast.success("Login successful");
      history("/");
    }
  };
  useEffect(() => {
    if (Object.keys(formErrors).length === 0) {
      login();
    }
  }, [formErrors, user]);
  return (
    <>
      <div className="fixed z-[3] left-1/2 -translate-x-1/2 w-full px-6 pt ">
        <div className="w-[500px] mx-auto mt-20 text-center sm:max-w-[280px] sm:mt-2">
          <div>
            <p className="text-5xl">
              Sign In To <span className="text-yellow-color">Movflx</span>{" "}
            </p>
            <div className="flex justify-center my-5">
              <p
                className="text-blue-900 px-3 py-3  bg-white border text-2xl rounded-full mx-1 hover:opacity-40"
                onClick={() => {
                  signInWithFacebook();
                }}
              >
                {" "}
                <FaFacebookF />
              </p>
              <p
                className="px-3 py-3  bg-white border text-2xl rounded-full mx-1 hover:opacity-40"
                onClick={() => {
                  signInWithgoogle();
                }}
              >
                {" "}
                <FcGoogle />{" "}
              </p>
            </div>
            <p className="text-lg">or use your account:</p>
          </div>
          <div>
            <form onSubmit={onSubmitForm}>
              <div className="my-5">
                <input
                  className="bg-white text-black px-5 py-4 border-solid rounded-md focus:border-yellow-color focus:border-2 focus:outline-none w-full"
                  placeholdertype="email"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                  ref={emailInput}
                ></input>
                <p>{formErrors.email || errorLogin.user}</p>
              </div>
              <div className="my-5">
                <input
                  className="bg-white text-black  px-5 py-4 border-solid rounded-md focus:border-yellow-color focus:border-2 focus:outline-none  w-full"
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                ></input>
                <p>{formErrors.password || errorLogin.password}</p>
              </div>
              <div className="my-8">
                <button type="submit" className="btn border-yellow-color">
                  SIGN IN
                </button>
              </div>
            </form>
          </div>
          <div className="flex justify-center text-lg">
            <p>Not a member? </p>
            <p
              className="hover:cursor-pointer ml-3 text-yellow-color underline-offset-2 underline"
              onClick={() => {
                props.setShow(false);
              }}
            >
              Sign Up
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
