import React, { useState } from "react";
import SurveyForm from "./SurveyForm";
import SurveyFormReview from "./SurveyFormReview";
import { reduxForm } from "redux-form";

const SurveyNew = () => {
  const [showFormReview, setShowFormReview] = useState(false);

  const renderContent = () => {
    return showFormReview ? (
      <SurveyFormReview onCancel={() => setShowFormReview(false)} />
    ) : (
      <SurveyForm onSurveySubmit={() => setShowFormReview(true)} />
    );
  };

  return <div>{renderContent()}</div>;
};

export default reduxForm({
  form: "surveyForm",
})(SurveyNew);
