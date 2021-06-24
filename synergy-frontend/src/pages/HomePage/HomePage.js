import React from 'react';
// import { useEffect } from 'react';
import Button from '../../component/common/Button/Button';
import styled from 'styled-components';
import Intro from '../../component/intro/Intro'
// import Welcome from '';
// import Service from '';
// import Footer from '';

const Wrapper = styled.div``;

const HomePage = () => {
    return (
    <div>
        <Wrapper>
            <Intro />
            <Button>버튼</Button>
            {/* <Welcome /> */}
            {/* <Service /> */}
            {/* <Footer /> */}
        </Wrapper>
    </div>

    );
}

export default HomePage;