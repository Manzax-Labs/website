import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { Search, Code, Users, Rocket, Mail, Accessibility, Eye, Globe, Repeat, ShieldCheck, TrendingUp, Building2 } from 'lucide-react';
import Layout from '@/components/Layout/Layout';
import Hero from '@/components/Hero/Hero';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

function AnimatedSection({ children, className = '', id }: { children: React.ReactNode; className?: string; id?: string }) {
  const { ref, isInView } = useScrollAnimation();

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

const queHacemos = [
  {
    icon: <Search size={40} className="mb-3 text-primary" />, 
    title: 'Detectamos oportunidades',
    desc: 'Buscamos cuellos de botella reales en procesos cotidianos. Observamos, simplificamos, resolvemos.'
  },
  {
    icon: <Code size={40} className="mb-3 text-primary" />,
    title: 'Construimos sin intermediarios',
    desc: 'Diseñamos y programamos todo nosotros. No hay agencias, freelancers ni atajos.'
  },
  {
    icon: <Users size={40} className="mb-3 text-primary" />,
    title: 'Probamos con personas reales',
    desc: 'Mostramos el producto antes de tiempo. Lo validamos con usuarios y mejoramos sobre esa base.'
  },
];

const principiosTimeline = [
  {
    icon: <Eye size={28} className="text-primary" />,
    title: 'Usabilidad primero',
    desc: 'Nada es más importante que que se entienda y se use sin esfuerzo.'
  },
  {
    icon: <Accessibility size={28} className="text-primary" />,
    title: 'Diseño sin barreras',
    desc: 'Lo accesible no es opcional. Lo simple, tampoco.'
  },
  {
    icon: <ShieldCheck size={28} className="text-primary" />,
    title: '100% construido por nosotros',
    desc: 'No tercerizamos. No dependemos de otros. Control total del producto.'
  },
  {
    icon: <Repeat size={28} className="text-primary" />,
    title: 'Iteramos con criterio',
    desc: 'Mejoramos lo necesario, no lo que está de moda.'
  },
  {
    icon: <TrendingUp size={28} className="text-primary" />,
    title: 'Transparencia total',
    desc: 'Comunicación clara, decisiones explícitas y sin vueltas.'
  },
  {
    icon: <Globe size={28} className="text-primary" />,
    title: 'Construimos con impacto',
    desc: 'Queremos que lo que hacemos mejore realidades concretas.'
  },
];

const equipo = [
  {
    nombre: 'Nicolás Scherzer',
    bio: 'Estratega de negocios y emprendedor EdTech. Fundador de Ser Universitario, una comunidad de más de 600.000 estudiantes. Combina experiencia como desarrollador y docente con una visión clara: resolver problemas reales con tecnología útil y bien hecha.'
  },
  {
    nombre: 'Uriel Kutner',
    bio: 'Experto en planificación y análisis de datos. Associate en JP Morgan, donde lideró equipos de finanzas y data analytics por casi una década. Tiene la mirada estratégica para transformar ideas en productos concretos.'
  },
  {
    nombre: 'Adrián Borowicz',
    bio: 'Desarrollador fullstack con formación técnica y gran disposición. Viene del mundo administrativo, pero se volcó de lleno al desarrollo web. Su versatilidad, energía y compromiso lo convierten en un pilar técnico clave.'
  },
  {
    nombre: 'Gonzalo Lera Romero',
    bio: 'Ingeniero de software con visión técnica y base académica sólida. Doctor en Ciencias de la Computación, trabajó en Superhuman y ASAPP liderando equipos, lanzando productos con IA generativa y diseñando arquitecturas robustas. Obsesionado con la calidad del código.'
  },
];

const proyectos = [
  {
    nombre: 'Ser Universitario',
    descripcion: 'Comunidad y plataforma EdTech que conecta a más de 600.000 estudiantes con oportunidades educativas en Latinoamérica.',
    logo: null as string | null
  },
  {
    nombre: 'Plataforma para consorcios',
    descripcion: 'Sistema pensado desde cero para administradores de edificios. Optimiza tareas repetitivas, mejora la comunicación y reduce el caos operativo.',
    logo: <Building2 size={40} className="text-primary mb-2" />
  },
  {
    nombre: 'Nuevo proyecto en desarrollo',
    descripcion: 'Estamos explorando una solución para simplificar la gestión financiera de pequeños negocios. En etapa de investigación y validación.',
    logo: <Rocket size={40} className="text-primary mb-2" />
  }
];

// CSS para el timeline
const timelineStyle = `
.principios-timeline {
  position: relative;
  margin-left: auto;
  margin-right: auto;
  max-width: 500px;
}
.principios-timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 3px;
  background: var(--primary-100, #D1D9D8);
  transform: translateX(-50%);
}
.principio-step {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
}
.principio-step:last-child {
  margin-bottom: 0;
}
.principio-icon {
  z-index: 1;
  background: #fff;
  border-radius: 50%;
  border: 2px solid var(--primary-100, #D1D9D8);
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
}
.principio-step .fw-semibold {
  text-align: center;
}
.principio-step .text-muted {
  text-align: center;
}
`;

export default function App() {
  return (
    <Layout>
      <style>{timelineStyle}</style>
      <Hero />
      
      {/* Sección Qué hacemos */}
      <AnimatedSection id="que-hacemos" className="py-5 bg-white">
        <Container>
          <motion.h2 
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h3 fw-bold text-primary text-center mb-4"
          >
            Qué hacemos
          </motion.h2>
          <Row className="g-4 justify-content-center">
            {queHacemos.map((item, idx) => (
              <Col key={idx} xs={12} md={4} className="text-center">
                <motion.div
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
                >
                  {item.icon}
                  <h3 className="h5 fw-semibold mb-2">{item.title}</h3>
                  <p className="text-muted small mb-0">{item.desc}</p>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </AnimatedSection>

      {/* Sección Principios - Timeline vertical */}
      <AnimatedSection id="principios" className="py-5 bg-light">
        <Container>
          <motion.h2 
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h3 fw-bold text-primary text-center mb-4"
          >
            Principios
          </motion.h2>
          <Row className="justify-content-center">
            <Col xs={12} md={8}>
              <div className="principios-timeline">
                {principiosTimeline.map((p, idx) => (
                  <motion.div 
                    className="principio-step" 
                    key={idx}
                    initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
                  >
                    <div className="principio-icon shadow-sm mx-auto">
                      {p.icon}
                    </div>
                    <div>
                      <div className="fw-semibold text-primary mb-1">{p.title}</div>
                      <div className="text-muted small">{p.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </AnimatedSection>

      {/* Sección Equipo */}
      <AnimatedSection id="equipo" className="py-5 bg-white">
        <Container>
          <motion.h2 
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h3 fw-bold text-primary text-center mb-4"
          >
            Equipo
          </motion.h2>
          <Row className="g-4 justify-content-center">
            {equipo.map((persona, idx) => (
              <Col key={idx} xs={12} sm={6} md={3} className="text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
                >
                  <h3 className="h5 fw-semibold mb-2">{persona.nombre}</h3>
                  <p className="text-muted small mb-0">{persona.bio}</p>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </AnimatedSection>

      {/* Sección Proyectos */}
      <AnimatedSection id="proyectos" className="py-5 bg-light">
        <Container>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h3 fw-bold text-primary text-center mb-4"
          >
            Proyectos
          </motion.h2>
          <Row className="g-4 justify-content-center">
            {proyectos.map((proyecto, idx) => (
              <Col key={idx} xs={12} md={6} lg={4}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
                >
                  <Card className="h-100 border-0 shadow-sm">
                    <Card.Body className="text-center p-4">
                      {proyecto.logo ? (
                        typeof proyecto.logo === 'string' ? (
                          <img src={proyecto.logo} alt={`${proyecto.nombre} logo`} className="mb-3" style={{ height: '40px' }} />
                        ) : (
                          <div className="mb-3">{proyecto.logo}</div>
                        )
                      ) : (
                        <div className="mb-3">
                          <Code size={40} className="text-primary" />
                        </div>
                      )}
                      <Card.Title className="h6 fw-semibold mb-2">{proyecto.nombre}</Card.Title>
                      <Card.Text className="text-muted small mb-0">{proyecto.descripcion}</Card.Text>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </AnimatedSection>

      {/* Sección Contacto */}
      <AnimatedSection id="contacto" className="py-5 bg-white">
        <Container>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h3 fw-bold text-primary text-center mb-4"
          >
            Contacto
          </motion.h2>
          <Row className="justify-content-center">
            <Col xs={12} md={8} lg={6}>
              <motion.div 
                className="text-center mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <p className="text-muted mb-4">
                  ¿Hay algo que podríamos simplificar con tecnología?
                  Contanos, estamos para ayudar.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Form>
                  <Row className="g-3">
                    <Col xs={12} sm={6}>
                      <Form.Group>
                        <Form.Label className="small fw-medium">Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Tu nombre" />
                      </Form.Group>
                    </Col>
                    <Col xs={12} sm={6}>
                      <Form.Group>
                        <Form.Label className="small fw-medium">Email</Form.Label>
                        <Form.Control type="email" placeholder="tu@email.com" />
                      </Form.Group>
                    </Col>
                    <Col xs={12}>
                      <Form.Group>
                        <Form.Label className="small fw-medium">Mensaje</Form.Label>
                        <Form.Control as="textarea" rows={4} placeholder="Contanos qué tenés en mente..." />
                      </Form.Group>
                    </Col>
                    <Col xs={12} className="text-center">
                      <Button variant="primary" className="d-inline-flex align-items-center gap-2">
                        <Mail size={16} />
                        Enviar mensaje
                      </Button>
                    </Col>
                  </Row>
                </Form>
                <div className="text-center mt-4">
                  <p className="text-muted small mb-0">
                    O escribinos directamente a{' '}
                    <a href="mailto:hola@manzax.com" className="text-primary text-decoration-none">
                      hola@manzax.com
                    </a>
                  </p>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </AnimatedSection>
    </Layout>
  );
}
