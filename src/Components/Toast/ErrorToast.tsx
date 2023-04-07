import React from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import './Toast.css';
function ErrorToast(props:any) {

  return (
      <ToastContainer position="bottom-center" className="p-3">
        <Toast
        onClose={props.closeToast} show={props.showErrorToast} delay={3000} autohide
        bg='danger'>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Error</strong>
            <small className="text-muted">just now</small>
          </Toast.Header>
          <Toast.Body className={'text-white'}>{props.message}</Toast.Body>
        </Toast>
      </ToastContainer>
  );
}

export default ErrorToast;