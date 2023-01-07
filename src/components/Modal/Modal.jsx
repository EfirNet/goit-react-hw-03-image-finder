import { Component } from 'react';
import css from './Modal.module.css';
import PropTypes from 'prop-types';

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.onCloseByEscape);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onCloseByEscape);
  }

  onCloseByEscape = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  onBackDrop = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <div className={css.overlay} onClick={this.onBackDrop}>
        <div className={css.modal}>{this.props.children}</div>
      </div>
    );
  }
}

export default Modal;

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
