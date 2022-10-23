import PropTypes from 'prop-types';
import { Modal } from 'components/Modal/Modal';

export const ImageGallery = ({ item }) => {
  return (
    <li class="gallery-item">
      <img src={item.webformatURL} alt="" />
      <Modal />
    </li>
  );
};

ImageGallery.propTypes = {
  webformatURL: PropTypes.string.isRequired,
};
