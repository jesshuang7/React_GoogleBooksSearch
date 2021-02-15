import React from "react";

// This file exports the Input and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ marginBottom: 0, marginTop:20}} className="btn btn-success btn-lg btn-block">
      {props.children}
    </button>
  );
}
