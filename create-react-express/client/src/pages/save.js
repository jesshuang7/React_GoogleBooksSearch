import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import DeleteBtn from "../components/DeleteBtn"

function Save() {
    const [books, setBooks] = useState([])
  
    useEffect(() => {
      loadBooks()
    }, [])
  
    function loadBooks() {
      API.getBooks()
        .then(res => 
          setBooks(res.data)
        )
        .catch(err => console.log(err));
    };

    function deleteBook(id) {
        API.deleteBook(id)
          .then(res => loadBooks())
          .catch(err => console.log(err));
      }



  return (
    <Container fluid>
    <Row>
      <Col size="md-12">
        <Jumbotron>
        <br />
          <h1>React Google Books Search</h1>
          <h4>Search for and Save Books of interests</h4>
        </Jumbotron>
        <Jumbotron>
        <h3 style={{textAlign: "left"}}>Saved Books</h3>
        <br/>
        {books.length ? (
              <List>
                {books.map(book => (
                  <ListItem key={book._id}>
                    <h5><a className="text-left" href={book.link}>{book.title}</a></h5>
                    <h6small>{book.subtitle}</h6small>
                      <h6>{book.authors}</h6>
                      <p>{book.description}</p>
                      <img src={book.image} />
                    <DeleteBtn onClick={() => deleteBook(book._id)}/>
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


export default Save;
