import { faVoteYea } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

const AllAppointments = () => {
  const [allAppointments, setAllappointments] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/appointments")
      .then((res) => res.json())
      .then((data) => setAllappointments(data));
  }, [allAppointments]);

  // delete a product
  const handleRemove = (id) => {
    const warning = window.confirm("Are you sure want to delete?");
    if (warning) {
      fetch(`http://localhost:5000/allappointments/${id}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.acknowledged) {
            const remainOrders = allAppointments.filter(
              (item) => item._id !== id
            );
            setAllappointments(remainOrders);
          }
        });
    }
  };

  // update product status
  const statusHandle = (id) => {
    fetch(`http://localhost:5000/allappointments/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="w-full">
              <thead>
                <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                  <th className="px-4 py-3">S/N</th>
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3">Email</th>
                  <th className="px-4 py-3">Phone</th>
                  <th className="px-4 py-3">Change Status</th>
                  <th className="px-4 py-3">Activity</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {allAppointments.map((item, index) => (
                  <tr key={item._id} className="text-gray-600">
                    <td className="px-4 py-3 border">{index + 1}</td>
                    <td className="px-4 py-3 border text-lg text-md font-semibold">
                      {item.fullName}
                    </td>
                    <td className="px-4 py-3 border text-md font-semibold">
                      {item.phone}
                    </td>
                    <td className="px-4 py-3 border text-md font-semibold">
                      {item.email}
                    </td>
                    <td className="px-4 py-3 border text-xs">
                      <p className="px-2 py-1 font-semibold leading-tight rounded-sm">
                        <span
                          className={
                            item.status === "Pending"
                              ? "text-yellow-700 bg-yellow-400 px-2"
                              : "text-green-700 bg-green-100 px-2"
                          }
                        >
                          {item.status}
                        </span>
                        &nbsp;
                      </p>
                    </td>
                    <td className="text-center border">
                      <button
                        className="p-1"
                        onClick={() => statusHandle(item._id)}
                      >
                        <FontAwesomeIcon
                          className="cursor-pointer"
                          title="edit status"
                          icon={faVoteYea}
                          size="lg"
                        />
                      </button>
                    </td>
                    <td className="px-4 py-3 border text-sm">
                      <button
                        onClick={() => handleRemove(item._id)}
                        className="text-white bg-red-600 px-2"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllAppointments;
