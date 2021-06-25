import {
    ServiceContainer,
    ServiceContent,
    ServiceImg,
    ServiceContentText,
    ServiceContentTitle,
    ServiceText,
    Img,
  } from './Service.styles';
  import synergyImg from '../../images/service.webp';
  const Service = () => {
    return (
      <div>
        <ServiceContainer>
          <ServiceContent>
            <ServiceImg>
              <Img src={synergyImg} alt="service" />
            </ServiceImg>
            <ServiceContentText>
              <ServiceContentTitle>신재생에너지</ServiceContentTitle>
              <ServiceText>
                신재생에너지(태양광발전) 프로젝트의 설계, 조달, 시공뿐만 아니라, 인허가, 금융EPC를 원스톱으로 제
                공해드립니다.
              </ServiceText>
            </ServiceContentText>
          </ServiceContent>
        </ServiceContainer>
      </div>
    );
  };
  
  export default Service;
  