import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Searchbar() {
    const navigate = useNavigate(); // Call the hook here

    const handleSearch = async () => { //Async??
        setLoading(true);
        
        const response = await fetch(
            `http://localhost:8080/restaurants/${searchTerm}`
          );
          
        const data = await response.json(); //why .json??

        navigate('/restaurants', {state: {results: data}}); // Navigate to the desired route
        setLoading(false);
    };

    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(false);
    // const navigate = useNavigate();


    return (
        <Container fluid>
            {!loading ? (
                <Row>
                <Form.Label style={{marginTop:"10px"}}>Search based on preferance:</Form.Label>
                    <Col xs={10}>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Control
                                    placeholder="Indian, American, Chinese..." 
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col>
                        <Button variant="outline-secondary" onClick={handleSearch}>Search</Button>
                    </Col>
                </Row>
            ) : (
                <p style={{marginTop:"10px"}}>Searching ...</p>
            )}
        </Container>
    );
}

export default Searchbar;