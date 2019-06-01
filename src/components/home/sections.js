import React from "react";
import { Link } from 'gatsby';

const MainSections = () => {
    return (
        <section className="main-sections">
            <ul className="section-box">
                <li className="section-box__item section-box__item--active ">
                    <Link to="/fiction" className="section-box__link">
                        Fiction
                    </Link>
                </li>
                <li className="section-box__item">
                    <Link to="/non-fiction" className="section-box__link">
                        Non Fiction
                    </Link>
                </li>
                <li className="section-box__item">
                    <Link to="photography" className="section-box__link">
                        Photography
                    </Link>
                </li>
            </ul>
        </section>
    )
}

export default MainSections;