import React, { useEffect } from 'react';
import { BsFacebook } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsGoogle } from 'react-icons/bs';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { logout } from '../../App/App.thunks';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import { PATH } from '../../constants/paths';
import { Link } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';
import SearchBar from '../SearchBar/SearchBar';
import ad from '../../assets/1.png';
import './Header.css';

const mapStateToProps = state => ({
  preference: state.app.preference,
  isAuthenticated: state.app.isAuthenticated,
});

const mapDispatchToProps = {
  logout,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

interface Props extends ConnectedProps<typeof connector> {}
const Header = (props: Props)=>{
  const { logout, preference, isAuthenticated } = props;
  const handleLogout = () => logout();

  useEffect(() => {
    console.log(preference, isAuthenticated);
  }, [preference]);

  return (
    <>
      <Navbar className="topbar-area">
        <Container>
          <ul className="nav-ul">
            <li><a href="#/author">Author</a></li>
            <li><a href="#/cat-page">Tech News</a></li>
            <li><a href="#/cat-fashion">Fashion</a></li>
            <li><a href="#/cat-life-style">Life Style</a></li>
          </ul>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <ul className="nav-ul">
              <li><Nav.Link className="nav-social-media"><BsFacebook /></Nav.Link></li>
              <li><Nav.Link className="nav-social-media"><BsTwitter/></Nav.Link></li>
              <li><Nav.Link className="nav-social-media"><BsYoutube /></Nav.Link></li>
              <li><Nav.Link className="nav-social-media"><BsInstagram/></Nav.Link></li>
              <li><Nav.Link className="nav-social-media"><BsGoogle/></Nav.Link></li>
            </ul>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="nav-middle">
        <Container>
          <Row>
            <Col>
              <div className="logo text-md-left text-center">
                <a className="text-5xl no-underline" href="#alt">
                  Instant News
                </a></div>
            </Col>
            <Col>
              <a href="#alt" className="ad-right">
                <img src={ad} alt="img" />
              </a>
            </Col>
          </Row>
        </Container>
      </div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link className="text-white" href="#home">Home</Nav.Link>
            <Nav.Link className="text-white" href="#features">Category</Nav.Link>
            <Nav.Link className="text-white" href="#pricing">Pages</Nav.Link>
            <Nav.Link className="text-white" href="#blog">Blog</Nav.Link>
          </Nav>
          <Form className="d-flex w-1/2">
            <SearchBar />
          </Form>
          <Nav className="ml-4">
           {isAuthenticated ? (
            <Nav.Link className="text-white" onClick={handleLogout}>Logout</Nav.Link>
           ) : (
            <><Nav.Link><Link className="text-white no-underline" to={PATH.LOGIN}>Login</Link></Nav.Link>
            <Nav.Link><Link  className="text-white no-underline" to={PATH.SIGNUP}>Register</Link></Nav.Link></>)}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};


export default connector(Header);