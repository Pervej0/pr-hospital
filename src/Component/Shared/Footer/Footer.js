import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="bg-green-600">
      <div className="container py-12">
        <div className="grid md:grid-cols-3 mb-14 gap-x-5 gap-y-8 sm:grid-cols-2 grid-cols-1 border border-0 border-t border-white pt-10">
          <div>
            <h1 className="text-xl text-white uppercase mb-6">Contact Us</h1>
            <ul>
              <li className="flex text-white gap-x-6 items-baseline mb-3">
                <span>
                  <FontAwesomeIcon className="text-white" icon={faEnvelope} />
                </span>
                <div className="text-left">
                  <p>support@gmail.com</p>
                  <p>info@gmail.com</p>
                </div>
              </li>
              <li className="flex text-white gap-x-6 items-baseline mb-3">
                <span>
                  <FontAwesomeIcon className="text-white" icon={faPhone} />
                </span>
                <div className="text-left">
                  <p>+0012111123</p>
                  <p>+0012111123</p>
                </div>
              </li>
              <li className="flex text-white gap-x-6 items-baseline mb-3">
                <span>
                  <FontAwesomeIcon className="text-white" icon={faPaperPlane} />
                </span>
                <div className="text-left">
                  <p>Dhaka Bangladesh</p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-xl text-white uppercase mb-6">Subscribe Us</h1>
            <p className="text-white">
              Subscribe us to get alert the latest news and views from our side.
            </p>
            <div>
              <input
                className="bg-transparent border rounded text-white placeholder:text-black border-white px-2 w-full mt-3 py-3"
                type="email"
                placeholder="Enter your email"
              />
              <button className="text-black uppercase rounded px-6 py-2 mt-3 bg-white">
                Subscribe
              </button>
            </div>
          </div>
          <div className="ml-6">
            <h1 className="text-xl text-white uppercase mb-6">
              Important links
            </h1>
            <div className="flex gap-x-16 gap-y-3">
              <ul className="text-white leading-8">
                <li className="hover:text-gray-300">Support</li>
                <li className="hover:text-gray-300">News</li>
                <li className="hover:text-gray-300">Careers</li>
                <li className="hover:text-gray-300">Gallery</li>
                <li className="hover:text-gray-300">Blog</li>
              </ul>

              <ul className="text-white leading-8">
                <li className="hover:text-gray-300">Support</li>
                <li className="hover:text-gray-300">News</li>
                <li className="hover:text-gray-300">Careers</li>
                <li className="hover:text-gray-300">Gallery</li>
                <li className="hover:text-gray-300">Blog</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* last footer */}
      <div className="border border-0 border-t border-white">
        <div className="md:mx-20 mx-3 py-7">
          <div className="flex justify-between gap-y-3 sm:flex-nowrap flex-wrap">
            <div>
              <p className="text-white text-sm">
                Copyright © 2022, All Right Reserved
              </p>
            </div>
            <div>
              <ul className="flex gap-x-2 text-sm">
                <li className="text-white border border-0 border-r-2 border-white leading-0">
                  <Link to="/Home" className="sm:mx-4 mr-4">
                    Home
                  </Link>
                </li>
                <li className="text-white border border-0 border-r-2 border-white leading-0">
                  <Link to="/about" className="mx-4">
                    About
                  </Link>
                </li>
                <li className="text-white leading-0">
                  <Link to="/contact" className="mx-4">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
