import React, {Fragment, useContext} from 'react';
import {Link} from 'react-router-dom';
import styled, {createGlobalStyle} from 'styled-components';
import bgImgHome from '../images/star-wars-home.jpg';
import starFontTitle from '../fonts/star-font.ttf';
import starFontOpening from '../fonts/star-opening-font.ttf';
import HomeList from '../components/homeList/HomeList';
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
const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: url(${bgImgHome}) no-repeat center center;
  overflow-y: auto;

  main {
    width: 70%;
    overflow-y: scroll;
  }

  h1 {
    text-align: center;
    margin-bottom: 2rem;
    font-family: 'Star Jedi';
    height: auto;
    color: black;
    -webkit-text-stroke: 0.8px yellow;
    font-size: 4rem;
  }
`;
const StyledLink = styled(Link)`
  justify-content: center;
  height: 35px;
  width: auto;
  margin-top: 3rem;
  margin-bottom: 1rem;
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

const Home = () => {
  const {db} = useContext(CharactersProjectContext);

  return (
    <Fragment>
      <GlobalStyle />
      <Div>
        <h1>May the force be with you</h1>
        <main>
          {db.length === 0 ? (
            <p>Sin Datos</p>
          ) : (
            db.map((el) => (
              <Fragment key={el.id}>
                <HomeList el={el} />
              </Fragment>
            ))
          )}
        </main>
        <StyledLink to="/create-character">Crea un personaje</StyledLink>
      </Div>
    </Fragment>
  );
};

export default Home;
