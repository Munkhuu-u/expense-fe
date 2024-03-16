import { Loader, Login } from "../components";
import React, { useState } from "react";

export default function login() {
  const [showWhich, setShowWhich] = useState("login");
  return (
    <div className="">
      <div
        className={`flex flex-row h-screen ${
          showWhich == "login" ? "block" : "hidden"
        }`}
      >
        <div className={`w-1/2`}>
          <Login setShowWhich={setShowWhich} />
        </div>
        <div className="w-1/2 bg-primary"></div>
      </div>
      <div
        className={`w-full h-screen ${
          showWhich == "loader" ? "block" : "hidden"
        }`}
      >
        <Loader showLoader={showWhich} />
      </div>
    </div>
  );
}
