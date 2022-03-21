import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useForm } from "react-hook-form";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import useAuth from "../../Hooks/useAuth";

const Appoinments = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();

  const onSubmit = (data) => {
    data.email = user.email;
    data.status = "Pending";
    fetch("http://localhost:5000/appointments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert(
            "Successfully appointment completed. We will get back to you through a phone call. Stay tune!"
          );
        }
      });
    reset();
  };
  return (
    <div className="container">
      <h1 className="my-10 text-xl uppercase font-semibold">
        Appointments&gt;&gt;
      </h1>
      <div className="grid md:grid-cols-3 gap-y-5 gap-x-10 grid-cols-1 my-10 mb-16">
        <form className="col-span-2" onSubmit={handleSubmit(onSubmit)}>
          <label className="text-black font-semibold my-1 inline-block">
            Patient Name
          </label>
          <input
            className="block border border-black w-full px-3 py-1 text-lg mb-2"
            type="text"
            placeholder="Name"
            {...register("fullName", { required: true })}
          />
          <label className="text-black font-semibold my-1 inline-block">
            Appointments Date
          </label>
          <input
            className="block border border-black w-full px-3 py-1 text-lg mb-2"
            type="date"
            placeholder="Appointments date"
            {...register("date", { required: true })}
          />
          <label className="text-black font-semibold my-1 inline-block">
            Age
          </label>
          <input
            className="block border border-black w-full px-3 py-1 text-lg mb-2"
            type="number"
            placeholder="Age"
            {...register("age", { required: true })}
          />
          <label className="text-black font-semibold my-1 inline-block">
            Select Department
          </label>
          <select
            {...register("class", { required: true })}
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
            Phone
          </label>
          <input
            className="block border border-black w-full px-3 py-1 text-lg mb-2"
            type="number"
            placeholder="Phone no"
            {...register("phone", { required: true })}
          />
          <label className="text-black font-semibold my-1 inline-block">
            Message
          </label>
          <textarea
            className="block border border-black w-full px-3 py-1 text-lg mb-2"
            placeholder="Message"
            {...register("message")}
          />
          <div className="my-3">
            <label className="text-black font-semibold my-1 inline-block mr-12">
              Gender
            </label>
            <div className="form-check">
              <label htmlFor="male">
                <input
                  {...register("gender", { required: true })}
                  type="radio"
                  name="gender"
                  value="male"
                  className="form-check-input"
                  id="male"
                />
                &nbsp;Male
              </label>
              <label htmlFor="female" className="ml-10">
                <input
                  {...register("gender", { required: true })}
                  type="radio"
                  name="gender"
                  value="female"
                  className="form-check-input"
                  id="female"
                />
                &nbsp;Female
              </label>
              <label htmlFor="other" className="ml-10">
                <input
                  {...register("gender", { required: true })}
                  type="radio"
                  name="gender"
                  value="other"
                  className="form-check-input"
                  id="other"
                />
                &nbsp;Other
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="block rounded py-1 px-3 mt-2 font-semibold uppercase bg-green-600 text-white"
          >
            Submit
          </button>
        </form>
        <div>
          <div className="border-b-2 border-black py-5">
            <h2 className="font-semibold text-xl mb-2">Book an Appoinment</h2>
            <p className="mb-2">
              Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
              fringilla mauris sit amet nibh.
            </p>
            <div className="bg-green-600 py-3 text-white px-3 my-1 flex gap-4 items-center">
              <FontAwesomeIcon icon={faPhone} />{" "}
              <p>+9343222000, +9113222000 </p>
            </div>
            <div className="bg-green-600 py-3 text-white px-3 flex gap-4 items-center">
              <FontAwesomeIcon icon={faEnvelope} />
              <p>contact@gmail.com</p>
            </div>
          </div>
          <div className="my-4">
            <h2 className="font-semibold text-xl mb-2">After Booking</h2>
            <p>
              Hi fill in the details and submit the form. We will contact you
              via phone or email and fix a time schedule. These are the thing
              you need to carry with you when you come in for the appointment
              wit the doctor.
            </p>
            <ul className="mt-3">
              <li>- Previous Medical History</li>
              <li>- Enlisted Previous Numbers</li>
              <li>- Discussion with Parents</li>
              <li>- Make sure you are feeling good</li>
              <li>- Have someone eith you</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appoinments;
