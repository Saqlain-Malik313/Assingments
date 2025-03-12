import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import design from './logo/desig.jpg'
import product from './logo/product.webp'
import sde from './logo/software engi.webp'
import olivia from './logo/women.png'
import baker from './logo/men.png'
import lana from './logo/womenn.png'

import { Col, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';

const Blog = () => {
    return (
        <>
            <div className='container'>
                <Row>
                    <Row style={{ display: "flex", justifyContent: "center" }}>
                        <Col xs={9} >
                            <h5 style={{ color: "orangered" }}>Our blog</h5>
                            <h2>Lastest blog post</h2>
                            <h3>Tool and strategies modern teams need to help their companies grow.</h3>
                        </Col>
                        <Col xs={3} style={{ justifyContent: "right", }}>
                        <NavLink to="/post">
                            <Button variant="danger" id='btn' size="lg" style={{ borderRadius: "5px",maxWidth:'fit-content' }}>
                                View all post
                            </Button>
                            </NavLink>
                        </Col>
                    </Row>
                    <Col>
                        <CardGroup>
                            <Card>
                                <Card.Img variant="top" src={design} style={{ height: "55.2%" }} />
                                <Card.Body>
                                    <Card.Title style={{ color: "orangered" }} id='Car'>Design</Card.Title>
                                    <h6>UX review presentations</h6>
                                    <Card.Text>
                                        How do you create compelling presentations that wow
                                        your colleagues and impress your mariagers?
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Row>
                                        <Col xs={2}>
                                            <img src={olivia} alt={olivia} id='d-flex' />
                                        </Col>
                                        <Col xs={9}>
                                            <h6 >
                                                olivia Rhaye
                                                <br />
                                                <small className="text-muted">20 Jan 2024</small>
                                            </h6>
                                        </Col>
                                    </Row>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src={product} />
                                <Card.Body>
                                    <Card.Title style={{ color: "orangered" }} id='Car'>Product</Card.Title>
                                    <h6>Migrating to Linear 101</h6>
                                    <Card.Text>
                                        Linear helps streamline software projects, sprinta tasks,
                                        and bug tracking. Here's how to get started..
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Row>
                                        <Col xs={2}>
                                            <img src={baker} alt={baker} id='d-flex' />
                                        </Col>
                                        <Col xs={9}>
                                            <h6 >
                                                Phoenix Baker
                                                <br />
                                                <small className="text-muted">19 Jan 2024</small>
                                            </h6>
                                        </Col>
                                    </Row>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src={sde} />
                                <Card.Body>
                                    <Card.Title style={{ color: "orangered" }} id='Car'>Software Engineering</Card.Title>
                                    <h6>Building your API stack</h6>
                                    <Card.Text>
                                        The rise of RESTful APIs has been mat by a rise in tools for creating, testing, and managing them.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Row>
                                        <Col xs={2}>
                                            <img src={lana} alt={lana} id='d-flex' />
                                        </Col>
                                        <Col xs={9}>
                                            <h6 >
                                                Lana Steiner
                                                <br />
                                                <small className="text-muted">18 Jan 2024</small>
                                            </h6>
                                        </Col>
                                    </Row>
                                </Card.Footer>
                            </Card>
                        </CardGroup>
                    </Col>


                </Row>
            </div>
        </>
    )
}

export default Blog
