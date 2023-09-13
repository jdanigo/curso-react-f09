import React from 'react';
import {Container, Row, Col,Card} from 'react-bootstrap'
import './login.css'
import { setLoginAction } from '../../redux/slices/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const LoginScreen = () => {

    const navigate =useNavigate();
    const dispatch = useDispatch()

    const handleLogin = () => {
        const data = {
            email: "tatanbmx@gmail.com",
            password: "tatanbmx"
        }
        dispatch(setLoginAction(data))
        navigate("/dashboard")
    }

    return(
        <div className="login-page">
        <Container >
            <Row className="row-section">
                <Col lg={6} className="d-flex justify-content-center">
                    <Card>
                        <Card.Body>
                            <Card.Title>Login</Card.Title>
                            <div className="mt-3 mb-3">
                                <label>Usuario</label>
                                <input type="text" className="form-control" name="usuario" />
                            </div>
                            <div className="mt-3 mb-3">
                                <label>Contraseña</label>
                                <input type="password" className="form-control" name="clave" />
                            </div>
                            <div className="mt-3 mb-3">
                                <button type="button" onClick={()=>handleLogin()} className="btn btn-success">Ingresar</button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default LoginScreen;