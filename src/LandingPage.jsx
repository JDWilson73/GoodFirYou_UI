import React from 'react';
import EnhancedTree from './EnhancedTree.jsx';
// import 'react-tree-graph/dist/style.css';

let dataTest = {
  name: 'TreeTrunk',
  textProps: {transform: 'rotate(90)'},
  children: [{
    name: 'Something I want to be better at!',
    textProps: {transform: 'rotate(90)'},
    children: [{
      name: "Fighting crime",//'Fighting crime',
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
let testJSON = JSON.stringify(dataTest);
let data = JSON.parse(testJSON);

export default function LandingPage() {
  return (
    <EnhancedTree
      data={data}
      height={800}
      width={800}
      svgProps={{
        className: 'custom',
        transform: 'rotate(270)'
      }}
    />
  )
}
