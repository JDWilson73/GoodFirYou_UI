import React from 'react';
import {
  Form, FormControl, FormGroup, ControlLabel, Button,
} from 'react-bootstrap';


export default class BranchMod extends React.Component {
  render() {
    return (
      <Form inline name="Edit" onSubmit={this.handleSubmit}>
        <FormGroup>
          <ControlLabel>Rename Node:</ControlLabel>
          {' '}
          <FormControl type="text" name="owner" />
        </FormGroup>

        <Button bsStyle="primary" type="submit">Add</Button>
      </Form>
    );
  }
}
