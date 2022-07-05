import React, { Fragment, useContext } from "react";
import styled from "styled-components";
import starFontTitle from "../../fonts/star-font.ttf";
import starFontOpening from "../../fonts/star-opening-font.ttf";
import CreateCharacterPhrases from "../createCharacterPhrases/CreateCharacterPhrases";
import { useModal } from "../../hooks/useModal";
import CreateCharacterModal from "../createCharacterModal/CreateCharacterModal";
import { Form, Option, Select } from "./styles";
import CharactersProjectContext from "../context/CharactersProjectContext";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 870px;
  height: 400px;
  margin-top: 5rem;

  form {
    display: flex;
    flex-direction: column;
    width: 300px;
    height: auto;
  }

  input {
    display: flex;
    height: 3.5rem;
    margin: 1rem 0;
    font-size: 2rem;
  }

  button {
    @font-face {
      font-family: "Star Jedi";
      src: url(${starFontTitle});
    }
    justify-content: center;
    height: 35px;
    width: auto;
    padding: 0 5px;
    font-size: 1.8rem;
    font-family: "Star Jedi";
    border: none;
    border-radius: 4px;

    &.getphrase {
      margin-bottom: 1rem;
    }

    &:hover {
      background-color: rgb(75, 213, 238);
      cursor: pointer;
    }
    &.create:hover {
      background-color: #28a745;
      cursor: pointer;
    }
  }

  .getphrase {
    @font-face {
      font-family: "Star Jedi";
      src: url(${starFontTitle});
    }
    justify-content: center;
    height: 35px;
    width: auto;
    margin-bottom: 1rem;
    padding: 0 5px;
    font-size: 1.8rem;
    font-family: "Star Jedi";
    border: none;
    border-radius: 4px;
    background-color: white;
    text-align: center;

    &:hover {
      background-color: rgb(75, 213, 238);
      cursor: pointer;
    }
  }

  label {
    @font-face {
      font-family: "Franklin Gothic Book";
      src: url(${starFontOpening});
    }
    margin: 2rem 0 0.3rem 0;
    text-align: center;
    font-size: 2.5rem;
    font-family: "Franklin Gothic Book";
    color: rgb(75, 213, 238);
    letter-spacing: 0.5rem;
    font-weight: 800;
  }

  select {
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
  }

  option {
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
  }
`;

const CreateCharacterForm = () => {
  const { createData, initialForm, form, setForm, visible, setVisible } =
    useContext(CharactersProjectContext);
  const [isOpenModalForm, openModal, closeModal] = useModal(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.urlImg || !form.phrase || !form.color) {
      alert("Completa todos los campos");
      return;
    }

    if (form.id === null) {
      createData(form);
    }

    openModal();

    setForm(initialForm);
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Fragment>
      <StyledDiv>
        <Form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            onChange={handleChange}
            value={form.name}
          />
          <input
            type="url"
            name="urlImg"
            placeholder="Url de la imagen"
            onChange={handleChange}
            value={form.urlImg}
          />
          {!visible && (
            <input
              type="text"
              name="phrase"
              placeholder="Frase favorita"
              onChange={handleChange}
              value={form.phrase}
            />
          )}
          <div className="getphrase" onClick={() => setVisible(true)}>
            o solicita una frase zen
          </div>
          {visible && <CreateCharacterPhrases setVisible={setVisible} />}
          <label htmlFor="color">DALE UN COLOR</label>
          <Select
            name="color"
            id="color"
            onChange={handleChange}
            value={form.color}
            colorProp={form.color}
          >
            <Option className="black" value="black">
              Negro
            </Option>
            <Option className="blue" value="blue">
              Azul
            </Option>
            <Option className="green" value="green">
              Verde
            </Option>
            <Option className="red" value="red">
              Rojo
            </Option>
            <Option className="pink" value="pink">
              Rosado
            </Option>
          </Select>
          <button
            type="submit"
            disabled={!form.name || !form.urlImg || !form.phrase || !form.color}
            onClick={openModal}
          >
            Crear personaje
          </button>
        </Form>
        <CreateCharacterModal
          isOpen={isOpenModalForm}
          closeModal={closeModal}
        ></CreateCharacterModal>
      </StyledDiv>
    </Fragment>
  );
};

export default CreateCharacterForm;
