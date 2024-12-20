import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div>
            <p>Page not found.</p>
            <Link to='/'>Take me home!</Link>
        </div>
    );
}

export default NotFound;