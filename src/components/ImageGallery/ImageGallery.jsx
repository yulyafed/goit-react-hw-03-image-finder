import { ImageGallery } from "components/ImageGalleryItem/ImageGalleryItem";
import { Modal } from "components/Modal/Modal";

export const ImageGalleryBox = () => { 
  return <ul class="gallery">
    <ImageGallery />
    <Modal/>
  </ul>;
}


