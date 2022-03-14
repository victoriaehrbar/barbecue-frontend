import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home </Link>
        </li>
        <li>
          <Link to="/barbecues"> Barbecue Restaurants</Link>
        </li>
        <li>
          <Link to="/barbecues/new"> Add a New Barbecue Restaurant</Link>
        </li>
      </ul>
    </div>
  );
}