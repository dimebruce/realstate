import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import data from '../Helpers/carouselData.json';


const CarouselComponent = () => {
    return (
      <Carousel className="w-100 mt-4" controls={true} indicators={false}>
        {data.map((item, index) => (
          <Carousel.Item key={index}>
            <Card style={{ width: '18rem', margin: '0 auto' }}>
              <Card.Img variant="top" src={item.src} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  {item.text}
                </Card.Text>
                <Button
                  variant="dark"
                  href={item.link} // Usa la URL del JSON para el botón
                  target="_blank" // Abre en una nueva pestaña
                  rel="noopener noreferrer" // Mejora la seguridad al abrir enlaces externos
                >
                  Go somewhere
                </Button>
              </Card.Body>
            </Card>
          </Carousel.Item>
        ))}
      </Carousel>
    );
  };
  
  export default CarouselComponent;