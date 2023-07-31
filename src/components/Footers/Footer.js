import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        background: "#cfd8dc",
        textAlign: "center",
        padding: "10px 0",
      }}
    >
      <p style={{ margin: 0 }}>
        © Copyright 2023 Hidoc Dr. Inc.
      </p>
      <p style={{ margin: 0 }}>
        <a>Terms &amp; Conditions</a> | <a>Privacy Policy</a>
      </p>
    </footer>
  );
};

export default Footer;
