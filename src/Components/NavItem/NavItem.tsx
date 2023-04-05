import React from 'react'
import Nav from 'react-bootstrap/Nav';

const NavItem = ({eventKey, displayText}:any) => {
  return (
      <Nav.Item>
        <Nav.Link eventKey={eventKey}>{displayText}</Nav.Link>
      </Nav.Item>
    )
}

export default NavItem