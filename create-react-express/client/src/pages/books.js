import React, { useState, useEffect } from "react";
import SaveBtn from "../components/SaveBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";

function Books() {
    const [books, setBooks] = useState([])
  const [formObject, setFormObject] = useState("");


  function handleInputChange(event) {
    setFormObject(event.target.value)
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    API.searchGoogle(formObject)
    .then((response) => {
        setBooks(response.data.items)
    })
  };

  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>React Google Books Search</h1>
            <h4>Search for and Save Books of interests</h4>
          </Jumbotron>
          <Jumbotron>
            <h3 style={{textAlign: "left"}}>Book Search</h3>
            <form>
              <Input
                onChange={handleInputChange}
                name="title"
                placeholder="Please enter a book name"
              />
              <FormBtn 
                // disabled={!formObject.author} 
                onClick={handleFormSubmit}
              >
                Search
              </FormBtn>
            </form>
          </Jumbotron>
          <Jumbotron>
              <h3 style={{textAlign: "left"}}>Results</h3>
              {books.length ? (
            <List>
              {books.map((book) => (
                <ListItem key={book._id}>
                  <Link to={"/books/" + book._id}>
                    <strong>
                      {book.volumeInfo.title} by {book.volumeInfo.authors}
                    </strong>
                  </Link>
                  <SaveBtn book={book} />
                </ListItem>
              ))}
            </List>
          ) : (
            <h3>No Results to Display</h3>
          )}
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default Books;
