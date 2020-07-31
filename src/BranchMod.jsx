/* eslint-disable no-console */
import React from 'react';
import {
  Form, FormControl, FormGroup, ControlLabel, Button, Modal,
  OverlayTrigger, Glyphicon, Tooltip,
} from 'react-bootstrap';


export default class BranchMod extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showing: this.props.showing, 
    };

    // set this to default to root of tree?

    //this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.setTreeNode = this.setTreeNode.bind(this);
  }

  /*
  setTreeNode(node) {
    this.props.currentNode = node;
  }
  */

  //showModal() {
  //  this.setState({ showing: true });
  // }

  hideModal() {
    this.setState({ showing: false });
  }


  render() {
    const { showing } = this.state;
    console.log( this.props.curNode );

    const closeTooltip = (
      <Tooltip id="close-tooltip" placement="top">Close Issue</Tooltip>
    );
    const deleteTooltip = (
      <Tooltip id="delete-tooltip" placement="top">Delete Issue</Tooltip>
    );

    return (
      <Modal show={showing} onHide={this.hideModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Node</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form inline name="Edit" onSubmit={this.handleSubmit}>
            <FormGroup>
              <ControlLabel>
                Current Name:
                {' '}
                {this.state.currentNode}
                :
              </ControlLabel>
              {' '}
              <FormControl type="text" name="owner" />
            </FormGroup>

            <Button bsStyle="primary" type="submit">Add</Button>
          </Form>
          <OverlayTrigger delayShow={1000} overlay={closeTooltip}>
            <Button bsSize="small" onClick={console.log('adding!')}>
              <Glyphicon glyph="plus" />
            </Button>
          </OverlayTrigger>
          {' '}
          <OverlayTrigger delayShow={1000} overlay={deleteTooltip}>
            <Button bsSize="small" onClick={console.log('removing!')}>
              <Glyphicon glyph="trash" />
            </Button>
          </OverlayTrigger>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={console.log('adding!')}>
            Close
          </Button>
          <Button variant="primary" onClick={console.log('removing!')}>
            Save Changes
          </Button>
        </Modal.Footer>


      </Modal>

    );
  }
}
