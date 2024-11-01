import styled from 'styled-components';

export const StyledSection = styled.section`
  margin-top: 30px;
  margin-bottom: 30px;

  &: nth-child(2) {
    margin-top: 0;
    margin-bottom: 30px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 30px;
  font-weight: 700;
  margin: 0;
  margin-bottom: 20px;
  text-align: center;
`;
