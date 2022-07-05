import styled from "styled-components";
import starFontOpening from "../../fonts/star-opening-font.ttf";
import starFontTitle from "../../fonts/star-font.ttf";

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  width: 400px;
  height: 300px;
`;

export const Input = styled.input`
  display: flex;
  width: 90%;
  height: 3.5rem;
  margin: 1rem 0;
  font-size: 2rem;
  color: ${(props) => props.colorProp};
`;

export const Select = styled.select`
  @font-face {
    font-family: "Franklin Gothic Book";
    src: url(${starFontOpening});
  }
  font-family: "Franklin Gothic Book";
  width: 90%;
  height: 3.5rem;
  margin: 1rem 0;
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: 2px;
  color: ${(props) => props.colorProp};
`;

export const Option = styled.option`
  @font-face {
    font-family: "Franklin Gothic Book";
    src: url(${starFontOpening});
  }
  font-family: "Franklin Gothic Book";
  font-size: 2rem;
  font-weight: 600;
  &.red {
    color: red;
  }
  &.black {
    color: black;
  }
  &.blue {
    color: blue;
  }
  &.green {
    color: green;
  }
  &.pink {
    color: pink;
  }
`;

export const DivButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 460px;
  height: auto;
  margin-top: 50px;
`;

export const Button = styled.button`
  @font-face {
    font-family: "Star Jedi";
    src: url(${starFontTitle});
  }
  height: 35px;
  width: auto;
  padding: 0 5px;
  font-size: 1.8rem;
  font-family: "Star Jedi";
  border: none;
  border-radius: 4px;

  &.modal-save {
    background-color: #edf2f5;
  }
  &.modal-save:hover {
    background-color: #28a745;
    cursor: pointer;
  }

  &.modal-close {
    background-color: #edf2f5;
  }
  &.modal-close:hover {
    background-color: white;
    cursor: pointer;
  }
`;
