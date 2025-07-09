import { useState } from 'react';
import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap';
import { Menu, Palette } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const navigation = [
  { name: 'Qué hacemos', href: '#que-hacemos' },
  { name: 'Principios', href: '#principios' },
  { name: 'Equipo', href: '#equipo' },
  { name: 'Proyectos', href: '#proyectos' },
  { name: 'Contacto', href: '#contacto' },
];

export default function Header() {
  const [expanded, setExpanded] = useState(false);
  const { currentTheme, setTheme, themes } = useTheme();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const navbar = document.querySelector('.fixed-top');
      const navbarHeight = navbar ? navbar.getBoundingClientRect().height : 76;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setExpanded(false);
  };

  return (
    <Navbar expand="lg" expanded={expanded} className="fixed-top border-bottom shadow-sm" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <Container>
        <Navbar.Brand href="#" className="fw-bold text-primary" style={{ fontFamily: 'IBM Plex Sans, system-ui, sans-serif', letterSpacing: '-1px' }}>
          Manzax
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar-nav" onClick={() => setExpanded(expanded ? false : true)}>
          <Menu size={24} />
        </Navbar.Toggle>
        <Navbar.Collapse id="main-navbar-nav">
          <Nav className="ms-auto gap-2 align-items-center">
            {navigation.map((item) => (
              <Nav.Link
                key={item.name}
                href={item.href}
                onClick={e => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="fw-medium text-primary"
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                {item.name}
              </Nav.Link>
            ))}
            {/* Theme Dropdown */}
            <Dropdown className="ms-2">
              <Dropdown.Toggle 
                variant="outline-primary" 
                size="sm"
                className="d-flex align-items-center gap-1"
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                <Palette size={16} />
                {currentTheme.name}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {themes.map((theme) => (
                  <Dropdown.Item
                    key={theme.name}
                    onClick={() => setTheme(theme)}
                    active={theme.name === currentTheme.name}
                  >
                    {theme.name}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
} 