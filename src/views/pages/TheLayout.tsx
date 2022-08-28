import React from "react";
import Footer from "./common/Footer";
import Header from "./common/Header";
import Main from "./common/Main";

const TheLayout = () => {
  return (
    <div>
      <div className="py-5">
        <Header />
      </div>
      <main>
        <Main />
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default TheLayout;
