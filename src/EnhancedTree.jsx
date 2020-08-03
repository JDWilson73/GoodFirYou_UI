import React from 'react';
import Tree from 'react-tree-graph';
import graphQLFetch from './graphQLFetch.js';
import { findFirst, findAndDeleteFirst } from 'obj-traverse/lib/obj-traverse';

import BranchMod from './BranchMod.jsx';

export default class EnhancedTree extends React.Component {
  static async fetchData(match, search, showError) {
    const params = new URLSearchParams(search);
    const vars = {};
    vars.owner = params.get('owner');
    vars.title = params.get('title');
    const query = `query aBranch(
      $owner: String!
      $title: String
    ) {
      aBranch(
        owner: $owner
        title: $title
      ) {
        id title owner status created details tree
      }
    }
  )`;

  const dataFromDB = await graphQLFetch(query, vars, showError);
  return dataFromDB;
  }

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
    const { data } = this.props;

    findAndDeleteFirst(data, 'children', { name: node });

    this.setState({ data });
  }

  render() {
    const {
      height, width, svgProps, addMode, buttonText, selectedNode,
    } = this.state;
    const { data } = this.props;

    return (
      <div className="custom-container">
        <Tree
          data={data}
          height={height}
          width={width}
          svgProps={svgProps}
          gProps={{
            className: 'node',
            onClick: this.setBranchInfo,
          }}
        />
        <BranchMod
          currentNode={selectedNode}
          addBranch={this.addBranch}
          removeBranch={this.removeBranch}
        />
      </div>
    );
  }
}
