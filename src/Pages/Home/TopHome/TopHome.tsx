import React, { useEffect, useMemo, Suspense, useRef } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaClock } from 'react-icons/fa';
import listIm from '../../../assets/1l.png';
import topIm from '../../../assets/24.png';
import ad from '../../../assets/3.png';
import { toString } from '../../../utils/toString'; 
import { CategoryArrays } from '../../../constants/array';
import {
  getTopNewsList, 
  getTopNewsListByCategory, 
  getTopNewsListBySource, 
} from './TopHome.thunks';
import { TYPES } from '../../../constants/types';
import TrendingHome from '../TrendingHome/TrendingHome';

const mapStateToProps = (state: any) => ({
  topHeadlines: state.topHome.topHeadlines,
  preference: state.app.preference,
  isAuthenticated: state.app.isAuthenticated,
});

const mapDispatchToProps = {
  getTopNewsList,
  getTopNewsListByCategory,
  getTopNewsListBySource,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

// Define the props interface
interface Props extends ConnectedProps<typeof connector> {}

const TopHome: React.FC<Props> = ({
  getTopNewsListBySource,
  getTopNewsListByCategory,
  getTopNewsList,
  topHeadlines,
  isAuthenticated,
  preference,
}) => {

  // Use a useMemo hook to only slice the array when it changes
  const topHeadlinesSlice = useMemo(() => topHeadlines.slice(0, 10), [topHeadlines]);
  const myRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // Fetch the top news list on mount

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
	    if (preference?.length !== 0 && isAuthenticated) {
	    	getTopNewsListBySource(toString(preference, TYPES.SOURCE));
	    	getTopNewsListByCategory(toString(preference, TYPES.CATEGORY));
	    	console.log();
	    } else {
	      getTopNewsList();    	
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
  }, [getTopNewsList, getTopNewsListByCategory, getTopNewsListBySource, isAuthenticated, preference]);
  return (
    <div ref={myRef}>
    {topHeadlinesSlice.length > 0 && (
    	<>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            {/* Render the top headline */}
            {topHeadlinesSlice.length > 0 && (
              topHeadlinesSlice.slice(0, 1).map((item, index) => (
                <div key={index} className="single-post-wrap style-overlay">
                  <div className="thumb">
                    <img style={{ height:'100%' }} src={topIm} alt="img" />
                    <a className="tag-base tag-blue" href={item.url}>Tech</a>
                  </div>
                  <div className="details">
                    <div className="post-meta-single">
                      <p className="flex items-center gap-2.5"><FaClock /> {item.publishedAt.slice(0, 10)}</p>
                    </div>
                    <h5 className="title"><a href={item.url}>{item.title}</a></h5>
                  </div>
                </div>
              ))
            )}

            {/* Render the second and third top headlines */}
            <Row>
              {topHeadlinesSlice.slice(1, 3).map((item, index) => (
                <Col key={index} xs={12} md={6}>
                  <div className="single-post-wrap style-overlay">
                    <div className="thumb">
                      <img src={topIm} alt="img" />
                    </div>
                    <div className="details">
                      <div className="post-meta-single">
                        <p className="flex items-center gap-2.5"><FaClock /> {item.publishedAt.slice(0, 10)}</p>
                      </div>
                      {/* Truncate the title string if it's longer than 47 characters */}
                      <h6 className="titles"><a href={item.url}>{item.title.slice(0, 47)}...</a></h6>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>

          <Col xs={12} md={3}>
            <div className="section-title style-two mb-4">
              <h6 className="title">Latest News</h6>
            </div>

            {/* Render the latest news items */}
            {topHeadlinesSlice.slice(3, 10).map((item, index) => (
              <div key={index} className="single-post-list-wrap">
                <div className="media">
                  <div className="media-left">
                    <img src={listIm} alt="img" />
                  </div>
                  <div className="media-body">
                    <div className="details">
                      <div className="post-meta-single">
                        <ul className="post-meta-ul">
                          <li><FaClock /> {item.publishedAt.slice(0, 10)}</li>
                        </ul>
                      </div>
                      {/* Truncate the title string if it's longer than 47 characters */}
                      <h6 className="list_title"><a href={item.url}>{item.title.slice(0, 47)}... </a></h6>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Col>

          <Col xs={12} md={3} className="widget-category">
            <div className="section-title style-two mb-4">
              <h6 className="title">Category</h6>
            </div>

            {/* Render the category buttons */}
            <Row className="custom-gutters-14">
              {CategoryArrays.map((item, index) => (
                <Col key={index} xs={6}>
                  <div className="single-category-inner">
                    <img src={item.img} alt="img" />
                    <a className="tag-base tag-blue" href={'#/' + item.name}>{item.name}</a>
                  </div>
                </Col>
              ))}
              <Col xs={12}>
                <div className="add">
                  <img className="w-100" src={ad} alt="img" />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      {/* Here adds Trending section of the Home Page */}
      <Suspense fallback="loading">
		<TrendingHome />
    </Suspense>
    </>
    )}
    </div>
  );
};

export default connector(TopHome);