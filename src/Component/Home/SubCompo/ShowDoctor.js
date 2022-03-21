import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import useDoctors from "../../../Hooks/useDoctors";

const ShowDoctor = () => {
  const [doctorsData] = useDoctors();

  return (
    <div className="container py-16">
      <div className="grid md:grid-cols-3 gap-8 sm:grid-cols-2 grid-cols-1">
        {doctorsData.slice(0, 6).map((item) => (
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
      <div className="text-center my-8">
        <Link
          to="/doctors"
          className="px-3 border py-2 font-semibold bg-green-600 rounded text-white"
        >
          Load More
        </Link>
      </div>
    </div>
  );
};

export default ShowDoctor;
