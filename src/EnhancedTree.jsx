import React from 'react';
import Tree from 'react-tree-graph';
import { findFirst } from 'obj-traverse/lib/obj-traverse';

export default class EnhancedTree extends React.Component {

  constructor(props) {
    super(props);
    const { data, height, width, svgProps } = this.props;
    this.state = { data, height, width, svgProps };
  }

  render() {
    const { data, height, width, svgProps } = this.state;
    const branchAdd = (e, node) => {
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
        this.setState({data: data});
      }
    }

    return(
      <div className="custom-container">
        <h1>Placeholder for the LandingPage</h1>
        <Tree
          data={data}
          height={height}
          width={width}
          svgProps={svgProps}
          gProps={{
            className: 'node',
            onClick: branchAdd
          }}
        />
      </div>
  )
  }
}
