import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Page from "./Page";
export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Page />} />
      </Routes>
    </div>
  );
}
