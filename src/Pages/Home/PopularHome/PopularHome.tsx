import React, {  useEffect }  from 'react';
import Container from 'react-bootstrap/Container';
import { connect, ConnectedProps } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { getPopularNewsList, getEconomyNewsList, getPoliticsNewsList } from './PopularHome.thunks';
import PopularList from '../../../Components/List/PopularList';
import PopularTab from '../../../Components/Tabs/PopularTab';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';

const mapStateToProps = (state: any) => ({
  popularNews: state.popularHome.popularNews,
  economyNews: state.popularHome.economyNews,
  politicsNews: state.popularHome.politicsNews,
});
const mapDispatchToProps = {
  getPopularNewsList,
  getEconomyNewsList,
  getPoliticsNewsList,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

interface Props extends ConnectedProps<typeof connector> {}
const NavItem = ({ eventKey, displayText }) => (
      <Nav.Item>
        <Nav.Link eventKey={eventKey}>{displayText}</Nav.Link>
      </Nav.Item>
);

const PopularHome = (props: Props) => {
  const { getPopularNewsList, getEconomyNewsList, getPoliticsNewsList,
    popularNews, economyNews, politicsNews } = props;

  useEffect(() => {
    getPopularNewsList();
    getEconomyNewsList();
    getPoliticsNewsList();
  }, [getPopularNewsList, getEconomyNewsList, getPoliticsNewsList]);
  return (
		<div className="post-area bg-sky pt-20  pb-16 go-top">
		<Container>
		<Row>
		<Col xs={6} md={3}>
   {popularNews && (<PopularList popularItems={popularNews?.slice(0, 4)} />)}
    </Col>

  <Col xs={6} md={3}>
   {popularNews && (<PopularList popularItems={popularNews?.slice(4, 8)} />)}
  </Col>

  <Col xs={6} md={3}>
     {popularNews && (<PopularList popularItems={popularNews?.slice(5, 9)} />)}
  </Col>


		<Col xs={6} md={3}>
     <Tab.Container id="left-tabs-example" defaultActiveKey="economy">
			 <Nav variant="pills">
            
              <NavItem eventKey="economy" displayText="Economy" />
              <NavItem eventKey="politics" displayText="Politics" />
        </Nav>

          <Tab.Content>
            <Tab.Pane eventKey="economy">
               <PopularTab popularTabs={economyNews}/>
            </Tab.Pane>
            <Tab.Pane eventKey="politics">
             <PopularTab popularTabs={politicsNews}/>
            </Tab.Pane>
          </Tab.Content>
          </Tab.Container>
          </Col>
		</Row>
		</Container>
		</div>
  );
};

export default connector(PopularHome);