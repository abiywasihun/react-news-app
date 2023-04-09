import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { logout, addUserPerefernce } from '../../App/App.thunks';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import { PATH } from '../../constants/paths';
import { Link } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';
import SearchBar from '../SearchBar/SearchBar';
import PreferenceModal from '../Modal/PreferenceModal';
import { SocialMediaLink } from '../NavItem/SocialMediaLink';
import ad from '../../assets/1.png';
import './Header.css';

const mapStateToProps = state => ({
  loading: state.loading,
  preference: state.app.preference,
  isAuthenticated: state.app.isAuthenticated,
});

const mapDispatchToProps = {
  logout,
  addUserPerefernce,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

interface Props extends ConnectedProps<typeof connector> {}
const Header = (props: Props)=>{
  const { addUserPerefernce, logout, preference, loading, isAuthenticated } = props;
  const [preferenceModal, setPreferenceModal] = useState(false);
  const handleLogout = () => logout();

  useEffect(() => {
    const status = preference?.length === 0 && isAuthenticated ? true : false;
    setPreferenceModal(status);
  }, [preference, isAuthenticated]);

  return (
    <>
      <Navbar className="topbar-area">
        <Container>
        <Row className="w-full">
            <Col xs={12} md={6}>
          <ul className="nav-ul">
            <li><a href="#/author">Author</a></li>
            <li><a href="#/cat-page">Tech News</a></li>
            <li><a href="#/cat-fashion">Fashion</a></li>
            <li><a href="#/cat-life-style">Life Style</a></li>
          </ul>
          </Col> 
          <Col xs={12} md={6}>       
          <Navbar.Collapse className="justify-content-end">
            <ul className="nav-ul">
             <SocialMediaLink />
            </ul>
          </Navbar.Collapse>
          </Col>
          </Row>
        </Container>
      </Navbar>
      <div className="nav-middle">
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <div className="logo text-md-left text-center">
                <a className="text-5xl no-underline" href="#alt">
                  Instant News
                </a></div>
            </Col>
            <Col xs={12} md={6}>
              <a href="#alt" className="ad-right">
                <img src={ad} alt="img" />
              </a>
            </Col>
          </Row>
        </Container>
      </div>
       <Navbar  bg="primary" expand="md" className="mb-3">
          <Container fluid>
            <Navbar.Brand className="text-white" href="/">Instant News</Navbar.Brand>
            <Navbar.Toggle aria-controls='offcanvasNavbar-expand-md' />
            <Navbar.Offcanvas
              id='offcanvasNavbar-expand'
              aria-labelledby='offcanvasNavbarLabel-expand-md'
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id='offcanvasNavbarLabel-expand-md'>
                  Instant News
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3">
                  <Nav.Link className="text-white nav-color" href="#home">Home</Nav.Link>
                  <Nav.Link className="text-white nav-color" href="#features">Category</Nav.Link>
                  <Nav.Link className="text-white nav-color" href="#pricing">Pages</Nav.Link>
                  <Nav.Link className="text-white nav-color" href="#blog">Blog</Nav.Link>
                </Nav>
                <Form className="d-flex w-1/2 width-form">
                  <SearchBar />
                </Form>
                  <Nav className="ml-4 d-flex items-center nav-items">
                   {isAuthenticated ? (
                    <Nav.Link  onClick={handleLogout}>Logout</Nav.Link>
                   ) : (
                    <><Link className="text-white no-underline mr-2 nav-color" to={PATH.LOGIN}>Login</Link>
                    <Link   className="text-white no-underline ml-2 nav-color" to={PATH.SIGNUP}>Register</Link></>)}
                  </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
          <PreferenceModal preferenceModal={preferenceModal} 
          addUserPerefernce={addUserPerefernce} 
          loading={loading} 
          setPreferenceModal={setPreferenceModal}/>
        </Navbar>
    </>
  );
};


export default connector(Header);
