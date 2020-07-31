/* eslint-disable no-console */
import React from 'react';
import {
  Form, FormControl, FormGroup, ControlLabel, Button, Modal,
  OverlayTrigger, Glyphicon, Tooltip, Panel,
} from 'react-bootstrap';


export default class BranchMod extends React.Component {
  constructor(props) {
    super(props);

    // this.state.currentNode = 'no node yet';

    /*
    this.state = {
      showing: this.props.showing,
    };
    */

    // set this to default to root of tree?

    // this.showModal = this.showModal.bind(this);
    // this.hideModal = this.hideModal.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    //this.setTreeNode = this.setTreeNode.bind(this);
  }
  /*
  setTreeNode(node) {
    this.props.currentNode = node;
  }
  */

  // showModal() {
  //  this.setState({ showing: true });
  // }

  // hideModal() {
  //  this.setState({ showing: false });
  // }


  render() {
    // const { showing } = this.state;

    const AddTooltip = (
      <Tooltip id="close-tooltip" placement="top">Add Branch</Tooltip>
    );
    const deleteTooltip = (
      <Tooltip id="delete-tooltip" placement="top">Delete Branch</Tooltip>
    );
    const { currentNode, addBranch, removeBranch } = this.props;
    // just to make arguments of addbranch work. 
    const e = null;

    return (
      // <Panel show={showing} onHide={this.hideModal}>
      <Panel>
        <Panel.Heading closeButton>
          <Modal.Title>Edit Node</Modal.Title>
        </Panel.Heading>
        <Panel.Body>
          <Form inline name="Edit" onSubmit={this.handleSubmit}>
            <FormGroup>
              <ControlLabel>
                Current Name:
                {' '}
                {currentNode}
                :
              </ControlLabel>
              {' '}
              <FormControl type="text" name="owner" />
            </FormGroup>

            <Button bsStyle="primary" type="submit">Edit</Button>
          </Form>
          <OverlayTrigger delayShow={1000} overlay={AddTooltip}>
            <Button bsSize="small" onClick={() => { addBranch(e, currentNode); }}>
              <Glyphicon glyph="plus" />
            </Button>
          </OverlayTrigger>
          {' '}
          <OverlayTrigger delayShow={1000} overlay={deleteTooltip}>
            <Button bsSize="small" onClick={() => { removeBranch(e, currentNode); }}>
              <Glyphicon glyph="trash" />
            </Button>
          </OverlayTrigger>
        </Panel.Body>
        <Panel.Footer>
          <Button variant="secondary" onClick={() => { console.log('adding!'); }}>
            Close
          </Button>
          <Button variant="primary" onClick={() => { console.log('adding!'); }}>
            Submit Changes
          </Button>
        </Panel.Footer>


      </Panel>

    );
  }
}
