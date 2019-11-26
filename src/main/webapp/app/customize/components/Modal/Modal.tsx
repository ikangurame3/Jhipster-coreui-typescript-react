import React from "react";
import PropTypes from "prop-types";
import {
  Button,
  Modal as RsModal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";

const Modal: React.FC<any> = props => {
  return (
    <RsModal
      isOpen={props.isOpen}
      toggle={props.toggleHandler}
      className={"modal-danger " + props.className}
    >
      <ModalHeader toggle={props.toggleHandler}>{props.title}</ModalHeader>
      <ModalBody>{props.body}</ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={props.toggleHandler}>
          Aceptar
        </Button>{" "}
        <Button color="secondary" onClick={props.toggleHandler}>
          Cancelar
        </Button>
      </ModalFooter>
    </RsModal>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool,
  toggleHandler: PropTypes.func,
  title: PropTypes.string,
  body: PropTypes.string
};

export default Modal;
