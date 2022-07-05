import React, {Fragment, useContext, useEffect} from 'react';
import styled from 'styled-components';
import starFontOpening from '../../fonts/star-opening-font.ttf';
import {getData} from '../../services/getAxios';
import CharactersProjectContext from '../context/CharactersProjectContext';
import Loader from '../loader/Loader';

const StyledDiv = styled.div`
  button {
    justify-content: center;
    align-items: center;
    height: 35px;
    width: 300px;
    padding: 0 5px;
    font-size: 1.8rem;
    font-family: 'Star Jedi';
    border: none;
    border-radius: 4px;

    &:hover {
      background-color: rgb(75, 213, 238);
      cursor: pointer;
    }

    &.backinput {
      width: 140px;
      height: 60px;
      margin-top: 1rem;
      margin-right: 20px;
    }
  }

  .anotherphrase {
    display: inline-flex;
    height: 60px;
    width: 140px;
    padding: 0 5px;
    font-size: 1.8rem;
    font-family: 'Star Jedi';
    border: none;
    border-radius: 4px;
    background-color: white;
    text-align: center;

    &:hover {
      background-color: rgb(75, 213, 238);
      cursor: pointer;
    }
  }

  p {
    @font-face {
      font-family: 'Franklin Gothic Book';
      src: url(${starFontOpening});
    }
    text-align: center;
    font-size: 2.5rem;
    font-family: 'Franklin Gothic Book';
    font-weight: 800;
    letter-spacing: 0.3rem;
    color: rgb(75, 213, 238);
    background-color: lightyellow;
  }
`;

const CreateCharacterPhrases = () => {
  const {setVisible, loading, setLoading, setDatos, nextPhrase, form, setForm} =
    useContext(CharactersProjectContext);

  useEffect(() => {
    setLoading(true);
    getData(process.env.REACT_APP_MY_ZEN_API_URL)
      .then((res) => {
        setDatos(res);
        setForm({
          ...form,
          phrase: res,
        });
      })
      .catch((err) => {
        setForm({
          ...form,
          phrase: 'Error number default',
        });
        setDatos('Error number default');
        console.log(err);
      });

    setLoading(false);
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <StyledDiv>
          <p>{form.phrase}</p>
          <button className="backinput" onClick={() => setVisible(false)}>
            volver al input
          </button>
          <div className="anotherphrase" onClick={nextPhrase}>
            pedir otra frase
          </div>
        </StyledDiv>
      )}
    </Fragment>
  );
};

export default CreateCharacterPhrases;
