import React, { useState, useEffect, useCallback  }  from 'react';
import Container from 'react-bootstrap/Container';
import { connect, ConnectedProps } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { getsearchApi } from './Search.thunks';
import { SourceArrays } from '../../constants/array';
import Form from 'react-bootstrap/Form';
import MainLayout from '../../layouts/MainLayout';
import ErrorToast from '../../Components/Toast/ErrorToast';
import SearchCard from '../../Components/Cards/SearchCard';
import './Search.css';

const mapStateToProps = state => ({
  searchNews:state.searchApi.searchNews,
  searchBar:state.searchApi.searchBar,
});

const mapDispatchToProps = {
  getsearchApi,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

interface Props extends ConnectedProps<typeof connector> {}

const Search = (props: Props)=>{
  const { getsearchApi, searchNews, searchBar } = props;
  const [date, setDate] = useState('');
  const [source, setSource] = useState<any[]>([]);
  const [error, setError] = useState(null);
  const onSearch = useCallback(() => {
    let payload = searchBar;
	   payload  = date !== '' ? payload + 'from=' + date.slice(0, 10) + '&' : payload + '';
	   payload  = source.length > 0  ? payload + 'sources=' + source.toString() + '&' : payload + '';
    if (payload === '') return; 
    getsearchApi(payload)
      .then(res => {
        console.log('filter updated', res);
      })
      .catch(err => {
        setError(err.payload?.response?.data?.message);
      });
  }, [source, date, getsearchApi, searchBar ]);
  const handleDate = (event: any) => {
    setDate(event.target.value);
  };
  const clickSourceHandler = (e, item) =>{
  	if (e.target.checked) {
      setSource([
        ...source,
        item.id,
   	  ]);
    } else {

      const newSource = source.filter((list) => list !== item.id);
      setSource(newSource);
    }
  };
  const closeToast = () => setError(null);
  useEffect(() => {
    onSearch();
  }, [ onSearch ]);
  return (
		<MainLayout>
		<Container>
		<Row>
		<Col xs={6} md={3}>
		<div className="widget widget-social">
		<h6 className="widget-title">Filter by Date</h6>
		<Form.Control  type="date" onChange={handleDate}/>
		</div>
		<div className="widget widget-social">
		<h6 className="widget-title">Filter by Source</h6>
		{SourceArrays.map((item, index)=>(
			<div 
            key={index}><Form.Check
            inline
            label={item.name}
            onClick={(e) => clickSourceHandler(e, item)}
            name="group1"
            type='checkbox'
            id={item.id}
          /></div>
		))}
		</div>
		</Col>
		<Col xs={6} md={9}>
		<Row>
		{searchNews.map((item, index) =>(
			<SearchCard item={item} index={index} />
		  ))}
		</Row>
		</Col>
		</Row>
		<ErrorToast message={error} showErrorToast={error ? true : false} closeToast={closeToast}/>
		</Container>
		</MainLayout>
  );
};
export default connector(Search);