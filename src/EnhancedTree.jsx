import React from 'react';
import Tree from 'react-tree-graph';


export default class EnhancedTree extends React.Component {
  constructor() {
    super();
  }

  logTest(e, node) {
    e.preventDefault();
    alert(`Spooooop ${node}`);
  }
  render() {
    const { data, height, width, svgProps } = this.props;
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
            onClick: this.logTest
          }}
        />
      </div>
  )
  }
}
