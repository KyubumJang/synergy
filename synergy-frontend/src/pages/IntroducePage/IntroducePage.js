import React from 'react';
import styled from 'styled-components';
import Navbar from '../../component/nav/Navbar';
import Introduce from '../../component/introduce/Introduce';
// import Welcome from '';
// import Service from '';
import Footer from '../../component/footer/Footer';
import { Button, ButtonToolbar } from 'react-bootstrap';

const Wrapper = styled.div``;

const HomePage = () => {
    return (
    <div>
        <Wrapper>
            <Navbar />
            <Introduce />
            <Footer />
        </Wrapper>
    </div>

    );
}

export default HomePage;