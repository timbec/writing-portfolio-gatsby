import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';


//import './header.module.scss';
import headerStyles from './header.module.scss';


const Header = () => {
    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
    `)
    return (
        <header>
            <h1>{data.site.siteMetadata.title}</h1>

            <nav className="menu-container">
                <ul>
                    <li className={headerStyles.link} >
                        <Link to="/">Home</Link></li>
                    <li className="link"><Link to="/fiction">Fiction</Link></li>
                    <li className="link"><Link to="/non-fiction">Non Fiction</Link></li>
                    <li className="link"><Link to="/blog">Blog</Link></li>
                    <li className="link"><Link to="/about">About</Link></li>
                    <li className="link"><Link to="/contact">Contact</Link></li>
                </ul>
            </nav >
        </header >
    )
}

export default Header; 