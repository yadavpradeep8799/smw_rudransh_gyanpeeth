import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import ExampleCarouselImage from './ExampleCarouselImage'; // Corrected path
import './Gallery.css';

function Gallery() {
  const images = [
    '/Images/pic1.jpg',
    '/Images/pic2.jpg',
    '/Images/pic3.jpg',
    // Add more image URLs here
  ];

  return (
    <section className="gallery container">
      <h2 className="text-center my-4">Library Gallery</h2>

      {/* Carousel Section */}
      <div className="carousel-container mb-5">
        <Carousel>
          <Carousel.Item>
            <ExampleCarouselImage imagePath={images[0]} altText="First slide" />
            <Carousel.Caption>
              <h3>First Slide</h3>
              <p>Description of the first slide.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <ExampleCarouselImage imagePath={images[1]} altText="Second slide" />
            <Carousel.Caption>
              <h3>Second Slide</h3>
              <p>Description of the second slide.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <ExampleCarouselImage imagePath={images[2]} altText="Third slide" />
            <Carousel.Caption>
              <h3>Third Slide</h3>
              <p>Description of the third slide.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* Card Section */}
      <div className="card-container d-flex justify-content-around mb-5">
        <Card style={{ width: '18rem', backgroundImage: 'url(/Images/newspaper.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', color: '#fff' }}>
          <Card.Body style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', borderRadius: '10px', padding: '20px' }}>
            <Card.Title>Library Events</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Monthly Activities</Card.Subtitle>
            <Card.Text>
              Learn about upcoming events, workshops, and reading sessions at our library.
            </Card.Text>
            <Card.Link href="#" style={{ color: '#fff' }}>Learn More</Card.Link>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem', backgroundImage: 'url(/Images/newspaper.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', color: '#fff' }}>
          <Card.Body style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', borderRadius: '10px', padding: '20px' }}>
            <Card.Title>Book Collection</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Curated Selection</Card.Subtitle>
            <Card.Text>
              Discover a wide variety of books available for borrowing and research purposes.
            </Card.Text>
            <Card.Link href="#" style={{ color: '#fff' }}>Explore Collection</Card.Link>
          </Card.Body>
        </Card>
      </div>


      {/* Image Grid Section */}
      <div className="gallery-grid">
        {images.map((image, index) => (
          <img src={image} alt={`Library Image ${index + 1}`} key={index} />
        ))}
      </div>
    </section>
  );
}

export default Gallery;
