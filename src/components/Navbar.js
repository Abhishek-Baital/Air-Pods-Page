import React from "react";
import './Navbar.css'

const Navbar = () => {
  return (
    <>
    
    <div className="nav1">
      <ul className="ul1">
        <li>Store</li>
        <li>Mac</li>
        <li>iPad</li>
        <li>iPhone</li>
        <li>Watch</li>
        <li>AirPods</li>
        <li>TV & Home</li>
        <li>Entertainment</li>
        <li>Accessories</li>
        <li>Support</li>
      </ul>
    </div> 

    <div className="nav2">
      <div className="left">
        <h3>AirPods Pro(2nd generation)</h3>
      </div>
      <div className="right">
        <p>Overview</p>
        <p>Tech Specs</p>
        <p>Compare</p>
        <button className="button">Buy</button>
      </div>
    </div>

      <p className="para">Save ₹2000.00 instantly on AirPods Pro with HDFC Bank Credit Cards. Plus get 6 months of Apple Music free.** Shop now</p>
    </>
  );
};

export default Navbar;
