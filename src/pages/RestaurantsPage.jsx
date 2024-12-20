import { Button, Card, CardText, Col, Container, Form, Modal, Row } from "react-bootstrap";
import Hero from "../components/Hero";
import Navigation from "../components/Navigation";
import Searchbar from "../components/Searchbar";
import Footer from "../components/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import placeholder from "../assets/table.jpeg"
import { useState } from "react";

function Restaurants() {
    const [smsPopup, setSmsPopup] = useState(false);
    const [emailPopup, setEmailPopup] = useState(false);
    const [emailReservationPopup, setEmailReservationPopup] = useState(false);
    const [id, setId] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');

    const location = useLocation();
    const results = location.state?.results;
    const navigate = useNavigate();

    const handleSmsShow = () => {
        setSmsPopup(true);
    };

    const handleSmsClose = () => {
        setSmsPopup(false);
    };

    const handleSmsSubmit = async () => {
        const response = await fetch(
            `http://localhost:8080/restaurants/${id}/waitlist/sms/${number}`, {
                method: 'POST'
            }
        );

        navigate('/');
    }

    const handleEmailShow = () => {
        setEmailPopup(true);
    };

    const handleEmailClose = () => {
        setEmailPopup(false);
    };

    const handleEmailSubmit = async () => {
        const response = await fetch(
            `http://localhost:8080/restaurants/${id}/waitlist/email/${email}`, {
                method: 'POST'
            }
        );

        navigate('/');
    }

    const handleEmailReservationShow = () => {
        setEmailReservationPopup(true);
    };

    const handleEmailReservationClose = () => {
        setEmailReservationPopup(false);
    };

    const handleEmailReservationSubmit = async () => {
        const response = await fetch(
            `http://localhost:8080/restaurants/${id}/reserve/${email}`, {
                method: 'POST'
            }
        );

        navigate('/');
    }


    return (
        <Container fluid>
            <Modal show = {smsPopup} onHide={handleSmsClose}>
                <Modal.Header closeButton>
                    <Modal.Title>SmS-Notification</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Phone Number:</Form.Label>
                            <Form.Control placeholder="070..." onChange={(e) => setNumber(e.target.value)}/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-secondary" onClick={handleSmsClose}>Close</Button>
                    <Button variant="outline-secondary" onClick={handleSmsSubmit}>Submit</Button>
                </Modal.Footer>
            </Modal>

            <Modal show = {emailPopup} onHide={handleEmailClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Email-Notification</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control placeholder="abc@..." onChange={(e) => setEmail(e.target.value)}/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-secondary" onClick={handleEmailClose}>Close</Button>
                    <Button variant="outline-secondary" onClick={handleEmailSubmit}>Submit</Button>
                </Modal.Footer>
            </Modal>

            <Modal show = {emailReservationPopup} onHide={handleEmailReservationClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Reservation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control placeholder="abc@..." onChange={(e) => setEmail(e.target.value)}/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-secondary" onClick={handleEmailReservationClose}>Close</Button>
                    <Button variant="outline-secondary" onClick={handleEmailReservationSubmit}>Submit</Button>
                </Modal.Footer>
            </Modal>

            <Hero></Hero>
            <Navigation></Navigation>
            <Searchbar></Searchbar>
            <Container>
                <Row xs={1} md={3} className="g-4">
                    {results.map(({id, name , preference, timeslots, reservations}) => (
                        <Col>
                            <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={placeholder} />
                            <Card.Body>
                                <Card.Title>{name}</Card.Title>
                                <CardText>
                                {preference}
                                </CardText>
                                <Card.Text>
                                Available timeslots: {timeslots.length - reservations.length}
                                </Card.Text>
                                {timeslots.length > 0 ? (
                                    <Button variant="outline-secondary" onClick={() => {
                                        setId(id)
                                        handleEmailReservationShow()
                                    }}>Make reservation</Button>
                                ) : (
                                    <Container fluid>
                                        <Row><Button style={{marginBottom:"5px"}} variant="outline-secondary" onClick={() => {
                                            setId(id)
                                            handleSmsShow()                                      
                                        }}>Sms-notification</Button></Row>
                                        <Row><Button style={{marginBottom:"5px"}} variant="outline-secondary" onClick={() => {
                                            setId(id)
                                            handleEmailShow()
                                        }}>Email-notification</Button></Row>
                                    </Container>
                                )}
                            </Card.Body>
                        </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
            <Footer></Footer>
        </Container>
    );
}

export default Restaurants;