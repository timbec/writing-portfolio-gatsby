import React from 'react';

import Header from './static/header';
import Footer from './static/footer';

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