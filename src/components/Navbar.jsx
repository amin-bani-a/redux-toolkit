import { CartIcon } from "../icons.jsx";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector.js";

import React from "react";

const Navbar = () => {
  const { amount } = useSelector((store) => store.cart);
  console.log(amount);
  return (
    <nav>
      <div className="nav-center">
        <h3>redux toolkit</h3>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">0</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;