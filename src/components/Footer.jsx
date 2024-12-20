import {Container, Image, Stack} from "react-bootstrap";
import logoimage from "../assets/email.png";

function Footer() {
    return (
        <Stack style={{ backgroundColor: "white", padding: "20px" , height:100, marginTop:"20px", border:"0.5px solid black"}}>
            <div>Contact</div>
            <div><Image fluid src={logoimage} style={{height: 50}}/></div>
        </Stack>
    );
}

export default Footer;