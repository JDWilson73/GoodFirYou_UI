import React from 'react';
import Tree from 'react-tree-graph';

let data = {
  name: 'TreeTrunk',
  textProps: {transform: 'rotate(90)'},
  children: [{
    name: 'EXAMPLE 1',
    textProps: {transform: 'rotate(90)'},
  },
  {
    name: 'EXAMPLE 2',
    textProps: {transform: 'rotate(90)'},
  }]
};

export default function ProfilePage() {
  return (
    <div className="custom-container">
      <h1>Placeholder for the ProfilePage</h1>
      <Tree
        data={data}
        height={600}
        width={600}
        svgProps={{
          className: 'custom',
          transform: 'rotate(270)'
        }}
      />
    </div>
  )
}
