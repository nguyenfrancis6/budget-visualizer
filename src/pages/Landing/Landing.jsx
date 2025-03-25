import React from "react";
import "./Landing.css";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="opening">
      <p className="opening-p1">Want To Manage Your Finances Better?</p>
      <br />
      <p className="opening-p2">We Make It Easy.</p>
      <br />
      <Link to='/choice'>
        <button className="start-button">Get started &rarr;</button>
      </Link>
    </div>
  );
};

export default Landing;
