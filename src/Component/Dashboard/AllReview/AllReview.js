import React, { useEffect, useState } from "react";

const Allreview = () => {
  const [reviews, Reviews] = useState([]);
  const [isDone, setIsDone] = useState(false);
  const [reviewsCount, setReviewsCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const perPageItem = 3;

  useEffect(() => {
    fetch(
      `http://localhost:5000/reviewlist?currentPage=${currentPage}&&perPageItem=${perPageItem}`
    )
      .then((res) => res.json())
      .then((data) => {
        Reviews(data.products);
        setReviewsCount(Math.ceil(data.count / perPageItem));
      });
  }, [isDone, currentPage]);

  const handleDelete = (id) => {
    const confirm = window.confirm("Are sure want to delete this item?");
    if (confirm) {
      fetch(`http://localhost:5000/reviewlist/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            alert("Successfully Deleted");
            setIsDone(true);
          }
        });
    }
  };

  const handlePagination = (num) => {
    setCurrentPage(num);
  };

  return (
    <div className="md-px-22 px-4">
      <div className="flex flex-col mt-12">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="w-full">
                <thead>
                  <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                    <th className="px-4  py-3">i/d</th>
                    <th className="px-4 py-3">Name</th>
                    <th className="px-4 py-3">Profession</th>
                    <th className="px-4 py-3">Details</th>
                    <th className="px-4 py-3">Stars</th>
                    <th className="px-4 py-3">Manage</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {reviews.length === 0 && <tr>No Result Found</tr>}
                  {reviews?.map((item, index) => (
                    <tr key={item._id} className="text-gray-600">
                      <td className="px-4 py-3 border">{index + 1}</td>
                      <td className="px-4 py-3 border text-lg text-md font-semibold">
                        {item.name}
                      </td>
                      <td className="px-4 py-3 border text-md font-semibold">
                        {item.profession}
                      </td>
                      <td className="px-4 py-3 border text-md font-semibold">
                        {item.extraDetails}
                      </td>
                      <td className="px-4 py-3 border text-md font-semibold">
                        {item.stars}
                      </td>
                      <td className="px-4 py-3 border text-sm">
                        <button
                          onClick={() => handleDelete(item._id)}
                          className="text-white bg-red-600 px-2"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {reviews.length > 0 &&
                [...Array(reviewsCount)?.keys()]?.map((number) => (
                  <button
                    key={number}
                    onClick={() => handlePagination(number)}
                    className={`border border-black px-4 py-2 ${
                      number === currentPage ? "bg-gray-700 text-white" : ""
                    }`}
                  >
                    {number}
                  </button>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Allreview;
