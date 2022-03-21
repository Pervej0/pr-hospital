import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const MyAppoinments = () => {
  const [data, setdata] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false);
  const { user } = useAuth();
  useEffect(() => {
    fetch(`http://localhost:5000/appointments/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setdata(data);
        setIsSuccess(true);
      });
  }, []);

  return (
    <div className="py-10 px-4">
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {!isSuccess ? (
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
          </div>
        ) : (
          data?.map((item) => (
            <div key={item._id} className="border border-black rounded p-6">
              <div>
                <h3>
                  <span className="font-semibold">Patient Name: </span>
                  {item.fullName}
                </h3>
                <h3>
                  <span className="font-semibold">Appointment Date:</span>
                  {item.date}
                </h3>
                <h3>
                  <span className="font-semibold">Status:</span> {item.status}
                </h3>
                <Link
                  to={`/dashboard/makePayment/${item._id}`}
                  className="py-1 inline-block px-4 mt-4 bg-green-600 rounded font-semibold"
                >
                  Pay
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyAppoinments;
