import React from 'react';
import styled from 'styled-components';

import InputSectionContainer from '../../containers/main/InputSectionContainer';

const HeaderTitle = styled.h1`
  font-size: 3.4375rem;
  font-family: 'Sigmar One', cursive;
  margin: 0;
`;

const HeaderDesc = styled.h3`
  font-size: 0.875rem;
  text-align: center;
  opacity: 0.8;
`;

const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

interface MainTemplateProps {}

const MainTemplate: React.FC<MainTemplateProps> = () => (
  <MainSection>
    <HeaderTitle>JongkaoTalk</HeaderTitle>
    <HeaderDesc>
      JongkaoTalk is <b>Free Chatting Service</b>.
      <br />
      Please enter your account. If you don't have username please sign up.
    </HeaderDesc>
    <InputSectionContainer />
  </MainSection>
);

export default MainTemplate;
