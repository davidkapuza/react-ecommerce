import React, { Attributes, ReactElement } from "react";
import assertIsNode from "utils/assertIsNode";
import { ModalBackground } from "./Modal.styles";

interface ModalProps {
  children: ReactElement | ReactElement[];
  withBackground?: boolean;
}

export default class Modal extends React.PureComponent<
  ModalProps,
  { showModal: boolean }
> {
  node: HTMLDivElement | null = null;
  constructor(props: ModalProps) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  toggleModal = () => {
    if (!this.state.showModal) {
      document.addEventListener("click", this.handleOutsideClick, false);
    } else {
      document.removeEventListener("click", this.handleOutsideClick, false);
    }

    this.setState((prevState) => ({
      showModal: !prevState.showModal,
    }));
  };

  handleOutsideClick = ({ target }: MouseEvent): void => {
    assertIsNode(target);
    if (!this.node?.contains(target)) this.toggleModal();
  };

  render() {
    const childrenWithProps = React.Children.map(
      this.props.children,
      (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            toggleModal: this.toggleModal,
            showModal: this.state.showModal,
          } as Partial<unknown> & Attributes);
        }
        return child;
      }
    );
    return (
      <>
        <div
          ref={(node) => {
            this.node = node;
          }}
        >
          {childrenWithProps}
        </div>
        {this.props.withBackground && (
          <ModalBackground showModal={this.state.showModal} />
        )}
      </>
    );
  }
}
