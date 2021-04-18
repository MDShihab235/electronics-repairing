import React from 'react';
import FeaturedService from '../FeaturedService/FeaturedService';
import Testimonials from '../Testimonials/Testimonials';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Engineers from '../Engineers/Engineers';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <FeaturedService></FeaturedService>
            <Testimonials></Testimonials>
            <Engineers></Engineers>
            <Footer></Footer>
        </div>
    );
};

export default Home;