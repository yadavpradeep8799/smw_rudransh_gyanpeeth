import React from 'react';
import './Facilities.css';
import { Card, Container, Row, Col } from 'react-bootstrap';

function Facilities() {
  const facilities = [
    { name: "Free WiFi", image: "/Images/freewifi.jpg" },
    { name: "Locker Service", image: "/Images/locker.jpg" },
    { name: "CCTV Camera", image: "/Images/cctv.jpg" },
    { name: "Fully Air-Conditioned", image: "/Images/ac.jpg" },
    { name: "Reserve Seat", image: "/Images/reservedseat.jpg" },
    { name: "Newspaper & Books", image: "/Images/newspaper.jpg" },
    { name: "Hot & Cold Water", image: "/Images/watercooler.jpg" },
    { name: "Canteen Facility", image: "/Images/canteen.jpg" },
    { name: "Peaceful Environment", image: "/Images/librarybg.jpg" },
  ];

  return (
    <section className="facilities">
      <Container>
        <h2 className="text-center mb-4">Facilities Available</h2>
        <Row>
          {facilities.map((facility, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={4} className="mb-4">
              <Card className="facility-card text-center">
                <Card.Img variant="top" src={facility.image} alt={facility.name} />
                <Card.Body>
                  <Card.Text>{facility.name}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Facilities;
