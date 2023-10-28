import React from "react";
import dr from "../Asset/dr1.png";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Home.css";
import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <div className="abc">
      <div className="abc1">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={dr} />
          <Card.Body>
            <Card.Title style={{fontWeight:700, marginLeft:70, fontSize:28}}>Doctor</Card.Title>
            <Button variant="outline-primary" style={{marginLeft:40}}>
            <Link to="/LoginDoctor">Click to Proceed</Link>
            </Button>
          </Card.Body>
        </Card>
      </div>
      <div className="abc1">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={dr} />
          <Card.Body>
            <Card.Title style={{fontWeight:700, marginLeft:70, fontSize:28}}>Patient </Card.Title>
            <Button variant="outline-primary" style={{marginLeft:40}}>
            <Link to="/Patient">Click to Proceed</Link>
            </Button>
          </Card.Body>
        </Card>
      </div>
      <div className="abc1">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={dr} />
          <Card.Body>
            <Card.Title style={{fontWeight:700, marginLeft:70, fontSize:28}}>Admin</Card.Title>
            <Button variant="outline-primary" style={{marginLeft:40}}>
            <Link to="/loginAdmin">Click to Proceed</Link>
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
export default Home;
