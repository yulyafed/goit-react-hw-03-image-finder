import { Overlay, ModalForm, Image} from './Modal.styled'

export const Modal = ({ item, onClose }) => {
  return (
    <Overlay onClick={onClose}>
      <ModalForm>
        <Image src={item.largeImageURL} alt="" />
      </ModalForm>
    </Overlay>
  );
};
