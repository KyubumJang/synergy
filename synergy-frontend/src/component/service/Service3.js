import {
    ServiceContainer2,
    ServiceContent,
    ServiceImg,
    ServiceContentText,
    ServiceContentTitle,
    ServiceText,
    Img,
  } from './Service.styles';
  import synergyImg from '../../images/ee.webp';
  const Service3 = () => {
    return (
      <div>
        <ServiceContainer2>
          <ServiceContent>
            <ServiceImg>
              <Img src={synergyImg} alt="service" />
            </ServiceImg>
            <ServiceContentText>
              <ServiceContentTitle>에너지효율화(EE) 서비스 </ServiceContentTitle>
              <ServiceText>
                대용량 전기 사용자의 전력계통을 분석하여 전기 사용장에 최적화된 솔루션을 제안하고 구축하며
                전기 사용자에게 경제적 가치와 전력계통의 안정성을 높여드립니다.
              </ServiceText>
            </ServiceContentText>
          </ServiceContent>
        </ServiceContainer2>
      </div>
    );
  };
  
  export default Service3;
  