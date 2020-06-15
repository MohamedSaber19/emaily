import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";

function Header(props) {
  console.log(props);
  const renderContent = () => {
    switch (props.auth) {
      case null:
        return "waiting";
      case false:
        return (
          <li>
            <a href="/auth/google">Login with Google</a>
          </li>
        );
      default:
        return [
          <li key={1}>
            <Payments />
          </li>,
          <li key={3} style={{ margin: "0 10px" }}>
            Credits: {props.auth.credits}
          </li>,
          <li key={2}>
            <a href="/api/logout">Logout</a>
          </li>,
        ];
    }
  };
  return (
    <nav>
      <div className="nav-wrapper">
        <Link
          to={props.auth ? "/surveys" : "/"}
          className="left brand-logo"
          style={{ paddingLeft: "5px" }}
        >
          Emaily
        </Link>
        <ul id="nav-mobile" className="right ">
          {renderContent()}
        </ul>
      </div>
    </nav>
  );
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
