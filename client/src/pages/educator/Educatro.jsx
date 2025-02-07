import React from "react";
import { Outlet } from "react-router-dom";

const Educatro = () => {
  return (
    <div>
      <h1>education page</h1>
      <Outlet />
    </div>
  );
};

export default Educatro;
