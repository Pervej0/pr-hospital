import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Register = () => {
  const [userData, setUserData] = useState({});
  const { isLoading, signUp, error } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newuserData = { ...userData };
    newuserData[field] = value;
    setUserData(newuserData);
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
    signUp(
      userData.email,
      userData.password,
      userData.name,
      location,
      navigate
    );

    setUserData("");
  };
  return (
    <div>
      <div className="flex justify-center min-h-screen mb-20">
        {isLoading && (
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
          </div>
        )}
        {!isLoading && (
          <div className="container md:w-3/6 sm:w-2/3 my-24 my-auto max-w-md border-2 border-gray-200 p-3 bg-white">
            <div className="text-center my-6">
              {error && (
                <div
                  className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                  role="alert"
                >
                  <strong className="font-bold">Error!</strong>
                  <span className="block sm:inline">{error}</span>
                  <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                    <svg
                      className="fill-current h-6 w-6 text-red-500"
                      role="button"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <title>Close</title>
                      <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                    </svg>
                  </span>
                </div>
              )}
              <h1 className="text-3xl font-semibold text-gray-700">Register</h1>
              <p className="text-gray-500">Sign up to access your account</p>
            </div>

            <div className="m-6">
              <form onSubmit={handleRegisterSubmit} className="mb-4">
                <div className="mb-6">
                  <label
                    for="name"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    Your Name
                  </label>
                  <input
                    onChange={handleOnChange}
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                </div>
                <div className="mb-6">
                  <label
                    for="email"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    Email Address
                  </label>
                  <input
                    onChange={handleOnChange}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your email address"
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                </div>
                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <label
                      for="password"
                      className="text-sm text-gray-600 dark:text-gray-400"
                    >
                      Password
                    </label>
                  </div>
                  <input
                    onChange={handleOnChange}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Your password"
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                </div>
                <div className="mb-6">
                  <button
                    type="submit"
                    className="w-full px-3 py-2 text-black bg-yellow-500 rounded-md  focus:outline-none duration-100 ease-in-out"
                  >
                    Create an account
                  </button>
                </div>
                <p className="text-sm text-center text-gray-400">
                  Already have an account yet?
                  <Link
                    to="/login"
                    className="font-semibold text-indigo-500 focus:text-indigo-600 focus:outline-none focus:underline"
                  >
                    Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;
