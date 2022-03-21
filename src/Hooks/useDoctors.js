import React, { useEffect, useState } from "react";

const useDoctors = () => {
  const [doctorsData, setDoctorsData] = useState([]);
  // const [doctorCount, setDoctorCount] = useState(0);
  // const [currentPage, setCurrentPage] = useState(0);
  // const perPageItem = 6;
  // setDoctorCount(Math.ceil(doctorsData.length / perPageItem));

  useEffect(() => {
    fetch(`http://localhost:5000/doctors`)
      .then((res) => res.json())
      .then((data) => setDoctorsData(data));
  }, []);

  return [doctorsData];
};

export default useDoctors;
