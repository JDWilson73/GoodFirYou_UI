import React from 'react';
import Tree from 'react-tree-graph';
import { findFirst, findAndDeleteFirst } from 'obj-traverse/lib/obj-traverse';

import BranchMod from './BranchMod.jsx';

export default class EnhancedTree extends React.Component {
  constructor(props) {
    super(props);
    const {
      data, height, width, svgProps,
    } = this.props;
    this.state = {
      data, height, width, svgProps, addMode: true, buttonText: 'Remove', selectedNode: 'unset',
    };

    this.addBranch = this.addBranch.bind(this);
    this.removeBranch = this.removeBranch.bind(this);
    this.changeMode = this.changeMode.bind(this);
    this.setBranchInfo = this.setBranchInfo.bind(this);
  }

  setBranchInfo(e, node) {
    // const { data } = this.state;
    e.preventDefault();
    this.setState({
      selectedNode: node,
    });
    // BranchMod.showModal();
  }

  addBranch(e, node) {
    const { data } = this.state;

    // e.preventDefault();

    const newBranch = prompt('Enter new branch:', 'Massaging a Jigglypuff');
    if (newBranch != null && newBranch !== '') {
      const obj = findFirst(data, 'children', { name: node });
      if (!obj.children) {
        obj.children = [{
          name: `${newBranch}`,
          textProps: { transform: 'rotate(90)' },
        }];
      } else {
        obj.children.push({
          name: `${newBranch}`,
          textProps: { transform: 'rotate(90)' },
        });
      }
      this.setState({ data });
    }
  }

  removeBranch(e, node) {
    const { data } = this.state;

    findAndDeleteFirst(data, 'children', { name: node });

    this.setState({ data });
  }

  changeMode() {
    const { addMode } = this.state;
    if (addMode) {
      this.setState({ addMode: false, buttonText: 'Add' });
    } else {
      this.setState({ addMode: true, buttonText: 'Remove' });
    }
  }

  render() {
    const {
      data, height, width, svgProps, addMode, buttonText, selectedNode,
    } = this.state;

    return (
      <div className="custom-container">
        <h1>Placeholder for the LandingPage</h1>
        <Tree
          data={data}
          height={height}
          width={width}
          svgProps={svgProps}
          gProps={{
            className: 'node',
            onClick: this.setBranchInfo,
            // addMode ? this.addBranch : this.removeBranch,
          }}
        />

        <button type="button" onClick={this.changeMode}>
          Change to
          {' '}
          {buttonText}
          {' '}
          mode
        </button>
        <BranchMod
          currentNode={selectedNode}
          addBranch={this.addBranch}
          removeBranch={this.removeBranch}
        />
      </div>
    );
  }
}
