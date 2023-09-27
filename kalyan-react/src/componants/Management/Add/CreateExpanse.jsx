import React from "react";
import { Outlet } from "react-router-dom";

export const CreateExpanse = () => {
  
  return (
    <div>
      <div className="container py-5" >
          <Outlet />
      </div>
    </div>
  );
};
