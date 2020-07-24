import React from 'react';
import Tree from 'react-tree-graph';
// import 'react-tree-graph/dist/style.css';

let data = {
  name: 'TreeTrunk',
  children: [{
    name: 'Something I want to be better at!',
    children: [{
      name: 'Fighting crime'
    }, {
      name: 'Not killing my cacti'
    }]
  }, {
    name: 'Hobbies!',
    children: [{
      name: 'Violin'
    }, {
      name: 'Competitive sheep shearing'
    }, {
      name: 'Killing a man before he can scream'
    }]
  }, {
    name: 'Taking better care of myself'
  }]
};

export default function LandingPage() {
  return (
    <div className="custom-container">
      <h1>Placeholder for the LandingPage</h1>
      <Tree
        data={data}
        height={800}
        width={800}
        svgProps={{
          className: 'custom',
          transform: 'rotate(270)'
        }}/>
      />
    </div>
  )
}
