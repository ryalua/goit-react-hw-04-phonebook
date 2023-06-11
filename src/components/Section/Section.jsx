import PropTypes from 'prop-types';
import { SectionTitle, Title } from './SectionStyled';

export const Section = ({ title, children }) => (
  <SectionTitle>
    <Title>{title}</Title>
    {children}
  </SectionTitle>
);

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
};
