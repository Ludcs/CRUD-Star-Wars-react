import React, {useContext, useState} from 'react';
import CharactersProjectContext from '../context/CharactersProjectContext';
import './HomeModal.css';
import {Div, Form, Input, Select, Option, DivButton, Button} from './styles';

const HomeModal = ({isOpen, closeModal, character}) => {
  const {updateData} = useContext(CharactersProjectContext);
  const [formState, setFormState] = useState({
    name: character.name,
    urlImg: character.urlImg,
    phrase: character.phrase,
    color: character.color,
    id: character.id,
  });

  const handleModalContainerClick = (e) => e.stopPropagation();

  const handleFormModalChange = (e, type) => {
    if (type === 'nombre') {
      setFormState((prevState) => {
        return {...prevState, name: e.target.value};
      });
    }
    if (type === 'urlimg') {
      setFormState((prevState) => {
        return {...prevState, urlImg: e.target.value};
      });
    }
    if (type === 'phrase') {
      setFormState((prevState) => {
        return {...prevState, phrase: e.target.value};
      });
    }

    if (type === 'color') {
      setFormState((prevState) => {
        return {...prevState, color: e.target.value};
      });
    }
  };

  const saveClicked = (e) => {
    e.preventDefault();
    updateData(formState);
    closeModal();
  };

  const cancelClicked = (e) => {
    e.preventDefault();
    handleReset();
    closeModal();
  };

  const handleReset = () => {
    setFormState(character);
  };

  return (
    <article className={`modal ${isOpen && 'is-open'}`} onClick={closeModal}>
      <div className="modal-container" onClick={handleModalContainerClick}>
        <Div>
          <Form>
            <Input
              type="text"
              placeholder="Nombre"
              value={formState.name}
              onChange={(e) => handleFormModalChange(e, 'nombre')}
              colorProp={formState.color}
            />
            <Input
              type="text"
              placeholder="Url"
              value={formState.urlImg}
              onChange={(e) => handleFormModalChange(e, 'urlimg')}
              colorProp={formState.color}
            />
            <Input
              type="text"
              placeholder="Frase"
              value={formState.phrase}
              onChange={(e) => handleFormModalChange(e, 'phrase')}
              colorProp={formState.color}
            />
            <Select
              onChange={(e) => handleFormModalChange(e, 'color')}
              name="color"
              id="color"
              colorProp={formState.color}
              defaultValue={formState.color}
            >
              <Option value="blue" className="blue">
                Azul
              </Option>
              <Option value="black" className="black">
                Negro
              </Option>
              <Option value="green" className="green">
                Verde
              </Option>
              <Option value="red" className="red">
                Rojo
              </Option>
              <Option value="pink" className="pink">
                Rosado
              </Option>
            </Select>
            <DivButton>
              <Button
                className="modal-save"
                disabled={
                  !formState.name ||
                  !formState.urlImg ||
                  !formState.phrase ||
                  !formState.color
                }
                onClick={saveClicked}
              >
                guardar
              </Button>
              <Button className="modal-close" onClick={cancelClicked}>
                cancelar
              </Button>
            </DivButton>
          </Form>
        </Div>
      </div>
    </article>
  );
};

export default HomeModal;
