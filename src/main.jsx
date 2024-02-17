import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import CareerPage from "./Pages/CareerPage";
import FSDev from "./Pages/FSD";
import Navbar from "./Pages/Navbar";
import Header from "./Pages/Header";
import AllPages from "./Pages/AllPages";
import DataScience from "./Pages/DataScience";
import CyberSecyrity from "./Pages/CyberSecyrity";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />

      <div className="img-coursal">
        <img src="https://www.guvi.in/blog/wp-content/uploads/2022/04/July-last-week-offer-cover-2048x453.webp"></img>
      </div>

      <Navbar />

      <Routes>
        <Route path="/" element={<CareerPage />} />
        <Route index element={<CareerPage />} />
        <Route path="/all" element={<AllPages />} />
        <Route path="/fsd" element={<FSDev />} />
        <Route path="/data-science" element={<DataScience />} />
        <Route path="/cyber-security" element={<CyberSecyrity />} />

        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
