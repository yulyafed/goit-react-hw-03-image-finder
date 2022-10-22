import { ImageGallery } from "components/ImageGalleryItem/ImageGalleryItem";
import { Modal } from "components/Modal/Modal";

export const ImageGalleryBox = ({ items }) => { 
  return (
    <ul class="gallery">
      {items.map(item => (
        <ImageGallery item={ item } />
      ))}

      <Modal />
    </ul>
  );
}


