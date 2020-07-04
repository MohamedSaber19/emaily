import React from "react";

const SurveyField = ({ input, label, meta: { touched, error } }) => {
  return (
    <div>
      <label style={{ marginBottom: "10px" }}>{label}</label>
      <input {...input} />
      <div className="red-text" style={{ marginBottom: "20px" }}>
        {touched && error}
      </div>
    </div>
  );
};

export default SurveyField;
