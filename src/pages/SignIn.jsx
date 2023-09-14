import React, { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import { signIn } from "../redux/actions/userAction";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


export const Signin = () => {

    const email = useRef(null)
    const password = useRef(null)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        const aux = [email, password]
        if(aux.some((campo) => !campo.current.value)){
            alert("All camps are required")
        }else {
            const body = {                
                email : email.current.value,
                password : password.current.value,
            }
            dispatch(signIn(body)).then((response) => {
                if(response.payload.success) {
                    //hacer alert lindo
                    navigate("/cities")
                }
            })
        }
    }

  return (
    <Col sm={12} md={{ span: 8, offset: 2 }}>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" ref={email}/>
         
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" ref={password}/>
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Log In
        </Button>
      </Form>
    </Col>
  );
};
