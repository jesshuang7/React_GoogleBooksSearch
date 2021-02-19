import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function BookCard(props) {
  return (
    <div className="card" >
      <h5 className="card-title mr-auto p-2">{...props}</h5>
      <h6 className="card-subtitle mb-2 text-muted">{...props}</h6> 
      <img className="card-img-top" src={...props} alt="Card image cap" />
      <a href="#" className="card-link float-right">{...props}</a>
      <a href="#" className="card-link float-right">{...props}</a>
      <p className="card-text">{...props}</p>
    </div>
  );
}

export default BookCard;
