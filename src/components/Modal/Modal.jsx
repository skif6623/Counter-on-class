import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { ModalStyled, Backdrop } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');
console.log(modalRoot);

export class Modal extends Component {
  componentDidMount() {
    console.log('didMount');
  }
  componentDidUpdate() {
    console.log('DidUpdate');
  }

  render() {
    return createPortal(
      <Backdrop>
        <ModalStyled>{this.props.children}</ModalStyled>
      </Backdrop>,
      modalRoot
    );
  }
}
