import React from "react";
import Hero from "../components/home/Hero";
import "../components/home/home.css";
import OurMission from "../components/home/OurMission";

function Home() {
  return (
    <div className="home-container">
      <Hero />
      <OurMission />
    </div>
  );
}

export default Home;
