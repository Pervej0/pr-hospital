import React, { useState } from "react";
import useDoctor from "../../Hooks/useDoctors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Doctors = () => {
  const [doctorsData] = useDoctor();
  return (
    <div className="container">
      <h1 className="my-10 text-xl uppercase font-semibold">
        Add a New Doctor&gt;&gt;
      </h1>
      <div className="grid md:grid-cols-3 gap-8 sm:grid-cols-2 grid-cols-1">
        {doctorsData.map((item) => (
          <div key={item._id} className="border">
            <div>
              <img className="w-full" src={item.photo} alt="" />
            </div>
            <div className="px-3">
              <div className="my-3">
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <small>{item.degree}</small>
              </div>
              <div>
                <h5>
                  <FontAwesomeIcon icon={faPhone} /> {item.phone}&nbsp;
                </h5>
                <h5>
                  <FontAwesomeIcon icon={faEnvelope} /> &nbsp;
                  {item.email}
                </h5>
                <Link
                  to={`${item._id}`}
                  className="my-3 inline-block px-3 py-1 font-semibold rounded border border-black"
                >
                  Read more..
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
