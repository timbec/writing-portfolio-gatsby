import React from 'react';

import Header from './header';
import Footer from './footer';

import '../styles/base.scss';

const Layout = (props) => {
    return (
        <div className="page">
            <Header></Header>
            {props.children}
            <Footer></Footer>
        </div>
    )
}

export default Layout; 