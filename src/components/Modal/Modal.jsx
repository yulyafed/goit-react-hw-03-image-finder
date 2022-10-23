// import PropTypes from 'prop-types';

export const Modal = ({ item, onClose }) => {
  return (
    <div class="overlay" onClick={ onClose }>
      <div class="modal">
        <img src={item.largeImageURL} alt="" />
      </div>
    </div>
  );
};
