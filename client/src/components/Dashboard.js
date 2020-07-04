import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <h5>Here are the surveys list you have</h5>
      <div className="fixed-action-btn">
        <Link to="/surveys/new" className="btn-floating btn-large red">
          <i className="large material-icons">add</i>
        </Link>
      </div>
    </>
  );
};

export default Dashboard;