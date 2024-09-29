import { useState } from 'react';
import profile from '/profile.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CarouselComponent from './assets/Components/CarouselComponent';
import Footer from './assets/Components/Footer';



function App() {
  const [count, setCount] = useState(0);

  return (
    <Container fluid className="text-center text-white p-3">
      <Row className="justify-content-center mt-4">
        <Col className="d-flex flex-column align-items-center">
          <a href="https://instagram.com/dimebruce" target="_blank" rel="noopener noreferrer">
            <img
              src={profile}
              className="img-fluid rounded-circle"
              alt="Profile logo"
              style={{ maxWidth: '200px', height: 'auto' }} // Ajuste del tamaño de la photo
            />
          </a>
          <h1 className="mt-4">Talia Ghul</h1>
          <p className="mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. ✨🚀</p>

          <CarouselComponent/>

          <Footer/>
          
        </Col>
      </Row>
    </Container>
  );
}

export default App;
