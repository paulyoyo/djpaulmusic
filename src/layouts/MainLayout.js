import React from "react";
import "../assets/scss/global.scss";

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      {/* Aquí podrías incluir un <Header /> si lo necesitas */}
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
