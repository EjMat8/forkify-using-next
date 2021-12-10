import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

const ModalUI = ({ children, title, ...props }) => {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose} {...props}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody px={8}>{children}</ModalBody>
      </ModalContent>
    </Modal>
  );
};
export default ModalUI;
