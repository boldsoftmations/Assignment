import React from "react";
import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";
import { AiOutlineFolder,AiOutlineCalculator, AiOutlineFile,AiOutlineFileText } from "react-icons/ai";
import Logo from "../../assets/logoHidocWhite.png";
import {MdOutlineEmergencyRecording} from "react-icons/md";
import {FcSurvey } from "react-icons/fc";

const SubFooter = () => {
  const categories = [
    { name: "Drug Database", icon: <AiOutlineFolder size={30} /> },
    { name: "Webinars", icon: <MdOutlineEmergencyRecording size={30} /> },
    { name: "Drugs Interaction", icon: <AiOutlineFile size={30} /> },
    { name: "Medical Calculator", icon: <AiOutlineCalculator size={30} /> },
    { name: "Articles", icon: <AiOutlineFileText size={30} /> },
    { name: "QUIZZES", icon: <AiOutlineFile size={30} /> },
    { name: "Diseases Database", icon: <AiOutlineFile size={30} /> },
    { name: "Surveys", icon: <FcSurvey size={30} /> },
  ];

  const backgroundColors = [
    "#40c4ff",
    "#f44336",
    "#448aff",
    "#4caf50",
    "#ff9800",
    "#448aff",
    "#40c4ff",
    "#f44336",
  ];

  const Box = ({ category, index }) => (
    <div
      style={{
        border: "1px solid #333",
        padding: "10px",
        minWidth: "150px",
        textAlign: "center",
        color: "#fff",
        backgroundColor: backgroundColors[index],
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ marginBottom: "10px" }}>{category.icon}</div>
      <div>{category.name}</div>
    </div>
  );

  return (
    <div
      style={{
        background: "#091734",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr", // Three equal-width columns
        gap: "20px",
        paddingLeft: "50px",
        paddingRight: "50px",
        paddingTop: "30px",
        fontSize: "18px",
        fontWeight: "bold",
        color: "#fff",
      }}
    >
      <div>
        <img src={Logo} alt="Logo" className="logo" />
        <p style={{ fontSize: "15px" }}>
          Fastest Growing Medical Platform for Doctors.
        </p>
        <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
          <FaInstagram size={30} color="#fff" />
          <FaFacebook size={30} color="#fff" />
          <FaYoutube size={30} color="#fff" />
          <FaLinkedin size={30} color="#fff" />
        </div>
      </div>
      <div>
        <div style={{ fontSize: "20px", marginBottom: "20px" }}>REACH US</div>
        <p style={{ fontSize: "15px", marginBottom: "10px" }}>
          Please contact the below details for any other information
        </p>
        <span
          style={{ fontSize: "20px", marginBottom: "10px", color: "#04aecc" }}
        >
          Email
        </span>
        <p style={{ fontSize: "15px", marginBottom: "10px" }}>info@hidoc.co</p>
        <span
          style={{ fontSize: "20px", marginBottom: "10px", color: "#04aecc" }}
        >
          Address:
        </span>
        <p style={{ fontSize: "15px", marginBottom: "10px" }}>
          Hidoc Dr. Inc. | Delaware C Corp | 1309 Coffeen Ave. Suite 1200,
          Sheridan WY, 82801
        </p>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "10px",
        }}
      >
        {categories.map((category, index) => (
          <Box key={index} category={category} index={index} />
        ))}
      </div>
    </div>
  );
};

export default SubFooter;
