import {
    WelcomeContainer,
    WelcomeContent,
    WelcomeImg,
    WelcomeContentText,
    WelcomeContentTitle,
    WelcomeText,
    Img,
  } from './Welcome.styles';
  import synergyImg from '../../images/welcome.png';
  const Welcome = () => {
    return (
      <div>
        <WelcomeContainer>
          <WelcomeContent>
            <WelcomeImg>
              <Img src={synergyImg} alt="Synergy" />
            </WelcomeImg>
            <WelcomeContentText>
              <WelcomeContentTitle>Synergy = Energy</WelcomeContentTitle>
              <WelcomeText>
                저희는 Synergy를 추구합니다. 데이터 전문가, 엔지니어링 전문가가 모여 에너지 분야의 문제를 데이터와
                엔지니어링 기술의 관점에서 해결합니다.
              </WelcomeText>
            </WelcomeContentText>
          </WelcomeContent>
        </WelcomeContainer>
      </div>
    );
  };
  
  export default Welcome;
  