import styled from "styled-components";
import starFontOpening from "../../fonts/star-opening-font.ttf";
import starFontTitle from "../../fonts/star-font.ttf";

export const Ul = styled.ul`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 0.5rem 0;
`;

export const Img = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 2px;
  ${(props) =>
    props.colorProp === "black"
      ? `
    border: 2px solid #95a5a6;
  `
      : `
    border: 2px solid ${props.colorProp}
  `};
  object-fit: cover;
`;

export const DivLi = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 320px;

  &.div-li-name {
    width: 220px;
  }
`;

export const Li = styled.li`
  @font-face {
    font-family: "Franklin Gothic Book";
    src: url(${starFontOpening});
  }
  font-family: "Franklin Gothic Book";
  margin: 0;
  ${(props) =>
    props.colorProp === "black"
      ? `
    color: #95a5a6;
    
  `
      : `
    color: ${props.colorProp}
  `};
  font-size: 2rem;
  font-weight: 600;
  list-style: none;
  letter-spacing: 2.5px;

  &.li-name {
    margin-left: 1rem;
  }
`;

export const DivButton = styled.div`
  display: flex;
  margin-right: 2rem;
`;

export const Button = styled.button`
  @font-face {
    font-family: "Star Jedi";
    src: url(${starFontTitle});
  }

  height: 35px;
  padding: 0 5px;
  font-size: 2rem;
  font-family: "Star Jedi";
  border: none;
  border-radius: 4px;

  &.btn-edit {
    background-color: #bdc3c7;
    margin-left: 5px;
    margin-right: 1rem;
  }
  &.btn-delete {
    background-color: #bdc3c7;
  }

  &.btn-edit:hover {
    background-color: rgb(75, 213, 238);
    cursor: pointer;
  }
  &.btn-delete:hover {
    background-color: #dc3545;
    cursor: pointer;
  }
`;
