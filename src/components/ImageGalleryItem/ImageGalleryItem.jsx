import { Modal } from 'components/Modal/Modal';

export const ImageGallery = ({ item }) => {
  return (
    <li class="gallery-item" key={item.id}>
      <img src={item.webformatURL} alt="" />
      <Modal />
    </li>
  );
};
