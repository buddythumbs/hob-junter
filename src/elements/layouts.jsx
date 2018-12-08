import styled from 'styled-components';
import { MUI_PALETTE } from '../utils/theme';

// Background image
import background from "../assets/jpg/nature.jpg";

// Layout for search component
export const Main = styled.div`
  color: ${MUI_PALETTE.primary.main};
  padding:20px 100px;
  background-color: rgba(255,255,255,0.89);
  min-height: 50%;
  width: 70%;
  margin: auto;
  font-size: 1.3rem;
`;

// Layout Page
export const Layout = styled.div`
    display: grid;
    grid-template-rows: 10vh 90vh;
    grid-template-columns: 1fr;
    width: 100%;
    max-height:100vh;
    background: url(${background}) no-repeat center center fixed;
    background-size: cover;
`;

export const Head = styled.div`
    max-height: 5vh;
`;

export const Content = styled.div`
    max-height: 90vh;
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