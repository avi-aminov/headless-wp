// NavStyles.js
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Nav = styled.nav`
  z-index: 99;
  animation: ${fadeIn} 0.5s;
  display: flex;
  justify-content: space-between;
  padding: 4px 15px;
  align-items: center;

  li {

    padding: 12px 34px;

    a {
        
        color: var(--Primary-Color-4);
        text-align: center;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px; /* 150% */
        text-decoration: none;
        transition: background 0.3s, color 0.3s; 

        &:hover {
            text-decoration: underline;
        }
    }

    &.btn-border{ 
        padding: 0;
        a{
            padding: 12px 34px;
            color: var(--Primary-Color-1);
            font-weight: 500;
            line-height: 135%; /* 21.6px */
            border-radius: 32px;
            border: 2px solid var(--Primary-Color-1);

           &:hover{
                text-decoration: none;
                background: var(--Primary-Color-1);
                color: var(--White);
            }
        }
    }
  }

  img {
    max-width: 185px;
    height: auto;
  }
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: end;
  margin: 0;
  padding: 0;

  @media (max-width: 900px) {
    position: absolute;
    flex-flow: column;
    background: #fff;
    height: 100vh;
    padding-bottom: 31px;
    top: 70px;
    z-index: 101;
    width: 100%;
    max-width: 280px;
    right: ${({ isOpen }) => (isOpen ? '0;' : '-280px')};
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    padding-top: 20px;
    transition: right 0.4s ease-in-out
  }
`;

export const Burger = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
  display: none;

  @media (max-width: 900px) {
    display: flex;
  }

`;
