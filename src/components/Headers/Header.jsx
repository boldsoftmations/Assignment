import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logoHidocBlack.png";

export const Header = () => {
  const categories = [
    "Anathesia",
    "Cardiology",
    "Critical Care",
    "Dentistry",
    "Dermotologist",
    "Diabetology",
  ];

  const Box = ({ category }) => {
    const [isClicked, setIsClicked] = useState(category === "Critical Care"); // Set 'isClicked' to true for 'Critical Care'

    const handleBoxClick = () => {
      setIsClicked(!isClicked);
    };

    return (
      <div
        style={{
          border: "1px solid #333",
          padding: "10px",
          minWidth: "150px",
          textAlign: "center",
          cursor: "pointer",
          backgroundColor: isClicked ? "#dbeef2" : "",
        }}
        onClick={handleBoxClick}
      >
        {category}
      </div>
    );
  };

  return (
    <>
      <header className="header">
        <div className="logo-container">
          <img src={Logo} alt="Logo" className="logo" />
        </div>
        <nav className="menu">
          <ul>
            <li>
              <a href="/">Drugs</a>
            </li>
            <li> | </li>
            <li>
              <a href="/">Calculators</a>
            </li>
            <li> | </li>
            <li>
              <a href="/">Articles</a>
            </li>
            <li> | </li>
            <li>
              <a href="/">News</a>
            </li>
            <li> | </li>
            <li>
              <a href="/">Quizzes</a>
            </li>
            <li> | </li>
            <li>
              <a href="/">Surveys</a>
            </li>
            <li> | </li>
            <li>
              <a href="/">Webinars</a>
            </li>
            <li> | </li>
            <li>
              <a href="/">Guidelines</a>
            </li>
          </ul>
        </nav>
        <div className="profile">
          <div className="hamburger-icon">&#9776;</div>
          <div className="profile-circle">A</div>
        </div>
      </header>
      <div
        style={{
          backgroundColor: "#dbeef2",
          padding: "30px",
          textAlign: "center",
          fontSize: "18px",
          fontWeight: "bold",
          color: "#333",
        }}
      >
        Your one-stop Solution for{" "}
        <span style={{ color: "#00bcd4" }}>MEDICAL LEARNING & UPDATES</span>
      </div>
      <div
        style={{
          backgroundColor: "#eff4f8",
          padding: "30px",
          textAlign: "center",
          fontSize: "18px",
          fontWeight: "bold",
          color: "#333",
        }}
      >
        Get Knowledge of the{" "}
        <span style={{ color: "#00bcd4" }}>APPROVED DRUGS</span>
        <div style={{ display: "inline-block", marginLeft: "40px" }}>
          <div style={{ position: "relative" }}>
            <input
              type="text"
              style={{
                padding: "8px",
                width: "300px",
                borderRadius: "20px",
                backgroundColor: "#dbeef2",
              }}
              placeholder="Search..."
            />
            <span
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                fontSize: "20px",
                cursor: "pointer",
              }}
            >
              &#128269;
            </span>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "50% 50%",
          gap: "20px",
          paddingLeft: "140px",
          paddingRight: "140px",
          paddingTop: "30px",
          fontSize: "18px",
          fontWeight: "bold",
          color: "#333",
        }}
      >
        <div style={{ gridColumn: "1 / 2", textAlign: "center" }}>
          <p>
            Dilymed Drug Database: The DailyMed Database contains 143072 labelling submitted to the Food and Drug Administration (FDA) by companies. DailyMed does not contain a Completeing listing of labeling for FDA-regulated products (e.g. lableling that is not submitted to the FDA).
          </p>
        </div>
        <div style={{ gridColumn: "2 / 3", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
          {categories.map((category, index) => (
            <Box key={index} category={category} />
          ))}
        </div>
        </div>
    </>
  );
};

export default Header;
