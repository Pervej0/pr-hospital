import React from "react";
import { useForm } from "react-hook-form";

const AddDoctor = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:5000/doctors", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("Successfully added");
        }
      });
    reset();
  };
  return (
    <div className="container">
      <h1 className="my-10 text-xl uppercase font-semibold">
        Add a New Doctor&gt;&gt;
      </h1>
      <div className="grid md:grid-cols-3 gap-y-5 gap-x-10 grid-cols-1 my-10 mb-16">
        <form className="col-span-2" onSubmit={handleSubmit(onSubmit)}>
          <label className="text-black font-semibold my-1 inline-block">
            Full Name
          </label>
          <input
            className="block border border-black w-full px-3 py-1 text-lg mb-2"
            type="text"
            placeholder="Name"
            {...register("name", { required: true })}
          />
          <label className="text-black font-semibold my-1 inline-block">
            Photo url
          </label>
          <input
            className="block border border-black w-full px-3 py-1 text-lg mb-2"
            type="text"
            placeholder="Photo url.."
            {...register("photo", { required: true })}
          />
          <label className="text-black font-semibold my-1 inline-block">
            Your email
          </label>
          <input
            className="block border border-black w-full px-3 py-1 text-lg mb-2"
            type="text"
            placeholder="Email.."
            {...register("photo", { required: true })}
          />
          <label className="text-black font-semibold my-1 inline-block">
            Speciality Department
          </label>
          <select
            {...register("speciality", { required: true })}
            className="block border border-black w-full px-3 py-1 text-lg mb-2"
          >
            <option selected disabled>
              Select
            </option>
            <option value="gynecelogy">Gynecelogy</option>
            <option value="medicine">Medicine</option>
            <option value="neurologist">Neurology</option>
            <option value="ophthalmology">Ophthalmology</option>
            <option value="Cardiology">Cardiology</option>
          </select>
          <label className="text-black font-semibold my-1 inline-block">
            Degree
          </label>
          <input
            className="block border border-black w-full px-3 py-1 text-lg mb-2"
            type="text"
            placeholder="Degree"
            {...register("degree", { required: true })}
          />
          <label className="text-black font-semibold my-1 inline-block">
            Phone
          </label>
          <input
            className="block border border-black w-full px-3 py-1 text-lg mb-2"
            type="number"
            placeholder="Phone no"
            {...register("phone", { required: true })}
          />

          <button
            type="submit"
            className="block rounded py-1 px-3 mt-2 font-semibold uppercase bg-green-600 text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;
