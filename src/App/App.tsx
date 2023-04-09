import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import Routes from '../routes/routes';
import {  getAllPreference, updatIsAuthenticated } from './App.thunks';
import storage from '../utils/storage';

const mapStateToProps = state => ({
  isAuthenticated: state.app.isAuthenticated,
});

const mapDispatchToProps = {
  getAllPreference,
  updatIsAuthenticated,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

interface Props extends ConnectedProps<typeof connector> {}
function App(props: Props) {
  const { updatIsAuthenticated, getAllPreference, isAuthenticated } = props;
  useEffect(() => {
    const user = storage.getToken();
    if (user && !isAuthenticated) {//This one checks when the page first reload
      updatIsAuthenticated();
      getAllPreference();
    } else if (user) { 
      getAllPreference(); //fetchs user preferences
    }
  }, [updatIsAuthenticated, isAuthenticated, getAllPreference]);
  console.log(isAuthenticated);
  return (
    <Routes />
  );
}

export default connector(App);