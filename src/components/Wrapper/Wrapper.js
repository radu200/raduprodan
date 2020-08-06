import React from "react";
import "../../css/Wrapper.css";
import NavBar from "../../components/NavBars/NavBar";
import ProjectCard from "../Cards/Project";
import Footer from "../Footer/Footer";

function Wrapper() {
  return (
    <>
      <div className=" w3-content w3-row ">
        <div className="w3-col l10 s12">
          <NavBar />
          <ProjectCard />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Wrapper;
