import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MakePayment = () => {
  const { appointmentId } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/payment/${appointmentId}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  console.log(data);
  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold">Payment Invoice</h1>
      <div>
        <div className="py-1 border-b">
          <h5 className="text-gray-700 font-semibold mt-3">{data.fullName}</h5>
          <h6>Fee: ${data.price}</h6>
        </div>
      </div>
    </div>
  );
};

export default MakePayment;
