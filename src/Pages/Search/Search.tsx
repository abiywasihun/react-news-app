import React, { useState }  from 'react'
import Container from 'react-bootstrap/Container';
import { connect, ConnectedProps } from "react-redux"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {getsearchApi} from './Search.thunks'
import Form from "react-bootstrap/Form";
import MainLayout from '../../layouts/MainLayout'
import './Search.css'

const mapStateToProps = state => ({
  loading: state.loading,
  searchNews:state.searchApi.searchNews,
  searchBar:state.searchApi.searchBar
})

const mapDispatchToProps = {
  getsearchApi
}

const connector = connect(mapStateToProps, mapDispatchToProps)

interface Props extends ConnectedProps<typeof connector> {}

const Search =(props: Props)=>{
  const { getsearchApi, searchNews,searchBar,loading } = props
  const [date, setDate] = useState("")
  const [source, setSource] = useState("")
   const handleDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value)
  }

  const handleSource = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSource(event.target.value)
  }
   const onSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!loading) {
     let payload=searchBar
      date!=='' &&  (payload+='from='+date.slice(0,10) +'&')
      source!=='' &&  (payload+='source='+source+'&')
      getsearchApi(payload)
        .then(res => {
        	console.log("filter updated")
        })
        .catch(err => {
          console.log(err.payload.message)
        })
    }
  }
	return(
		<MainLayout>
		<Container>
		<Row>
		<Col xs={6} md={3}>
		<div className="widget widget-social">
		<h6 className="widget-title">Filter by Date</h6>
		<Form.Control type="date" />
		</div>
		<div className="widget widget-social">
		<h6 className="widget-title">Filter by Source</h6>
		<Form.Check type="radio" label="Bbc-news" aria-label="radio 1" />
		<Form.Check type="radio" label="CNN" aria-label="radio 1" />
		<Form.Check type="radio" label="NewYork Times" aria-label="radio 1" />
		<Form.Check type="radio" label="The Guardian" aria-label="radio 1" />
		</div>
		</Col>
		<Col xs={6} md={9}>
		<Row>
		{searchNews.slice(0,9).map((item, index) =>(
		<Col xs={6} md={4}>
		  	<div className="single-post-wrap style-box">
		    <div className="thumb">
		      <img src="https://solverwp.com/demo/react/nextpage/assets/img/tech/1.png" alt="img" />
		    </div>
		    <div className="details">
		      <div className="post-meta-single mb-4 pt-1">
		        <ul>
		          <li>
		            <a className="tag-base tag-light-blue" href="#/cat-sports">
		              Tech
		            </a>
		          </li>
		          <li>
		            <i className="fa fa-user" />
		            {item.author}
		          </li>
		        </ul>
		      </div>
		      <h6 className="title">
		        <a href="#/blog-details">
		          {item.title}
		        </a>
		      </h6>
		      <p>{item.title}</p>
		      <a className="btn btn-base mt-4" href={item.url}>
		        Read more
		      </a>
		    </div>
		  </div>
		</Col>
		  ))}
		</Row>
		</Col>
		</Row>
		</Container>
		</MainLayout>
		)
}
export default connector(Search)