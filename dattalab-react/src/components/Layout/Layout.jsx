import React from 'react';
import Footer from './Footer';
import Header from './Header';
import '../../css/Layout/Layout.css';

const Layout = ({children}) => {
  return (
    <>
      <div className='header'>
        <Header />
      </div>
        {children}
      <div className='footer'>
        <Footer />
      </div>
    </>
  )
}

export default Layout