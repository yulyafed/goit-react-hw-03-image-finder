import axios from 'axios';
import { Component } from 'react';

export class App extends Component {

  componentDidMount() { 
    async function galleryCardsApi(name, page = 1) {
      try {
        const KEY = '29840242-456192cfb7aa7dbb81a60ed73';
        const BASE_URL = 'https://pixabay.com/api/';
        const per_page = 12;

        const response = await axios.get(
          `${BASE_URL}?key=${KEY}&q=${name}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${per_page}`
        );
        return response.data;
      } catch (error) {
        console.error(error);
      }

    }
     
  }
  render() {
    
  return (
    <>
  </>);
  }
}
