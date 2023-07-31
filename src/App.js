import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/Headers/Header";
import axios from "axios";
import DrugList from "./components/List/DrugList";
import Footer from "./components/Footers/Footer";
import SubFooter from "./components/Footers/SubFooter";


function App() {
  const [drugData, setDrugData] = useState([]);

  useEffect(() => {
    // Function to fetch data from the API
    const fetchDrugData = async () => {
      try {
        const response = await axios.post("http://devapi.hidoc.co:8080/hidoc-us/drug/getDrugList");

        // You can check response status if needed
        if (response.status !== 200) {
          throw new Error("Failed to fetch data from the API");
        }

        const data = response.data.data;

        // Set drug data
        setDrugData(data.drugData);
      } catch (error) {
        console.error(error);
      }
    };

    // Call the API function
    fetchDrugData();
  }, []);
  return (
    <div className="appcontainer">
      <Header />
      <DrugList drugData={drugData}/>
      <SubFooter />
      <Footer />
    </div>
  );
}

export default App;
