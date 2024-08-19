import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Job from "./components/Job";
import Jobs from "./components/Jobs";

function App() {
  return (
    <>
      <Header title="The Job Board" />
      <Jobs />
      <Footer />
    </>
  );
}

export default App;
