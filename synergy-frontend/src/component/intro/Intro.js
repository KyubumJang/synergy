// import Navbar from '../nav/Navbar';
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
        {/* <Navbar /> */}
        <IntroContent>
          <IntroContentText>
            <IntroTitle>
              <IntroTitleText>Synergy</IntroTitleText>
            </IntroTitle>
            <IntroSubTitle>창업 2년차 에너지신산업 관련</IntroSubTitle>
            <IntroSubTitle>2020년 매출 46억원, 일자리 22인 창출</IntroSubTitle>
            <IntroText>에너지신사업 관련 특허 등록 15건.</IntroText>
            <IntroBtn to="/register">
              <Button primary big bigFont bigRadius>
                Register Now
              </Button>
            </IntroBtn>
          </IntroContentText>
        </IntroContent>
      </IntroContainer>
    </div>
  );
};

export default Intro;
