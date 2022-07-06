import React, {Fragment, useContext} from 'react';
import {Link} from 'react-router-dom';
import styled, {createGlobalStyle} from 'styled-components';
import starFontTitle from '../fonts/star-font.ttf';
import starFontOpening from '../fonts/star-opening-font.ttf';
import bgImgCharacter from '../images/star-wars-create.jpg';
import CreateCharacterForm from '../components/createCharacterForm/CreateCharacterForm';
import CharactersProjectContext from '../components/context/CharactersProjectContext';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 62.5%;
}

@font-face {
  font-family: 'Star Jedi';
  src: url(${starFontTitle});
}

@font-face {
  font-family: 'Franklin Gothic Book';
  src: url(${starFontOpening});
}
`;
const StyledBody = styled.body`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: url(${bgImgCharacter}) center center;

  h1 {
    font-family: 'Star Jedi';
    height: auto;
    color: black;
    -webkit-text-stroke: 0.8px rgb(75, 213, 238);
    font-size: 4rem;
  }
`;
const StyledLink = styled(Link)`
  justify-content: center;
  height: 35px;
  width: auto;
  padding: 0 5px;
  font-size: 2rem;
  font-family: 'Star Jedi';
  color: black;
  background-color: white;
  text-decoration: none;
  border: none;
  border-radius: 4px;

  &:hover {
    background-color: yellow;
    cursor: pointer;
  }
`;

const CreateCharacter = () => {
  const {createData} = useContext(CharactersProjectContext);
  return (
    <Fragment>
      <GlobalStyle />
      <StyledBody>
        <h1>vida a tu personaje, aquí le darás!</h1>
        <CreateCharacterForm createData={createData} />
        <StyledLink to="./">Home</StyledLink>
      </StyledBody>
    </Fragment>
  );
};

export default CreateCharacter;
