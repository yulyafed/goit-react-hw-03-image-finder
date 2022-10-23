import { ImageGallery } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGalleryBox = ({ items }) => {
  return (
    <>
      <ul class="gallery">
        {items.map(item => (
          <ImageGallery item={item} key={item.id} />
        ))}
      </ul>
    </>
  );
};
