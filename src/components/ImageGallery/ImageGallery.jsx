import PropTypes from 'prop-types';
import { ImageGalleryItem} from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGalleryBox = ({ items }) => {
  return (
    <>
      <ul class="gallery">
        {items.map(item => (
          <ImageGalleryItem item={item} key={item.id} />
        ))}
      </ul>
    </>
  );
};

ImageGalleryBox.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
