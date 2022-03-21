import React from "react";
import { Link, Outlet } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Dashboard = () => {
  const { isAdmin } = useAuth();
  return (
    <div className="border-b border-t">
      <div className="bg-gray-100 font-sans leading-normal">
        <div className="flex bg-gray-200">
          <div className="dashboard-sidebar md:flex-nowrap flex-wrap py-4 sm:block md:w-1/5 sm:w-2/5 w-auto bg-gray-900 md:bg-gray-900 relative px-2 text-center md:pt-8 md:left-0 lg:relative">
            <div className="mx-auto lg:float-right lg:px-10">
              <ul className="list-reset flex flex-wrap flex-row md:flex-col flex-col text-center md:text-left">
                <li>
                  <Link
                    className="inline-block py-1 px-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-gray-400"
                    to="/dashboard"
                  >
                    Dashboard
                  </Link>
                </li>
                {isAdmin && (
                  <Link
                    className="inline-block py-1 px-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-gray-400"
                    to="addadmin"
                  >
                    - Add Admin
                  </Link>
                )}
                {isAdmin && (
                  <Link
                    className="inline-block py-1 px-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-gray-400"
                    to="adddoctor"
                  >
                    - Add Doctor
                  </Link>
                )}
                <Link
                  className="inline-block py-1 px-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-gray-400"
                  to="addreview"
                >
                  - Add Review
                </Link>
                <Link
                  className="inline-block py-1 px-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-gray-400"
                  to="myappointments"
                >
                  - My Appointments
                </Link>
                {isAdmin && (
                  <Link
                    className="inline-block py-1 px-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-gray-400"
                    to="allReview"
                  >
                    - All Review
                  </Link>
                )}
                {isAdmin && (
                  <Link
                    className="inline-block py-1 px-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-gray-400"
                    to="allAppointments"
                  >
                    - All Appointments
                  </Link>
                )}
              </ul>
            </div>
          </div>
          <div className="flex-auto">
            <Outlet>
              <h1>Welcome To Dashboard</h1>
            </Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
