import { Component } from 'react';
import { SearchBar } from './Searchbar/Searchbar';
import { ImageGalleryBox } from './ImageGallery/ImageGallery';
import { ButtonLoadMore } from './Button/Button';
import { Loader } from './Loader/Loader';
import * as Api from 'services/Api';

 
export class App extends Component {
  state = {
    images: [],
  };

  galleryCardsApi(name, page = 1) { };

  render() {

    return (
      <>
        <SearchBar onSubmit={ this.galleryCardsApi}/>
        <Loader />
        <ImageGalleryBox />
        <ButtonLoadMore />
      </>
    );
  }
}
