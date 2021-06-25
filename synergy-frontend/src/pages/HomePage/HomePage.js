import React from 'react';
import styled from 'styled-components';
import Intro from '../../component/intro/Intro'
import Welcome from '../../component/welcome/Welcome';
import Service from '../../component/service/Service';
import Service2 from '../../component/service/Service2';
import Service3 from '../../component/service/Service3';
import Footer from '../../component/footer/Footer';
import { Button, ButtonToolbar } from 'react-bootstrap';

const Wrapper = styled.div``;

const HomePage = () => {
    return (
    <div>
        <Wrapper>
            <Intro />
            <Welcome />
            <Service />
            <Service2 />
            <Service3 />
            <Footer />
        </Wrapper>
    </div>

    );
}

export default HomePage;