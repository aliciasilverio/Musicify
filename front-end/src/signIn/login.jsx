import {Row, FormControl, Form, Button, Container, InputGroup, Col} from 'react-bootstrap';
import '../App.css';

const Login = () => {
    return(
        <div>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                Password
                </Form.Label>
                <Col sm="10">
                <Form.Control type="password" placeholder="Password" />
                </Col>
            </Form.Group>
            
        </div>
    )
}

export default Login;