import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container } from 'react-bootstrap'

const Header = ({ changeBg }: any) => {
  return (
    <header>
      <Navbar bg="light" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to='/' onClick={() => changeBg("#ffebcd")}>
            <Navbar.Brand>Cake Shop</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
            <LinkContainer to='/cakes' onClick={() => changeBg("#fff")}>
                <Nav.Link><i className="fas fa-birthday-cake"></i>Cakes</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/shoppingcart' onClick={() => changeBg("#fff")}>
                <Nav.Link><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/login' onClick={() => changeBg("#eee")}>
                <Nav.Link><i className="fas fa-user"></i>Sign In</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
