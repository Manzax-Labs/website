import { ArrowRight, Users } from 'lucide-react';
import { Button, Row, Col, Container } from 'react-bootstrap';
import logo from '/logo-transparent.png';

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-5" style={{ minHeight: '75vh', display: 'flex', alignItems: 'center' }}>
      <Container>
        <Row className="align-items-center">
          {/* Content */}
          <Col lg={6} className="text-center text-lg-start mb-5 mb-lg-0">
            <h1 className="display-4 fw-bold text-primary mb-4">
              Menos promesas. Más producto.
            </h1>
            <p className="lead text-muted mb-4">
            Somos Manzax, un equipo chico que construye software propio con obsesión por la calidad, el diseño y la simplicidad. Sin inversores, sin moda, sin terceros: hacemos lo que usamos y usamos lo que hacemos.
            </p>
            {/* CTA Buttons */}
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
              <Button
                onClick={() => scrollToSection('#que-hacemos')}
                variant="primary"
                className="d-inline-flex align-items-center"
              >
                Ver qué hacemos <ArrowRight className="ms-2" size={16} />
              </Button>
              <Button
                onClick={() => scrollToSection('#equipo')}
                variant="outline-primary"
                className="d-inline-flex align-items-center"
              >
                Conocé al equipo <Users className="ms-2" size={16} />
              </Button>
            </div>
          </Col>
          {/* Logo */}
          <Col lg={6} className="d-flex justify-content-center align-items-center">
            <img 
              src={logo} 
              alt="Manzax logo" 
              style={{ 
                maxWidth: 400, 
                maxHeight: 400
              }} 
              className="theme-logo"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
} 