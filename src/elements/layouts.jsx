import styled from 'styled-components';
import { MUI_PALETTE } from '../utils/theme';

// Background image
import background from "../assets/jpg/nature.jpg";

// Layout for search component
export const Main = styled.div`
  color: ${MUI_PALETTE.primary.main};
  padding:20px 100px;
  min-height: 50%;
  width: 90%;
  margin: auto;
  font-size: 1.3rem;
  @media screen and (max-width: 600px) {
    width: 90%;
    background-color: white;
    height: 100%;
    padding:20px 20px;
  }
`;

// Layout Page
export const Layout = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    /* On screens that are 600px or less, set the background color to olive */
    @media screen and (max-width: 600px) {
        background: url(${background}) no-repeat center center fixed;
        background-size: cover;
        height: 100vh;
    }
`;

export const Head = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 250px;
    background: url(${background}) no-repeat center center fixed;
    background-size: cover;
    object-fit: cover;
    @media screen and (max-width: 600px) {
        display: none;
    }
    
`;


export const Content = styled.div`
    overflow-y: auto;
`;

// Job detail row
export const DetailRow = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
`;

export const DetailColumn = styled.div`
    display: flex;
    flex-direction: column;
`;

export const MainArea = styled.div`
    padding:10px
    padding-top: 20px;
    width: 80%;
    margin:auto;
    @media screen and (max-width: 600px) {
        width: 90%;
        background-color: white;
    }
`;
// Skill Line

export const SkillLine = styled.div`
    height: 25px;
    align-items: center;
    display: grid;
    grid-template-columns: 2fr 2fr 2fr;
    grid-template-rows: auto;
    border: 1px solid transparent;
`;

export const SkillHeader = styled.div`
    display: grid;
    grid-template-columns: 2fr 8fr;
    align-items: center;
    margin-bottom: 15px;
    @media screen and (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`;

export const SkillName = styled.div`
    font-weight: bold;
    color: ${MUI_PALETTE.primary.main};
`;

export const SkillElement = styled.div`
    position: relative;
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    font-weight: bold;
`;

export const SkillELementFirst = styled.div`
    display: flex;
    height: 100%;
    justify-content: flex-start;
    align-items: center;
`;