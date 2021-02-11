import React from "react";
import API from "../../utils/API";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function SaveBtn(props) {

    function SaveNewBook(){
        const bookObject = {
            title: props.book.volumeInfo.title,
            authors: props.book.volumeInfo.authors,
            description: props.book.volumeInfo.description,
            image: props.book.volumeInfo.imageLinks.thumbnail,
            link: props.book.volumeInfo.infoLink
        }
        API.saveBook(bookObject);
    }

  return (
    <button className="save-btn btn btn-primary" {...props} role="button" tabIndex="0" 
    onClick={ SaveNewBook }
    >
      save
    </button>
  );
}

export default SaveBtn;
