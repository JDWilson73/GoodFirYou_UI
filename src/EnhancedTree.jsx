import React from 'react';
import Tree from 'react-tree-graph';
import graphQLFetch from './graphQLFetch.js';
import { findFirst, findAndDeleteFirst, findAndModifyFirst } from 'obj-traverse/lib/obj-traverse';

import BranchMod from './BranchMod.jsx';
import LevelModule from './LevelModule.jsx';

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
      data, height, width, svgProps, addMode: true, selectedNode: 'click to select',
    };

    this.addBranch = this.addBranch.bind(this);
    this.removeBranch = this.removeBranch.bind(this);
    this.setBranchInfo = this.setBranchInfo.bind(this);
    this.markCompleted = this.markCompleted.bind(this);
    this.zoom = this.zoom.bind(this);
    this.resetZoom = this.resetZoom.bind(this);
  }

  setBranchInfo(e, node) {
    e.preventDefault();
    this.setState({
      selectedNode: node,
    });
  }

  addBranch(e, node) {
    const { data } = this.state;

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
    const { data } = this.state;

    findAndDeleteFirst(data, 'children', { name: node });

    this.setState({ data });
  }

  markCompleted(e, node) {
    const { data } = this.state;
    findFirst(data, 'children', { name: node })['completed'] = true;

    this.setState({ data });
  }

  zoom(e, node) {
    const { data } = this.state;
    e.preventDefault();
    const obj = findFirst(data, 'children', { name: node });
    this.setState({ data: obj, tempRoot: node });
  }

  resetZoom() {
    const { tempRoot } = this.state;
    if (tempRoot) {
      findAndModifyFirst(this.props.data, 'children', { name: tempRoot }, this.state.data);
      this.setState({ data: this.props.data, tempRoot: undefined });
    }
  }

  render() {
    const {
      height, width, svgProps, addMode, buttonText, selectedNode,
    } = this.state;
    const { data } = this.state;

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
              onContextMenu: this.zoom,
            }}
          />
          <button type="button" onClick={this.resetZoom}>Reset Zoom</button>
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
