import styled from 'styled-components';
import starFontOpening from '../../fonts/star-opening-font.ttf';

export const DivP = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
`;

export const P = styled.p`
  @font-face {
    font-family: 'Franklin Gothic Book';
    src: url(${starFontOpening});
  }
  font-family: 'Franklin Gothic Book';
  color: rgb(75, 213, 238);
  font-weight: 600;
  text-align: center;
  font-size: 4rem;
`;

export const DivButtons = styled.div`
  display: inline-flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
`;
