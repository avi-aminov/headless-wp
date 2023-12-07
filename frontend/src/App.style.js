import styled, { css, keyframes } from 'styled-components';

export const Wrapper = styled.div`
    font-family: 'Roboto', sans-serif;
`;

export const Container = styled.div`
    max-width: 1240px;
    margin: auto;
    padding: 0 20px;
`;


const slideDownAnimation = keyframes`
    from {
        transform: translateY(-75px);
    }
    to {
        transform: translateY(0);
    }
`;

export const NavWrap = styled.div`
    background: #fff; 
    transition: background 0.3s, color 0.3s;
    position: relative;
 
    ${({ isSticky }) => isSticky && css`
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        animation: ${slideDownAnimation} 0.3s ease-in-out;
        z-index: 99;
    `}
`;