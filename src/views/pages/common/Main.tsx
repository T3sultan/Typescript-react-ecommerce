import axios from "axios";
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
// import Home from "../home/Home";
const Home = React.lazy(() => import("../home/Home"));

const Main = () => {
  return (
    <div className="container mx-auto">
      <Suspense fallback={<> Loading...</>}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>{" "}
      </Suspense>
    </div>
  );
};

export default Main;
