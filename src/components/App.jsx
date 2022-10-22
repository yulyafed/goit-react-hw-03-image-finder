import { Component } from 'react';
import { SearchBar } from './Searchbar/Searchbar';
import { ImageGalleryBox } from './ImageGallery/ImageGallery';
import { ButtonLoadMore } from './Button/Button';
import { Loader } from './Loader/Loader';
import * as Api from 'services/Api';

export class App extends Component {
  state = {
    page: 1,
    query: '',
    images: null,
  };

  searchImages = async (searchQuery) => {
    const galleryImages = await Api.galleryCardsApi(searchQuery);
    this.setState({
      page: 1,
      query: searchQuery,
      images: galleryImages,
    });
  }

  async loadMore() {}

  render() {
    return (
      <>
        <SearchBar onSubmit={this.searchImages} />
        <Loader />
        <ImageGalleryBox />
        <ButtonLoadMore />
      </>
    );
  }
}
