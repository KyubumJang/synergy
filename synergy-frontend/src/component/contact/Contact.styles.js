import styled from 'styled-components';

export const ContactContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 3rem;
  margin-bottom: 3rem;
`;

export const ContactContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  @media only screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const ContactImg = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Img = styled.img`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  object-fit: cover;
  border-radius: 4px;
  height: 300px;
  @media only screen and (min-width: 300px) {
    width: 300px;
  }
  @media only screen and (min-width: 400px) {
    width: 400px;
  }
  @media only screen and (min-width: 600px) {
    width: 500px;
  }
  @media only screen and (min-width: 800px) {
    width: 800px;
  }
  @media only screen and (min-width: 1000px) {
    width: 500px;
    height: 400px;
  }
  @media only screen and (min-width: 1200px) {
    width: 600px;
  }
  @media only screen and (min-width: 1500px) {
    width: 750px;
  }
  @media only screen and (min-width: 1800px) {
    width: 900px;
  }
`;

export const ContactContentText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  @media only screen and (min-width: 1200px) {
    padding: 3rem 6rem;
  }
  @media only screen and (min-width: 1500px) {
    padding: 3rem 9rem;
  }
`;

export const ContactContentTitle = styled.h2`
  font-size: 3rem;
  font-weight: bold;
`;

export const ContactText = styled.p`
  font-size: 1.5rem;
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;
