import React from 'react';
import Tree from 'react-tree-graph';
import { findFirst, findAndDeleteFirst } from 'obj-traverse/lib/obj-traverse';
import { Modal } from 'react-bootstrap';

export default class EnhancedTree extends React.Component {

  constructor(props) {
    super(props);
    const { data, height, width, svgProps } = this.props;
    console.log("lsjdfljsdflkjsdf");
    console.log(data);
    this.state = { data, height, width, svgProps, addMode: true, buttonText: "Remove" };

    this.addBranch = this.addBranch.bind(this);
    this.removeBranch = this.removeBranch.bind(this);
    this.changeMode = this.changeMode.bind(this);
  }

  addBranch(e, node) {
    const { data } = this.props;

    e.preventDefault();

    const newBranch = prompt("Enter new branch:", "Massaging a Jigglypuff");
    if (newBranch != null && newBranch != "") {
      let obj = findFirst(data, 'children', { name: node });
      if (!obj.children) {
        obj.children = [{
          name: `${newBranch}`,
          textProps: {transform: 'rotate(90)'},
        }];
      }
      else {
        obj.children.push({
          name: `${newBranch}`,
          textProps: {transform: 'rotate(90)'},
        });
      }
      this.setState({ data: data });
    }
  }

  removeBranch(e, node) {
    const { data } = this.props;

    findAndDeleteFirst(data, 'children', { name: node });

    this.setState({ data: data });
  }

  changeMode() {
    if (this.state.addMode) {
      this.setState({ addMode: false, buttonText: "Add" });
    }
    else {
      this.setState({ addMode: true, buttonText: "Remove" });
    }
  }

  render() {
    const { /*data, */height, width, svgProps, addMode, buttonText } = this.state;
    const { data } = this.props;
    console.log("rendering in enhanced");
    console.log(data);
    return (
      <div className="custom-container">
        <Tree
          data={data}
          height={height}
          width={width}
          svgProps={svgProps}
          gProps={{
            className: 'node',
            onClick: addMode ? this.addBranch : this.removeBranch
          }}
        />

        <button type = "button" onClick = {this.changeMode}>
         Change to {buttonText} mode
        </button>
      </div>
    );
  }
}
