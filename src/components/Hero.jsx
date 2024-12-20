import { Container, Image, Row } from "react-bootstrap";
import banner from "../assets/banner.png";

function Hero() {
    return(
        <Container fluid>
            <Image src={banner} fluid style={{height:"10vh"}}/>
        </Container>
    );
}

export default Hero;