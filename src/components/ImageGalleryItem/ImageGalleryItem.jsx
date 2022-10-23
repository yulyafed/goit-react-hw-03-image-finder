import { Modal } from 'components/Modal/Modal';

export const ImageGalleryItem = ({ item }) => {
  return (
    <li class="gallery-item">
      <img src={item.webformatURL} alt="" />
      <Modal />
    </li>
  );
};


