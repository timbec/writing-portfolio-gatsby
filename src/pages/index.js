import React from "react";
import { Link, graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import FeaturedArticles from '../components/home/featured';
import RemainingArticles from '../components/home/remain-articles';
import MainSections from '../components/home/sections';




/**
 * TODO: 
 * Need to organize components itto folders (see how 'road to react' guy does this): 
 * 1) 'static' folder for header/footer/layout. 
 * 2) 'home' folder for home page. 
 * Need Four components: 
 * 1) Search
 * 2) Featured
 * 3) Sections
 * 4) All articles (with 'read more' after 3 or 6 first articles)
 */

const HomePage = () => {

    return (
        <main>
            <Layout>
                <FeaturedArticles></FeaturedArticles>
                <MainSections></MainSections>
                <RemainingArticles></RemainingArticles>

            </Layout>
        </main>

    )
}

export default HomePage;

