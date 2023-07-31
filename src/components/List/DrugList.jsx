import React, { useState } from "react";

const DrugDataBox = ({ drugName, drugDetails }) => (
  <div style={{ marginBottom: "20px" }}>
    <div
      style={{ border: "1px solid #333", padding: "10px", textAlign: "center", height: "200px" }}
    >
      <p style={{ color: "#00bcd4", marginBottom: "10px" }}> {drugName}</p>
      <p> {drugDetails}</p>
    </div>
  </div>
);

const DrugList = ({ drugData }) => {
  const [selectedDrugIndex, setSelectedDrugIndex] = useState(0);
  const selectedDrug = drugData.length > 0 ? drugData[selectedDrugIndex] : null;

  const handleDrugNameClick = (index) => {
    setSelectedDrugIndex(index);
  };

  return (
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
      <div>
        <h2 style={{  border: "1px solid #333",borderBottom: 0,textAlign: "center" }}>Drug Data</h2>
        <div style={{ border: "1px solid #333", textAlign: "center", height: "200px" }}>
          {drugData.map((drug, index) => (
            <p
              key={drug.id}
              onClick={() => handleDrugNameClick(index)}
              style={{
                backgroundColor:
                  selectedDrugIndex === index ? "#00bcd4" : "transparent",
                cursor: "pointer",
                marginBottom: "10px",
                marginTop: "10px",
              }}
            >
              {drug.drugName}
            </p>
          ))}
        </div>
      </div>
      <div>
        <h2 style={{ border: "1px solid #333",borderBottom: 0,textAlign: "center" }}>Drug Details</h2>
        {selectedDrug && (
          <DrugDataBox
            drugName={selectedDrug.drugName}
            drugDetails={selectedDrug.drugDetails}
          />
        )}
      </div>
    </div>
  );
};

export default DrugList;
