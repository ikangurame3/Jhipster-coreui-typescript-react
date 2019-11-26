import React from "react";

const SidebarMinimizer: React.FC = () => {
  const sidebarMinimize = () => {
    document.body.classList.toggle("sidebar-minimized");
  };

  const brandMinimize = () => {
    document.body.classList.toggle("brand-minimized");
  };

  return (
    <button
      className="sidebar-minimizer"
      type="button"
      onClick={ () => {
        sidebarMinimize();
        brandMinimize();
      }}
    />
  );
};

export default SidebarMinimizer;
