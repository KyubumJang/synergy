import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ImgBg from '../../images/synergy-bg.jpg';

export const IntroContainer = styled.div`
  background-image: linear-gradient(to top right, rgba(11, 10, 10, 0.38), rgba(11, 10, 10, 0.19)),
    url(${ImgBg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 80vh;
  @media only screen and (max-width: 1600px) {
    height: 85vh;
  }
`;

export const IntroContent = styled.section`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fffefe;
  @media only screen and (max-width: 375px) {
    text-align: start;
    height: 80%;
  }
`;

export const IntroContentText = styled.div`
  width: 50%;
  padding-top: 5rem;
  padding-bottom: 5rem
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 600px) {
    width: 80%;
  }
  @media only screen and (max-width: 375px) {
    position: absolute;
    align-items: flex-start;
  }
`;
// 반환되는 값은 선호하는 값이 최소값 보다 낮거나 최대값보다 높을 때 까지 선호하는 값이 된다.
// 반응형 웹디자인은 퍼센트값에 상당히 의존하고 있는데 타겟 요소의 너비값과 높이값에 맞게 사용하기 위해서 vw를 사용한다. vw는 100분의 1단위로 750px면 1vw면 7.5px지원
// rem의 경우 root em으로 폰트 사이즈를 지정하면 모든 자식 요소들은 body의 폰트 사이즈에 영향을 받는다. 단순하게 단일사이즈로 표현하기 위한 경우 rem단위를 사용한다.
export const IntroTitle = styled.h1`
  font-size: clamp(1rem, 10vw, 5rem);
  font-weight: 900;
  letter-spacing: 0.5rem;
  line-height: 1;
  padding-bottom: 2rem;
`;

export const IntroTitleText = styled.span`
  display: block;
`;

export const IntroSubTitle = styled.h2`
  font-size: clamp(2rem, 2vw, 4rem);
  font-weight: 400;
  letter-spacing: 1rem;
  padding-top: 0.5rem;
`;

export const IntroText = styled.h3`
  font-size: clamp(2rem, 2.5vw, 3rem);
  font-weight: 400;
  padding: 0.5rem 0.5rem;
  @media only screen and (max-width: 375px) {
    padding: 1.5rem 0;
  }
`;

export const IntroBtn = styled(Link)`
  text-decoration: none;
  outline: none;
  border: none;
`;
