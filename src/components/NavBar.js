import {useState, useEffect} from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import React from 'react';

export const NavBar = () => {
  const [activeLink] = useState();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Navbar expand="md" className={scrolled ? 'scrolled' : ''}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as = {Link} to="/"
              className={activeLink === 'home' ? 'active navbar-link' :
                  'navbar-link'}
            >
                Home
            </Nav.Link>
            <Nav.Link as = {Link} to="/skills"
              className={activeLink === 'skills' ? 'active navbar-link' :
                  'navbar-link'}
            >
                Skills
            </Nav.Link>
            <Nav.Link as = {Link} to="/projects"
              className={activeLink === 'projects' ? 'active navbar-link' :
                  'navbar-link'}
            >
                Projects
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
