import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { ModalStyled, Backdrop } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    console.log('didMount');
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentDidUpdate() {
    console.log('DidUpdate');
  }

  componentWillUnmount() {
    console.log('umount');
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      console.log('закрили модалку');
      this.props.close();
    }
  };

  handleBackdrop = e => {
    if (e.currentTarget === e.target) {
      this.props.close();
    }
  };

  render() {
    return createPortal(
      <Backdrop onClick={this.handleBackdrop}>
        <ModalStyled>{this.props.children}</ModalStyled>
      </Backdrop>,
      modalRoot
    );
  }
}
