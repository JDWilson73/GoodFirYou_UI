/* eslint-disable no-console */
import React from 'react';
import {
  Form, FormControl, FormGroup, ControlLabel, Button, Modal,
  OverlayTrigger, Glyphicon, Tooltip, Panel,
} from 'react-bootstrap';


export default class BranchMod extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUserID: '001',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // eslint-disable-next-line class-methods-use-this
  handleSubmit(event) {

    const { currentUserID } = this.state;
    // this.setState({ currentUserID });
    console.log(`User ID: ${currentUserID}`);
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({ currentUserID: event.target.value });
  }

  render() {
    // const { showing } = this.state;

    const AddTooltip = (
      <Tooltip id="close-tooltip" placement="top">Add Branch</Tooltip>
    );
    const deleteTooltip = (
      <Tooltip id="delete-tooltip" placement="top">Delete Branch</Tooltip>
    );
    const {
      currentNode, addBranch, removeBranch,
    } = this.props;
    // To make arguments of addbranch work.
    const e = null;

    return (
      // <Panel show={showing} onHide={this.hideModal}>
      <Panel>
        <Panel.Heading closeButton>
          <Modal.Title>Edit Branch</Modal.Title>
        </Panel.Heading>
        <Panel.Body>
          <ControlLabel>
            Selected Branch:
            {' '}
            {currentNode}
            :
          </ControlLabel>

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
          {' '}
          <Form inline name="Edit" onSubmit={this.handleSubmit}>
            <FormGroup>

              {' '}
              <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </FormGroup>

            <Button bsStyle="primary" type="submit">Set User ID</Button>
          </Form>

          {/* <OverlayTrigger delayShow={1000} overlay={AddTooltip}>
            <Button bsSize="small" onClick={() => { markCompleted(e, currentNode); }}>
              <Glyphicon glyph="ok" />
            </Button>
    </OverlayTrigger> */}
        </Panel.Body>
        <Panel.Footer>
          {/* <Button variant="secondary" onClick={() => { console.log('doing a thing!'); }}>
            Close
          </Button>
          <Button variant="primary" onClick={() => { console.log('doing a different thing!'); }}>
            Submit Changes
    </Button> */}
        </Panel.Footer>
      </Panel>

    );
  }
}
