import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAmbulance,
  faUserDoctor,
  faMedkit,
} from "@fortawesome/free-solid-svg-icons";

const MainFeatures = () => {
  return (
    <div className="my-20">
      <div className="container">
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          <div className="text-center">
            <div className="text-green-600">
              <FontAwesomeIcon icon={faAmbulance} size="3x" />
            </div>
            <div className="mt-6">
              <h4 className="my-2 text-xl font-semibold">
                ADVANCED TECHNOLOGY
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                quis placerat urna. Nulla nulla diam, adipiscing non ornare non,
                commodo
              </p>
            </div>
          </div>
          <div className="text-center">
            <div className="text-green-600 text">
              <FontAwesomeIcon icon={faUserDoctor} size="3x" />
            </div>
            <div className="mt-6">
              <h4 className="my-2 text-xl font-semibold">
                ADVANCED TECHNOLOGY
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                quis placerat urna. Nulla nulla diam, adipiscing non ornare non,
                commodo
              </p>
            </div>
          </div>
          <div className="text-center">
            <div className="text-green-600">
              <FontAwesomeIcon icon={faMedkit} size="3x" />
            </div>
            <div className="mt-6">
              <h4 className="my-2 text-xl font-semibold">
                ADVANCED TECHNOLOGY
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                quis placerat urna. Nulla nulla diam, adipiscing non ornare non,
                commodo
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainFeatures;
