import './CreateCharacterModal.css';
import {P, DivP, DivButtons} from './styles';
import {useHistory} from 'react-router-dom';
/* import {helpHttp} from '../../helpers/helpHttp'; */

const CreateCharacterModal = ({isOpen, closeModal}) => {
  const handleModalContainerClickForm = (e) => e.stopPropagation();
  const history = useHistory();

  const handleHomeClick = (e) => {
    history.push('/');
  };

  const handleReturnClick = (e) => {
    closeModal();
    return;
  };

  return (
    <article
      className={`modal-form ${isOpen && 'is-open'}`}
      onClick={closeModal}
    >
      <div
        className="modal-form-container"
        onClick={handleModalContainerClickForm}
      >
        <DivP>
          <P>
            El personaje se creo <br />
            exitosamente!
          </P>
        </DivP>
        <DivButtons>
          <button onClick={handleReturnClick}>Crear otro personaje</button>
          <button onClick={handleHomeClick}>ir a la Home</button>
        </DivButtons>
      </div>
    </article>
  );
};

export default CreateCharacterModal;
