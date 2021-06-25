import {
    ContactContainer,
    ContactContent,
    ContactImg,
    ContactContentText,
    ContactContentTitle,
    ContactText,
    Img,
  } from './Contact.styles';
//   import synergyImg from '../../images/Contact.png';
  const Contact = () => {
    return (
      <div>
        <ContactContainer>
          <ContactContent>
          <ContactContentText>
              <ContactContentTitle>상담 문의</ContactContentTitle>
              <ContactText>
                신재생에너지(태양광 발전소) 시공 EPC, 금융 EPC, 에너지융합 솔루션에 관한 모든 문의를 환영합니다!
              </ContactText>
            </ContactContentText>
            <ContactContentText>
              <ContactContentTitle>오시는 길</ContactContentTitle>
              <ContactText>
                본사 : 울산광역시 남구 번영로 124번길 21
                강남베이스 : 서울특별시 강남구 봉은사로22길 47
                성남지사 : 경기도 성남시 분당구 판교로289번길 20,
                1동 7층  지능형ICT융합연구센터
                대구지사 : 대구광역시 달서구 성서공단로 46-17
                지식산업센터 나노융합실용화센터 302호
              </ContactText>
            </ContactContentText>
          </ContactContent>
        </ContactContainer>
      </div>
    );
  };
  
  export default Contact;
  