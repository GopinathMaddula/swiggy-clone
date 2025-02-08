import React from "react";
import "./Body.css";
import RestaurentsSection from "../../sections/RestaurentsSection/RestaurentsSection.tsx";
import { API_HOME } from "../../constants.ts";

const Body = () => {
  const [mainData, setMainData] = React.useState("");

  const fetchMainApiData = async () => {
    try {
      const apiData = await fetch(API_HOME);
      const data = await apiData.json();
      setMainData(data);
    } catch (error) {
      console.log("Error", error);
    }
  };

  React.useEffect(() => {
    fetchMainApiData();
  }, []);
  return (
    <main className="main-container">
      <RestaurentsSection data={mainData?.data?.cards} />
    </main>
  );
};

export default Body;
