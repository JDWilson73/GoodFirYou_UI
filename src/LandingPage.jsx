import React from 'react';
import Tree from 'react-tree-graph';
// import 'react-tree-graph/dist/style.css';

let data = {
  name: 'TreeTrunk',
  textProps: {transform: 'rotate(90)'},
  children: [{
    name: 'Something I want to be better at!',
    textProps: {transform: 'rotate(90)'},
    children: [{
      name: 'Fighting crime',
      textProps: {transform: 'rotate(90)'},
    }, {
      name: 'Not killing my cacti',
      textProps: {transform: 'rotate(90)'},
    }]
  }, {
    name: 'Hobbies!',
    textProps: {transform: 'rotate(90)'},
    children: [{
      name: 'Violin',
      textProps: {transform: 'rotate(90)'},
    }, {
      name: 'Competitive sheep shearing',
      textProps: {transform: 'rotate(90)'},
    }, {
      name: 'Killing a man before he can scream',
      textProps: {transform: 'rotate(90)'},
    }]
  }, {
    name: 'Taking better care of myself',
    textProps: {transform: 'rotate(90)'},
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
        }}
      />
    </div>
  )
}
