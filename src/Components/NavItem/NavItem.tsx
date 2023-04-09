import React from 'react';
import Nav from 'react-bootstrap/Nav';

export const NavItem = ({ eventKey, displayText }:any) => {
  return (
      <Nav.Item>
        <Nav.Link eventKey={eventKey}>{displayText}</Nav.Link>
      </Nav.Item>
  );
};
