import React, { useState } from "react";

const AddAdmin = () => {
  const [email, setEmail] = useState("");

  const handleAdminCreate = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5000/admin/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount === 1) {
          alert("Successfully admin created");
        } else {
          alert("User dosen't exist");
        }
      });
  };
  return (
    <div className="text-center">
      <h2 className="uppercase text-2xl font-semibold my-6">
        Enter your email to make admin
      </h2>
      <form onSubmit={handleAdminCreate} className="w-4/6 mx-auto">
        <input
          className="py-2 border border-black px-2 w-full"
          onBlur={(e) => setEmail(e.target.value)}
          type="email"
          required
          placeholder="Enter email.."
        />
        <button
          type="submit"
          className="block rounded py-1 px-3 mt-2 font-semibold uppercase bg-green-600 text-white"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default AddAdmin;
