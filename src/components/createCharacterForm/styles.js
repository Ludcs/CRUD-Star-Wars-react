import styled from "styled-components";
import starFontOpening from "../../fonts/star-opening-font.ttf";

export const Form = styled.form`
  margin-top: 300px;
`;

export const Option = styled.option`
  @font-face {
    font-family: "Franklin Gothic Book";
    src: url(${starFontOpening});
  }
  font-family: "Franklin Gothic Book";
  font-size: 2rem;
  font-weight: 600;
  /* &.red {
    color: red;
  }
  &.black {
    color: yellow;
  }
  &.blue {
    color: blue;
  }
  &.green {
    color: green;
  }
  &.pink {
    color: pink;
  } */
`;

export const Select = styled.select`
  @font-face {
    font-family: "Franklin Gothic Book";
    src: url(${starFontOpening});
  }
  font-family: "Franklin Gothic Book";
  height: 3.5rem;
  margin: 1rem 0;
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: 2px;
  color: ${(props) => props.colorProp};
`;
