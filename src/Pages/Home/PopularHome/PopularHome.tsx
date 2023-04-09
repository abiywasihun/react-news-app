import React, { useEffect, useRef  } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import PopularList from '../../../Components/List/PopularList';
import PopularTab from '../../../Components/Tabs/PopularTab';
import { NavItem } from '../../../Components/NavItem/NavItem';
import { TYPES } from '../../../constants/types';
import { toString } from '../../../utils/toString'; 
import {
  getPopularNewsList,
  getEconomyNewsList,
  getPoliticsNewsList,
  getCategoryNewsList,
  getSourceNewsList,
} from './PopularHome.thunks';

const mapStateToProps = (state: any) => ({
  popularNews: state.popularHome.popularNews,
  economyNews: state.popularHome.economyNews,
  politicsNews: state.popularHome.politicsNews,
  preference: state.app.preference,
  isAuthenticated: state.app.isAuthenticated,
});

const mapDispatchToProps = {
  getPopularNewsList,
  getEconomyNewsList,
  getPoliticsNewsList,
  getCategoryNewsList,
  getSourceNewsList,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

interface Props extends ConnectedProps<typeof connector> {}


const PopularHome: React.FC<Props> = ({
  getPopularNewsList,
  getEconomyNewsList,
  getPoliticsNewsList,
  getCategoryNewsList,
  getSourceNewsList,
  popularNews,
  economyNews,
  politicsNews,
  isAuthenticated,
  preference,
}) => {
  const myRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // Fetch the popular news list on mount

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (preference?.length !== 0 && isAuthenticated) {
            getSourceNewsList(toString(preference, TYPES.SOURCE));
            getCategoryNewsList(toString(preference, TYPES.CATEGORY));
          } else {
            getPopularNewsList();
            getEconomyNewsList();
            getPoliticsNewsList();    
          }
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 1.0,
      },
    );

    if (myRef.current) {
      observer.observe(myRef.current);
    }

    return () => {
      if (myRef.current) {
        observer.unobserve(myRef.current);
      }
    };
  }, [getPopularNewsList, getEconomyNewsList, getPoliticsNewsList, getCategoryNewsList, getSourceNewsList, preference, isAuthenticated]);
 
  return (
    <div className="post-area bg-sky pt-20 pb-16 go-top"  ref={myRef}>
      <Container>
        <Row>
          <Col xs={12} md={3}>
            {popularNews && (
              <PopularList popularItems={popularNews?.slice(0, 4)} />
            )}
          </Col>
          <Col xs={12} md={3}>
            {popularNews && (
              <PopularList popularItems={popularNews?.slice(4, 8)} />
            )}
          </Col>
          <Col xs={12} md={3}>
            {popularNews && (
              <PopularList popularItems={popularNews?.slice(5, 9)} />
            )}
          </Col>
          <Col xs={12} md={3}>
            <Tab.Container id="left-tabs-example" defaultActiveKey="economy">
              <Nav variant="pills">
                <NavItem eventKey="economy" displayText="Economy" />
                <NavItem eventKey="politics" displayText="Politics" />
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="economy">
                  <PopularTab popularTabs={economyNews} />
                </Tab.Pane>
                <Tab.Pane eventKey="politics">
                  <PopularTab popularTabs={politicsNews} />
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