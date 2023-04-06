import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import Container from 'react-bootstrap/Container';
import { getTrendingNewsList, getArtNewsList, getScienceNewsList, getWorldNewsList } from './TrendingHome.thunks';
import TrendingCards from '../../../Components/Cards/TrendingCards';
import TrendingTab from '../../../Components/Tabs/TrendingTab';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const mapStateToProps = (state: any) => ({
  trendingNews: state.trendingHome.trendingNews,
  artNews: state.trendingHome.artNews,
  scienceNews: state.trendingHome.scienceNews,
  worldNews: state.trendingHome.worldNews,
});
const mapDispatchToProps = {
  getTrendingNewsList,
  getArtNewsList,
  getScienceNewsList,
  getWorldNewsList,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

interface Props extends ConnectedProps<typeof connector> {}
const NavItem = ({ eventKey, displayText }) => (
      <Nav.Item>
        <Nav.Link eventKey={eventKey}>{displayText}</Nav.Link>
      </Nav.Item>
);

const TrendingHome = (props: Props) => {
  const { getTrendingNewsList, getArtNewsList, getScienceNewsList,
    getWorldNewsList, trendingNews, artNews, scienceNews, worldNews } = props;

  useEffect(() => {
    getTrendingNewsList();
    getArtNewsList();
    getScienceNewsList();
    getWorldNewsList();
  }, [getTrendingNewsList, getArtNewsList, getScienceNewsList,
    getWorldNewsList]);
  return (
		<div className="post-area pt-20 pb-16 go-top">
  <Container>
    <Row>
    <Col xs={6} md={3}>
   {trendingNews.slice(1, 3).map((item) =>(
   <TrendingCards item={item} />
   ))}
    </Col>
    <Col xs={12} md={6}>
      
        <Tab.Container id="left-tabs-example" defaultActiveKey="arts">
        <Row>
        <div className="pb-4 flex items-center">
          <Col xs={6} md={4}>
            <h6 className="trending_title">Trending News</h6>
          </Col>
         <Col xs={8} md={8} className="flex justify-end">
         <Nav variant="pills">
            
              <NavItem eventKey="arts" displayText="Art" />
              <NavItem eventKey="science" displayText="Science" />
              <NavItem eventKey="world" displayText="World" />
          </Nav>
          </Col> 
          </div>
          <Tab.Content>
            <Tab.Pane eventKey="arts">
              <TrendingTab trendingNews={artNews}/>
            </Tab.Pane>
            <Tab.Pane eventKey="science">
             <TrendingTab trendingNews={scienceNews}/>
            </Tab.Pane>
             <Tab.Pane eventKey="world">
                <TrendingTab trendingNews={worldNews}/>
            </Tab.Pane>
          </Tab.Content>
        </Row>
        </Tab.Container>
      </Col>
    <Col xs={6} md={3}>
       {trendingNews.slice(3, 5).map((item) =>(
        <TrendingCards item={item} />
       ))}
    </Col>
    </Row>
  </Container>
</div>

  );
};
export default connector(TrendingHome);