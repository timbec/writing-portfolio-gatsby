import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';



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
            <h1>Tim Beckett</h1>
            <h3>Writing Portfolio</h3>

            <nav className="menu-container">
                <ul>
                    <li className="link" >
                        <Link to="/">Home</Link></li>
                    <li className="link"><Link to="/fiction">Fiction</Link></li>
                    <li className="link"><Link to="/non-fiction">Non Fiction</Link></li>
                    <li className="link"><Link to="/about">About</Link></li>
                    <li className="link"><Link to="/contact">Contact</Link></li>
                </ul>
            </nav >
        </header >
    )
}

export default Header; 