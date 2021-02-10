import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";

import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";

function Books() {
    const [books, setBooks] = useState([])
  const [formObject, setFormObject] = useState({});

  return (
    <Container fluid>
      <Row>
        <Col size="md-10">
          <Jumbotron>
            <h1>React Google Books Search</h1>
            <h3>Search for and Save Books of interests</h3>
          </Jumbotron>
          <Jumbotron>
            <h2>Book Search</h2>
            <form>
              <Input
                onChange={handleInputChange}
                name="title"
                placeholder="Please enter a book name"
              />
              <FormBtn disabled={!formObject.author} onClick={handleFormSubmit}>
                Search
              </FormBtn>
            </form>
          </Jumbotron>
          <Jumbotron>
              <h2>Results</h2>
              {books.length ? (
            <List>
              {books.map((book) => (
                <ListItem key={book._id}>
                  <Link to={"/books/" + book._id}>
                    <strong>
                      {book.title} by {book.author}
                    </strong>
                  </Link>
                  <DeleteBtn onClick={() => deleteBook(book._id)} />
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
