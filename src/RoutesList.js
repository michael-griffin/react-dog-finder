import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import DogDetails from "./DogDetails";
import DogList from "./DogList";

import doglistData from "./_testCommon";


function RoutesList() {
  return (
    <Routes>
      <Route path="/dogs" element={<DogList dogList={doglistData} />} />
      <Route path="/dogs/:name" element={<DogDetails dogList={doglistData} />} />
      <Route path="*" element={<Navigate to="/dogs" />} />
    </Routes>
  );
}

export default RoutesList;