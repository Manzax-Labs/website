import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className="border-top py-4 mt-auto" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <Container>
        <Row className="align-items-center justify-content-between">
          <Col xs={12} md="auto" className="text-center mb-2 mb-md-0">
            <a href="mailto:hola@manzax.com" className="text-primary fw-semibold text-decoration-none">
              hola@manzax.com
            </a>
          </Col>
          <Col xs={12} md className="text-center text-md-end">
            <div className="small text-primary">
              &copy; {new Date().getFullYear()} Manzax. Todos los derechos reservados.
            </div>
            <div className="small mt-1">
              <a href="#" className="text-primary text-decoration-none">
                Política de privacidad
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
} 