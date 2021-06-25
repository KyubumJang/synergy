import {
    ServiceContainer,
    ServiceContent,
    ServiceImg,
    ServiceContentText,
    ServiceContentTitle,
    ServiceText,
    Img,
  } from './Service.styles';
  import synergyImg from '../../images/dr.webp';
  const Service2 = () => {
    return (
      <div>
        <ServiceContainer>
          <ServiceContent>
            <ServiceImg>
              <Img src={synergyImg} alt="service" />
            </ServiceImg>
            <ServiceContentText>
              <ServiceContentTitle>수요반응(DR) 서비스 </ServiceContentTitle>
              <ServiceText>
                전기사용자를 모집하여 일상속에서 전기사용자의 아낀 전기를 전력시장에 판매하여 전기사용자와 수익을
                공유해드립니다.
              </ServiceText>
            </ServiceContentText>
          </ServiceContent>
        </ServiceContainer>
      </div>
    );
  };
  
  export default Service2;
  