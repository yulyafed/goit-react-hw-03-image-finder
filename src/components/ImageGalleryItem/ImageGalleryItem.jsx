import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => this.setState({ isModalOpen: true });
  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    const { item } = this.props;
    const { isModalOpen } = this.state;
    return (
      <>
        <li class="gallery-item">
          <img src={item.webformatURL} alt="" onClick={this.openModal} />
          {isModalOpen && <Modal item={item} onClose={ this.closeModal}/>}
        </li>
      </>
    );
  }
};


