import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../css/searchFormView.css';

function SearchFormView(props) {
    return (
        <div className="search-form-section">
            <Form className="form">
                <Form.Group className="mb-3" controlId="formSearch">
                    <Form.Label>Search for movies</Form.Label>
                    <Row className="g-2">
                        <Col md>

                            <Form.Control type="search" placeholder="Search..." />
                        </Col>
                    </Row>
                    <br />
                    <Row className="g-2">
                        <Col md>
                            <Form.Select size="lg">
                                <option>Series</option>
                                <option>Movies</option>
                            </Form.Select>
                        </Col>
                        <Col md>
                            <Form.Select size="lg">
                                <option>Year</option>
                                <option>2022</option>
                                <option>2021</option>
                                <option>2020</option>
                                <option>2019</option>
                            </Form.Select>
                        </Col>
                        <Col md></Col>
                        <Col md></Col>
                        <Col md></Col>
                        <Col md></Col>
                        <Col md></Col>
                        <Col md></Col>
                        <Col md></Col>
                        <Col md></Col>
                        <Col md></Col>
                        <Col md></Col>
                        <Col md></Col>
                    </Row>
                </Form.Group>
            </Form>
        </div>
    );
}

export default SearchFormView;