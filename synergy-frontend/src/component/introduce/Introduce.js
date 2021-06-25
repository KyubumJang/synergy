import {
    IntroduceContainer,
    IntroduceContent,
    IntroduceImg,
    IntroduceContentText,
    IntroduceContentTitle,
    IntroduceText,
    Img,
  } from './Introduce.styles';
  import synergyImg from '../../images/Introduce.jpeg';
  const Introduce = () => {
    return (
      <div>
        <IntroduceContainer>
          <IntroduceContent>
            <IntroduceImg>
              <Img src={synergyImg} alt="Synergy" />
            </IntroduceImg>
            <IntroduceContentText>
              <IntroduceContentTitle>Synergy</IntroduceContentTitle>
              <IntroduceText>
                창업 2년차 에너지 신사업 관련 2020년 매출 46억원 창출, 2021년 매출 100억원 예정,
                한국동서발전 에너지신사업 협력기업 선정, 에너지 신산업관련 특허 등록 15건, 출원 23건
              </IntroduceText>
            </IntroduceContentText>
          </IntroduceContent>
        </IntroduceContainer>
      </div>
    );
  };
  
  export default Introduce;
  