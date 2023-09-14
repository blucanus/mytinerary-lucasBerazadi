import React, { useEffect, useState, useRef} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { useDispatch } from "react-redux";
import { signUp } from "../redux/actions/userAction";


export const SignUp = () => {

    const [countries, setCountries] = useState([])

    const name = useRef(null)
    const email = useRef(null)
    const password = useRef(null)
    const image = useRef(null)
    const country = useRef(null)

    const dispatch = useDispatch()

    useEffect(() => {
        axios('https://restcountries.com/v3.1/all?fields=name').then(({data}) => 
            setCountries(data.map((country)=> country.name.common))
        )
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        const aux = [name, email, password, image, country]
        if(aux.some((campo) => !campo.current.value)){
            alert("All camps are required")
        }else {
            const body = {
                name : name.current.value,
                email : email.current.value,
                password : password.current.value,
                image : image.current.value,
                country : country.current.value
            }
            dispatch(signUp(body));
        }
    }

  return (
    <Col sm={12} md={{span:8, offset: 2}}>
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" ref={name}/>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email"  name="email" ref={email}/>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password"  name="password" ref={password}/>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Image</Form.Label>
            <Form.Control type="text"  name="image" ref={image}/>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Country</Form.Label>
            <Form.Select aria-label="Default select example" name="country" ref={country}>
                <option>Open this select menu</option>
                {countries.length > 0 && countries.map(country => <option key={`opt-country-${country}`} value={country}>{country}</option>)} 
            </Form.Select>
        </Form.Group>        
        <Button type="submit">
            Submit
        </Button>
        </Form>
    </Col>
  );
};
