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
        images: galleryImages.hits,
        isLoading: false,
      });
    } catch (error) {}
  };

  loadMore = async () => {
    try {
      this.setState({ isLoading: true });
      const galleryImages = await Api.galleryCardsApi(
        this.state.query,
        this.state.page + 1
      );
      this.setState(state => ({
        page: state.page + 1,
        images: [...state.images, ...galleryImages.hits],
        isLoading: false,
      }));
    } catch (error) {}
  };

  render() {
    const { isLoading, images, query } = this.state;
    return (
      <>
        <Loader isLoading={isLoading} />
        <SearchBar
          onSubmit={this.searchImages}
          isSubmitting={isLoading}
          searchQuery={query}
        />
        {images.length > 0 && <ImageGalleryBox items={images} />}
        {query !== '' && <ButtonLoadMore onClick={this.loadMore} />}
      </>
    );
  }
}
