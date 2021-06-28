import React from 'react';
import styled from 'styled-components';
import Navbar from '../../component/nav/Navbar';
import Contact from '../../component/contact/Contact';
import Footer from '../../component/footer/Footer';

const Wrapper = styled.div``;

const HomePage = () => {
    return (
    <div>
        <Wrapper>
            <Navbar />
            <Contact />
            <Footer />
        </Wrapper>
    </div>

    );
}

export default HomePage;