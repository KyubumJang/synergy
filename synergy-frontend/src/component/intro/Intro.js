import Navbar from '../nav/Navbar';
import Button from '../common/Button/Button';
import {
  IntroContainer,
  IntroContent,
  IntroContentText,
  IntroTitle,
  IntroTitleText,
  IntroSubTitle,
  IntroText,
  IntroBtn,
} from './Intro.styles';

const Intro = () => {
  return (
    <div>
      <IntroContainer>
        <Navbar />
        <IntroContent>
          <IntroContentText>
            <IntroTitle>
              <IntroTitleText>Synergy</IntroTitleText>
            </IntroTitle>
            <IntroSubTitle>창업 2년차 에너지신산업</IntroSubTitle>
            <IntroSubTitle>관련 2020년 매출 46억원</IntroSubTitle>
            <IntroSubTitle>에너지 혁신 벤처기업</IntroSubTitle>
            <IntroText>에너지신사업 관련 특허 등록 15건</IntroText>
            <IntroBtn to="/service">
              <Button fullwidth>
                더 알아보기
              </Button>
            </IntroBtn>
          </IntroContentText>
        </IntroContent>
      </IntroContainer>
    </div>
  );
};

export default Intro;
