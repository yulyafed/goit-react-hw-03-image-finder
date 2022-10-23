import { Modal } from 'components/Modal/Modal';

export const ImageGallery = ({ item }) => {
  return (
    <li class="gallery-item">
      <img src={item.webformatURL} alt="" />
      <Modal />
    </li>
  );
};
