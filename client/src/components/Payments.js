import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../actions/index";

function Payments(props) {
  return (
    <StripeCheckout
      amount={500}
      token={(token) => props.handleToken(token)}
      stripeKey={process.env.REACT_APP_STRIPE_KEY}
      description="5$ for 5 emails"
      name="Emaily"
    >
      <button className="btn">Add Credits</button>
    </StripeCheckout>
  );
}

export default connect(null, actions)(Payments);
