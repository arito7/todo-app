import React from 'react';
import { BsGithub } from 'react-icons/bs';
import styled from 'styled-components';

const Footer = () => {
  return (
    <StyledFooter>
      Copyright &copy; 2022 arito7{' '}
      <a
        href="https://github.com/arito7"
        style={{ color: '#fff', display: 'grid', alignContents: 'center' }}
      >
        <BsGithub style={{ height: '1.25rem', width: '1.25rem' }} />
      </a>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  grid-column: 1 / -1;
  padding: 0.5rem;
  color: white;
  background-color: var(--header-bg);
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, auto);
  justify-content: center;
  align-items: center;
`;

export default Footer;
