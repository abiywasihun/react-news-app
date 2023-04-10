import React, { useEffect, Suspense, useRef } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import TrendingCards from '../../../Components/Cards/TrendingCards';
import TrendingTab from '../../../Components/Tabs/TrendingTab';
import PopularHome from '../PopularHome/PopularHome';

import { NavItem } from '../../../Components/NavItem/NavItem';

import { TYPES } from '../../../constants/types';
import { toString } from '../../../utils/toString';

import {
  getTrendingNewsList,
  getArtNewsList,
  getScienceNewsList,
  getWorldNewsList,
  getNySourcesNewsList,
  getNyCategoriesNewsList,
} from './TrendingHome.thunks';

interface Props extends ConnectedProps<typeof connector> {}

const mapStateToProps = (state: any) => {
  return {
    trendingNews: state.trendingHome.trendingNews,
    artNews: state.trendingHome.artNews,
    scienceNews: state.trendingHome.scienceNews,
    worldNews: state.trendingHome.worldNews,
    preference: state.app.preference,
    isAuthenticated: state.app.isAuthenticated,
  };
};

const mapDispatchToProps = {
  getTrendingNewsList,
  getArtNewsList,
  getScienceNewsList,
  getWorldNewsList,
  getNySourcesNewsList,
  getNyCategoriesNewsList,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

const TrendingHome: React.FC<Props> = ({
  getTrendingNewsList,
  getArtNewsList,
  getScienceNewsList,
  getWorldNewsList,
  getNySourcesNewsList,
  getNyCategoriesNewsList,
  trendingNews,
  artNews,
  isAuthenticated,
  preference,
  scienceNews,
  worldNews,
}) => {
  const myRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // Fetch the popular news list on mount

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (preference?.length !== 0 && isAuthenticated) {
            getNySourcesNewsList(toString(preference, TYPES.SOURCE));
            getNyCategoriesNewsList(toString(preference, TYPES.CATEGORY));
          } else {
            getTrendingNewsList();
            getArtNewsList();
            getScienceNewsList();
            getWorldNewsList();
          }
        }
      },
      {
        root: null,
        rootMargin: '10px',
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
  }, [getTrendingNewsList, getArtNewsList, getScienceNewsList, getNySourcesNewsList, getNyCategoriesNewsList, getWorldNewsList, preference, isAuthenticated]);
  console.log(myRef);

  return (
    <div>
      <div className="post-area pt-20 pb-16 go-top trendingHeight">
        <Container  ref={myRef}>
          <Row>
            <Col xs={12} md={3}>
              {/* Trending cards */}
              <TrendingCards trendingNews={trendingNews.slice(1, 3)} />
            </Col>
            <Col xs={12} md={6}>
              {/* Trending tabs */}
              <Tab.Container id="left-tabs-example" defaultActiveKey="arts">
                <Row>
                  <Row>
                    <Col xs={12} md={4}>
                      <h6 className="trending_title">Trending News</h6>
                    </Col>
                    <Col xs={12} md={8} className="flex justify-end">
                      {/* Tabs */}
                      <Nav variant="pills">
                        <NavItem eventKey="arts" displayText="Art" />
                        <NavItem eventKey="science" displayText="Science" />
                        <NavItem eventKey="world" displayText="World" />
                      </Nav>
                    </Col>
                  </Row>
                  {/* Tab content */}
                  <Tab.Content>
                    <Tab.Pane eventKey="arts">
                      <TrendingTab trendingNews={artNews} />
                    </Tab.Pane>
                    <Tab.Pane eventKey="science">
                      <TrendingTab trendingNews={scienceNews} />
                    </Tab.Pane>
                    <Tab.Pane eventKey="world">
                      <TrendingTab trendingNews={worldNews} />
                    </Tab.Pane>
                  </Tab.Content>
                </Row>
              </Tab.Container>
            </Col>
            <Col xs={12} md={3}>
              {/* Trending cards */}
              <TrendingCards trendingNews={trendingNews.slice(3, 5)} />
            </Col>
          </Row>
        </Container>
      </div>
      {/* Popular section */}
      <Suspense fallback="loading">
        <PopularHome />
      </Suspense>
    </div>
  );
};

export default connector(TrendingHome);