// HomePage.style.js
import styled from 'styled-components';
import hero from '../assets/hero-0001.png';
import vector from '../assets/vector.svg';

export const HeroSection = styled.div`
  background: url(${hero}) center/cover no-repeat;
  height: 680px;
  background-size: 865px;
  background-position: 127% 47px;
  display: flex;
  align-items: center;
  transition: all 0.3s;

  @media (max-width: 1124px) {
    background-size: 735px;
    background-position: 155% 100px;
  }

  @media (max-width: 900px) {
    background: none;
    text-align: center;
    height: auto;
    padding-bottom: 40px;
    padding-top: 30px;
  }

`;

export const ContentWrap = styled.div`
  
`;

export const HeroImage = styled.img`
    max-width: 100%;
    display: none;

    @media (max-width: 900px) {
        display: block;
    }
`;

export const ContentTitle = styled.h1`
    margin: 0;
    color: var(--B2);
    font-size: 60px;
    font-style: italic;
    font-weight: 300;
    line-height: 110%; /* 66px */
    letter-spacing: -0.6px;

    span{
        display: block;
        font-style: normal;
        font-weight: 500;
    }

    @media (max-width: 1124px) {
        font-size: 50px;
    }

    @media (max-width: 900px) {
        
        font-size: 29.288px;
    }
`;

export const Content = styled.p`
    margin: 0;
    color: var(--Black);
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 154%; /* 30.8px */
    padding: 32px 0;
    max-width: 400px;

    
    @media (max-width: 900px) {
        max-width: 100%;
        font-size: 16px;
        padding: 10px 0 0 0;
    }
`;

export const CTA = styled.a`
    border-radius: 38.927px;
    background: var(--Primary-Color-1);
    padding: 13px 29px;
    color: var(--White);
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 170%; /* 34px */
    letter-spacing: 0.397px;
    text-decoration: none;
    outline: 2px solid var(--Primary-Color-1);
    transition: background 0.3s, color 0.3s;

    &:hover{
        background: var(--White);
        color: var(--Primary-Color-1);
    }
`;


export const LogosTitle = styled.p`
    text-align: center;
    color: var(--secondary-4-typography, rgba(91, 91, 91, 0.60));
    font-size: 14.913px;
    font-style: normal;
    font-weight: 400;
    line-height: 22.37px; /* 150% */
    margin: 0 0 15px 0;
`;

export const LogosWrap = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    margin: 0;
    padding: 0;
    gap: 35px 19px;
    list-style: none;
    max-width: 1060px;
    margin: auto;

    @media (max-width: 900px) {
        gap: 10px 19px;
    }
    

    li{
        img{
            
            max-width: 100%;
            filter: brightness(0) saturate(100%) invert(83%) sepia(5%) saturate(25%) hue-rotate(37deg) brightness(89%) contrast(84%);
        
            &:hover{
                filter: none;
                transition: background 0.3s, color 0.3s;
            }
        }
    }
`;

export const MarqueeContent = styled.p`
    color: var(--new-web-2);
    font-size: 27px;
    font-style: italic;
    font-weight: 300;
    line-height: 40%; /* 10.8px */
    letter-spacing: -0.54px;
    position: relative;
    padding-left: 70px;

    &:before{
        content: '';
        position: absolute;
        background: url(${vector});
        width: 24px;
        height: 27px;
        left: 37px;
        top: -9px;
    }
`;

export const SecondTitle = styled.h2`
    color: var(--black);
    text-align: center;
    font-size: 60px;
    font-style: normal;
    font-weight: 500;
    line-height: 110%; /* 66px */
    letter-spacing: -0.6px;
    margin: 137px 0 42px 0;

    span{
        font-size: 60px;
        font-style: italic;
        font-weight: 300;
    }

    @media (max-width: 900px) {
        font-size: 29.288px;

        span{
            font-size: 29.288px;
        }
    }  
`;