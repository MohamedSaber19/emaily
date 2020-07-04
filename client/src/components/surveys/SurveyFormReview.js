import React from "react";
import { connect } from "react-redux";
import formFields from "./formFields";
import * as actions from "../../actions";
import { withRouter } from "react-router-dom";

const SurveyFormReview = ({ onCancel, formValues, submitForm, history }) => {
  const reviewFields = () => {
    return formFields.map(({ name, label }) => {
      return (
        <div key={name}>
          <label>{label}</label>
          <div>{formValues[name]}</div>
        </div>
      );
    });
  };
  return (
    <div>
      <h5>Please review your choice</h5>
      {reviewFields()}
      <button
        className="btn yellow darken-3 white-text left"
        onClick={onCancel}
        style={{ marginTop: "10px" }}
      >
        Cancel
      </button>
      <button
        className="btn green darken-3 white-text right"
        onClick={() => submitForm(formValues, history)}
        style={{ marginTop: "10px" }}
      >
        <i className="material-icons right">email</i>
        Send
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    formValues: state.form.surveyForm.values,
  };
};

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
