import { Fragment, useContext } from "react";
import HomeModal from "../homeModal/HomeModal";
import { useModal } from "../../hooks/useModal";
import { Ul, Img, DivLi, Li, DivButton, Button } from "./styles";
import CharactersProjectContext from "../context/CharactersProjectContext";

const HomeList = ({ el }) => {
  const { deleteData, updateData } = useContext(CharactersProjectContext);
  const [isOpenModalHome, openModal, closeModal] = useModal(false);
  let { name, urlImg, phrase /* color */, id } = el;
  return (
    <Fragment>
      <Ul>
        <Img colorProp={el.color} src={urlImg} alt="image-character" />
        <DivLi className="div-li-name">
          <Li className="li-name" colorProp={el.color}>
            {name}
          </Li>
        </DivLi>
        <DivLi>
          <Li className="li-phrase" colorProp={el.color}>
            {`"${phrase}"`}
          </Li>
        </DivLi>
        <DivButton>
          <Button className="btn-edit" onClick={openModal}>
            Editar
          </Button>
          <Button className="btn-delete" onClick={() => deleteData(id, name)}>
            Borrar
          </Button>
        </DivButton>
      </Ul>
      <HomeModal
        character={el}
        updateData={updateData}
        isOpen={isOpenModalHome}
        closeModal={closeModal}
      ></HomeModal>
    </Fragment>
  );
};

export default HomeList;
