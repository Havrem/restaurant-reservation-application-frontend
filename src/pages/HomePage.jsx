import { Container } from "react-bootstrap";
import Navigation from "../components/Navigation";
import Searchbar from "../components/Searchbar";
import Recommendations from "../components/Recommendations";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

function Home() {
    return (
        <Container fluid>
            <Hero></Hero>
            <Navigation></Navigation>
            <Searchbar></Searchbar>
            <Recommendations></Recommendations>
            <Footer></Footer>
        </Container>
    );
}

export default Home;