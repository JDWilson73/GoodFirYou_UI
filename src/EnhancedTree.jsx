import React from 'react';
import Tree from 'react-tree-graph';
import { findFirst, findAndDeleteFirst } from 'obj-traverse/lib/obj-traverse';

import BranchMod from './BranchMod.jsx';
import LevelModule from './LevelModule.jsx';

export default class EnhancedTree extends React.Component {
  constructor(props) {
    super(props);
    const {
      data, height, width, svgProps,
    } = this.props;
    this.state = {
      data, height, width, svgProps, addMode: true, selectedNode: 'unset',
    };

    this.addBranch = this.addBranch.bind(this);
    this.removeBranch = this.removeBranch.bind(this);
    this.setBranchInfo = this.setBranchInfo.bind(this);
    this.markCompleted = this.markCompleted.bind(this);
  }

  setBranchInfo(e, node) {
    e.preventDefault();
    this.setState({
      selectedNode: node,
    });
  }

  addBranch(e, node) {
    const { data } = this.props;

    const newBranch = prompt('Enter new branch:', 'Massaging a Jigglypuff');
    if (newBranch != null && newBranch !== '') {
      const obj = findFirst(data, 'children', { name: node });
      const randExp = Math.floor(Math.random() * 50) + 1;
      if (!obj.children) {
        obj.children = [{
          name: `${newBranch}`,
          completed: false,
          expValue: randExp,
          textProps: { transform: 'rotate(90)' },
        }];
      } else {
        obj.children.push({
          name: `${newBranch}`,
          completed: false,
          expValue: randExp,
          textProps: { transform: 'rotate(90)' },
        });
      }
      this.setState({ data });
    }
  }

  removeBranch(e, node) {
    const { data } = this.props;

    findAndDeleteFirst(data, 'children', { name: node });

    this.setState({ data });
  }

  markCompleted(e, node) {
    const { data } = this.props;
    findFirst(data, 'children', { name: node })['completed'] = true;

    this.setState({ data });
  }

  render() {
    const {
      height, width, svgProps, addMode, buttonText, selectedNode,
    } = this.state;
    const { data } = this.props;

    return (
      <div className="custom-container">
        <div className="flexbox">

          <Tree
            animated={true}
            data={data}
            height={height}
            width={width}
            svgProps={svgProps}
            gProps={{
              className: 'node',
              onClick: this.setBranchInfo,
            }}
          />
          <div className = "level">
            <LevelModule
              data={data}
              selectedNode={selectedNode}
            />
          </div>
        </div>
        <BranchMod
          currentNode={selectedNode}
          addBranch={this.addBranch}
          removeBranch={this.removeBranch}
          markCompleted={this.markCompleted}
        />

      </div>
    );
  }
}
