import axios from 'axios';
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
    images: [],
    isLoading: false,
  };

  searchImages = async searchQuery => {
    try {
      this.setState({ isLoading: true });
      const galleryImages = await Api.galleryCardsApi(searchQuery);
      this.setState({
        page: 1,
        query: searchQuery,
        images: galleryImages,
        isLoading: false,
      });
    } catch (error) {}
  };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { isLoading, images } = this.state;
    return (
      <>
        {isLoading && <Loader />}
        <SearchBar onSubmit={this.searchImages} isSubmitting={isLoading} />
        <ImageGalleryBox items={images} />
        <ButtonLoadMore onClick={this.loadMore} />
      </>
    );
  }
}
