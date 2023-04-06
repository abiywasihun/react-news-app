import React from 'react';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
const MainLayout = (props:any)=>{
  const { children } = props;
  return (
    <div className="wrapper d-flex align-items-stretch">
    <main className="flex-grow-1 mw-100 overflow-auto min-vh-100">
        <Header />
        <div className="content mt-3 p-3">{children}</div>
        <Footer />
      </main>
    </div>
  );
};

export default MainLayout;