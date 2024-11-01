import { StyledSection, SectionTitle } from './Section.styled';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => (
  <StyledSection>
    <SectionTitle>{title}</SectionTitle>
    {children}
  </StyledSection>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
