import React, { Component } from 'react';
import { ModalStyled, Backdrop } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    console.log('didMount');
  }
  componentDidUpdate() {
    console.log('DidUpdate');
  }

  render() {
    return (
      <Backdrop>
        <ModalStyled>{this.props.children}</ModalStyled>
      </Backdrop>
    );
  }
}
