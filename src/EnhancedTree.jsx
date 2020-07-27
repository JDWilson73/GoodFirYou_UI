import React from 'react';
import Tree from 'react-tree-graph';
import { findFirst } from 'obj-traverse/lib/obj-traverse';

export default class EnhancedTree extends React.Component {
  constructor() {
    super();
  }

/*
  logTest(e, node) {
    e.preventDefault();
    alert(`Spooooop ${node}`);
  }*/

  render() {
    const { data, height, width, svgProps } = this.props;

    const logTest = (e, node) => {
      e.preventDefault();
      alert(`Spooooop ${node}`);

      let obj = findFirst(data, 'children', { name: node });
      obj.children.push({
        name: 'Test',
        textProps: {transform: 'rotate(90)'},
      });
      console.log(obj);
      console.log(data);
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
            onClick: logTest//this.logTest
          }}
        />
      </div>
  )
  }
}
