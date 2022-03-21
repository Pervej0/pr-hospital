import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DoctorDetails = () => {
  const { doctorId } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/doctors/${doctorId}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="container">
      <div className="my-14">
        <div>
          <img src={data.photo} alt="" />
        </div>
        <div>
          <h2 className="text-2xl mt-3">{data.name}</h2>
          <small className="font-semibold text-green-600">{data.degree}</small>
          <div>
            <h5>
              <FontAwesomeIcon icon={faPhone} /> {data.phone}&nbsp;
            </h5>
            <h5>
              <FontAwesomeIcon icon={faEnvelope} /> &nbsp;
              {data.email}
            </h5>
          </div>
          <p className="mt-3">
            Primary duties: A medical director is the highest level of a doctor,
            and they hold the most power and responsibility in a hospital or
            clinic. They coordinate and direct medical and health services for
            an entire facility or a medical department within a facility Primary
            duties: A medical director is the highest level of a doctor, and
            they hold the most power and responsibility in a hospital or clinic.
            They coordinate and direct medical and health services for an entire
            facility or a medical department within a facility
          </p>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
