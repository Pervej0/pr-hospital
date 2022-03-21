import React from "react";

const HealthTips = () => {
  return (
    <div className="container healthTips">
      <div className="grid gap-10 pt-12 pb-20 md:grid-cols-2 grid-cols-1 items-center">
        <div className="box"></div>
        <div>
          <h2 className="text-2xl font-semibold">Health Tips</h2>
          <small className="text-green-600">form Dr. Mashur</small>
          <p>
            Health centers are community-based and patient-directed
            organizations that deliver comprehensive, culturally competent,
            high-quality primary health care services to the nation’s most
            vulnerable individuals and families, including people experiencing
            homelessness, agricultural workers, residents of public housing, and
            veterans.
            <br />
            <br />
            Health centers integrate access to pharmacy, mental health,
            substance use disorder, and oral health services in areas where
            economic, geographic, or cultural barriers limit access to
            affordable health care. By emphasizing coordinated care management
            of patients with multiple health care needs and the use of key
            quality improvement practices, including health information
            technology, health centers reduce health disparities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HealthTips;
