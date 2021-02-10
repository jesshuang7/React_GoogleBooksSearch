import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{  clear: "both", paddingTop: 20, paddingBottom: 20, background: "#92a8b0", textAlign: "center", color:"#493b41" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
