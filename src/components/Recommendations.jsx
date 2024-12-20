import { Button, Carousel, Container, Image, Row } from "react-bootstrap";
import placeholder from "../assets/table.jpeg"
import { useState } from "react";

function Recommendations() {
    const [recommended, setRecommended] = useState([])

    const handleRefresh = async () => {
        const response = await fetch(
            `http://localhost:8080/recommendation-engine/POPULAR`, {
                method: 'GET'
            }
        )

        const data = await response.json();
        setRecommended(data);
    }

    return (
        <Container>
            <p>Recommended</p>
            <Button variant="outline-secondary" style={{marginBottom:"10px", width:"50vh"}} onClick={handleRefresh}>Refresh</Button>
            <Carousel data-bs-theme="light">
                {recommended.map(({id, name, tables , preference}) => (
                    <Carousel.Item>
                        <Image src={placeholder}></Image>
                        <Carousel.Caption>
                            <h3>{name}</h3>
                            <p>{preference}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
            {/* <Carousel data-bs-theme="light">
                <Carousel.Item>
                <Image src={imageone} text="First slide" fluid style={{height:"100vh"}}/>
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <Image src={imagetwo} text="Second slide" fluid style={{height:"100vh"}}/>
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <Image src={imagethree} text="Third slide" fluid style={{height:"100vh"}}/>
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
                </Carousel.Item>
            </Carousel> */}
        </Container>
    );
}

export default Recommendations;