import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  max-width: 1240px;
  margin: auto;
  margin-top: 80px;
  margin-bottom: 400px;
  padding: 0 20px;

  @media (max-width: 900px) {
    flex-wrap: wrap;
    margin-bottom: 60px;
    margin-top: 0;
  }
`;

export const LeftSide = styled.div`
    width: 45%;
    box-sizing: border-box;
    margin-top: 90px;

    @media (max-width: 900px) {
      width: 100%;
      padding-bottom: 20px;
    }

    p{
        color: #000;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 154%; /* 30.8px */
        max-width: 420px;

        @media (max-width: 900px) {
          max-width: 100%;
        }
    }

`;

export const RightSide = styled.div`
    width: 52%;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 20px;
    background: var(--Primary-color-6, #FFF);
    box-shadow: 0px 4px 22px 0px rgba(0, 0, 0, 0.08);
    padding: 40px 70px;

    @media (max-width: 900px) {
      width: 100%;
      padding: 40px 20px;
    }
`;

export const PostList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 63px;
    max-width: 435px;
`;

export const PostItem = styled.li`
  cursor: pointer;
  background: ${({ isActive }) => (isActive ? '#753FEA' : 'transparent')};
  transition: background-color 0.3s ease; /* Add a smooth transition for background color */

  border-radius: 32px;
  border: 1px solid var(--Primary-1, #753FEA);
  
  color: ${({ isActive }) => (isActive ? '#fff' : '#753FEA')}; #FFF;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  padding: 6px 20px;

  &:hover {
    opacity:  ${({ isActive }) => (isActive ? '0.85' : '0.65')};
  }
`;

export const PostTitle = styled.h2`
    margin-bottom: 10px;
    color: var(--Primary-Color-4);
    font-size: 22px;
    font-style: italic;
    font-weight: 300;
    line-height: 38.159px; /* 173.449% */
`;

export const ExcerptButton = styled.button`
    cursor: pointer;
    border-radius: 49px;
    background: var(--B2);
    color: #FFF;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%; /* 18px */
    letter-spacing: 0.5px;
    padding: 14px 31px;
    margin-top: 30px;
`;

export const SummarizeButton = styled.button`
  border-radius: 28px;
  border: 1px solid var(--border-success-default);
  background: var(--bg-success-light-default);
  color: var(--Green);
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 12px */
  letter-spacing: 0.343px;
  padding: 11px 18px;
  cursor: pointer;
`;

export const PostContent = styled.div`
    margin-top: 10px;
    color: var(--Gray);
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: 20px; /* 142.857% */
    letter-spacing: -0.42px;
    position: relative;
    
    &:after{
      content: '';
      background: ${({ showExcerpt }) => (!showExcerpt ? 'linear-gradient(180deg, rgba(255, 255, 255, 0.00) -10.06%, #FFF 88.01%);' : 'none')}; 
      position: absolute;
      width: 100%;
      height: 50px;
      bottom: 0;
    }
`;

export const PostListContainer = styled.div`
  max-height: ${({ showAll }) => (showAll ? 'none' : '400px')}; /* Set the maximum height for initial display */
  overflow: hidden;
  transition: max-height 0.5s ease; /* Add a smooth transition for max-height */
`;

export const ShowMoreButton = styled.button`
  background-color: #3498db;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  margin-top: 10px;
`;