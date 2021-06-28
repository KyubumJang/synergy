import React from 'react';
import {
    FooterSection,
    FooterContainer,
    FooterNewsletter,
    FooterNewsletterTitle,
    FooterNewsletterText,
    FooterNewsletterForm,
    FooterNewsletterInput,
    FooterBtn,
    FooterLinkContainer,
    FooterLinksWrapper,
    FooterLinks,
    FooterLinkTitle,
    FooterLink,
    FooterOutLink,
    FooterCopyRight,
    FooterLabel,
  } from '../footer/Footer.styles';
  function Footer() {
    return (
      <div>
        <FooterSection>
          <FooterContainer>
            <FooterNewsletter>
              <FooterNewsletterTitle>Synergy</FooterNewsletterTitle>
              <FooterNewsletterText>에너지 혁신 벤처기업</FooterNewsletterText>
              <FooterNewsletterText>울산광역시 남구 번영로124번길 21</FooterNewsletterText>
              <FooterNewsletterText>대표자 : 장권영, 정욱</FooterNewsletterText>
              <FooterNewsletterText>사업자등록번호 : 855-86-01418 </FooterNewsletterText>
              <FooterNewsletterText>TEL : 070-5226-1147</FooterNewsletterText>
              <FooterNewsletterText>FAX : 070-8228-1147</FooterNewsletterText>
            </FooterNewsletter>
            <FooterLinkContainer>
              <FooterLinksWrapper>
                <FooterLinks>
                  <FooterLinkTitle>사업영역</FooterLinkTitle>
                  <FooterLink to="/service">How it works</FooterLink>
                </FooterLinks>
                <FooterLinks>
                  <FooterLinkTitle>회사소개</FooterLinkTitle>
                  <FooterLink to="/introduce">Our Copany</FooterLink>
                </FooterLinks>
              </FooterLinksWrapper>
            </FooterLinkContainer>
            <FooterLinksWrapper>
              <FooterLinks>
                <FooterCopyRight>본 홈페이지의 모든 권리는 주식회사 시너지(Synergy Inc.)에 귀속됩니다.</FooterCopyRight>
                <FooterCopyRight>© COPYRIGHT ⓒ 2021 SYNERGY INC. ALL RIGHTS RESERVED.</FooterCopyRight>
              </FooterLinks>
            </FooterLinksWrapper>
          </FooterContainer>
        </FooterSection>
      </div>
    );
  }
  
  export default Footer;
  