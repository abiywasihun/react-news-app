import React, { useEffect, useMemo } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import Container from 'react-bootstrap/Container';
import { getTopNewsList } from './TopHome.thunks';
import Row from 'react-bootstrap/Row';
import { CategoryArrays } from '../../../constants/array';
import Col from 'react-bootstrap/Col';
import { FaClock } from 'react-icons/fa'; 

const mapStateToProps = (state: any) => ({
  topHeadlines: state.topHome.topHeadlines,
});

const mapDispatchToProps = {
  getTopNewsList,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

interface Props extends ConnectedProps<typeof connector> {}
const TopHome = (props: Props) => {
  const { getTopNewsList } = props;
  const topHeadlines = useMemo(() => props.topHeadlines.slice(0, 9), [props.topHeadlines]);

  useEffect(() => {
    getTopNewsList();
  }, [getTopNewsList]);

  return (
		<>
		<Container>
		<Row>
		<Col xs={12} md={6}>
		{topHeadlines && topHeadlines.length > 0 && (
		  topHeadlines.slice(0, 1).map((item, index) =>(
		<div key={index} className="single-post-wrap style-overlay">
		<div className="thumb">
		<img src="https://solverwp.com/demo/react/nextpage/assets/img/post/24.png" alt="img" />
		<a className="tag-base tag-blue" href="#/cat-page">Tech</a></div>
		<div className="details"><div className="post-meta-single"><p className="flex items-center gap-2.5">
		<FaClock /> {item.publishedAt.slice(0, 10)}</p></div>
		<h5 className="title"><a href={item.url}>{item.title}</a></h5>
		</div></div>
		  ))
		)}
		<Row>
		{topHeadlines.slice(1, 3).map((item, index) =>(
		<Col  key={index} xs={12} md={6}>
		<div className="single-post-wrap style-overlay">
		<div className="thumb">
		<img src="https://solverwp.com/demo/react/nextpage/assets/img/post/24.png" alt="img" />
		</div><div className="details">
		<div className="post-meta-single">
		<p className="flex items-center gap-2.5"><FaClock /> {item.publishedAt.slice(0, 10)}</p></div>
		<h6 className="titles"><a href={item.url}>{item.title.slice(0, 47)}...</a></h6>
		</div></div></Col>
		 ))}
		 </Row>
		 </Col>
		 <Col xs={6} md={3}>
		 <div className="section-title style-two mb-4">
		 <h6  className="title">Latest News</h6></div>
		 {topHeadlines.slice(3, 9).map((item, index) =>(
		 <div key={index} className="single-post-list-wrap">
		 <div className="media">
		 <div className="media-left">
		 <img src="https://solverwp.com/demo/react/nextpage/assets/img/post/list/1.png" alt="img"/></div>
		 <div className="media-body">
		 <div className="details">
		 <div className="post-meta-single">
		 <ul className="post-meta-ul"><li><FaClock /> {item.publishedAt.slice(0, 10)}</li></ul></div>
		 <h6 className="list_title">
		 <a href={item.url}>{item.title.slice(0, 47)}... </a></h6>
		 </div></div></div></div>
		 ))}
		 </Col>
		 <Col xs={6} md={3} className="widget-category">
		  <div className=" section-title style-two mb-4">
		  <h6 className=" title">Category</h6></div>
		  <Row className=" custom-gutters-14">
		  {CategoryArrays.map((item, index)=>(
		  	<Col key={index} xs={6}>
		  		  <div className=" single-category-inner">
		  		  <img src={item.img} alt="img" />
		  		  <a className=" tag-base tag-blue" href="#/cat-page">{item.name}</a></div></Col>
		  		  ))}
		   
		  <Col xs={12}><div className=" add">
		  <img className=" w-100" src="https://solverwp.com/demo/react/nextpage/assets/img/add/3.png" alt="img"/>
		  </div></Col></Row></Col>
		</Row>
		</Container>
		</>
  );
};
export default connector(TopHome);
