import PropTypes from 'prop-types';

export const ButtonLoadMore = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      Load more
    </button>
  );
};

ButtonLoadMore.propTypes = {
    onClick: PropTypes.func.isRequired,
};
