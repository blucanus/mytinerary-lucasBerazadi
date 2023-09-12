import React, { useEffect, useState } from "react";
import { getCity } from "../Services/citiesQueries";
import { useParams } from "react-router-dom";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import { loadItineraries } from "../../redux/actions/itinerariesActions";
import { Link as AnchorLink } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

export const CityDetails = () => {
  const itinerariesStore = useSelector((store) => store.itineraries);
  const dispatch = useDispatch();

  //const [city, setCity] = useState({})
  const { id } = useParams();
  const [key, setKey] = useState("home");

  useEffect(() => {
    getCity(id)
      .then((city) => {
        dispatch(loadItineraries(city));
        //setCity(city)
        //console.log(city);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="card p-0">
      <img
        src={`../${itinerariesStore.allItineraries.image}`}
        className="card-img"
      ></img>
      <div className="card-overlay p-3 mb-3 me-5">
        <h2 className="card-title">
          {itinerariesStore.allItineraries.name} |{" "}
          {itinerariesStore.allItineraries.state}
        </h2>
        <h5 className="card-text">Our Itineraries</h5>
        <div className="row mb-3">
          {/* <h4 className="card-text">Interest Point <blockquote className="blockquote">{city.interestPoint}</blockquote></h4> */}

          {itinerariesStore.allItineraries.itinerary?.map((itinerary) => (
            <div className="justify-content-between itinerary-tab" key={itinerary.name}>
              <Tab.Container
                id="left-tabs-example"
                defaultActiveKey="first"
                
              >
                <Row>
                  <Col sm={1}>
                    <Nav variant="pills" className="flex-column">
                      <Nav.Item>
                        <Nav.Link eventKey="first">
                          <i className="fa-solid fa-circle-info"></i>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">
                          <i className="fa-solid fa-clipboard-check"></i>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">
                          <i className="fa-regular fa-comments"></i>
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm={10}>
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <h4>{itinerary.name}</h4>
                        <p className="m-0">
                          <i className="fa-solid fa-hand-holding-dollar"></i>{" "}
                          Price: {itinerary.price} |{" "}
                          <i className="fa-regular fa-clock"></i> Duration:{" "}
                          {itinerary.duration}hs
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">Under Construcction</Tab.Pane>
                      <Tab.Pane eventKey="third">Under Construcction</Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </div>
          ))}
        </div>
        <div className="footer">
          <AnchorLink to={`/cities`} className="btn btn-outline-dark">
            Back
          </AnchorLink>
        </div>
      </div>
    </div>
  );
};
export default CityDetails;
