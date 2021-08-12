import React from "react";
import companyLogo from "./CompanyLogo.png";
import "./App.css";
export default function CompanyLogoBar() {
  return (
    <div className="company-logo-bar">
      <img src={companyLogo} alt="" className="image"></img>
      <h1>Excellence Technosoft</h1>
      <h1>TEST 1 : TODO LIST</h1>
    </div>
  );
}
