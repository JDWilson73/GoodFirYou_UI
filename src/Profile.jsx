import React from 'react';
import Tree from 'react-tree-graph';
import EnhancedTree from './EnhancedTree.jsx';
import { Combobox } from 'react-widgets';

let userInfo = {
  name: 'Namey McNamerson',
  level: 5,
  numTrees: 4,
  curExp: 50,
}

let tree_ids = ['exercise', 'language', 'academics', 'coding'];

let trees = {
  'exercise': {
    name: 'TreeTrunk',
    completed: true,
    expValue: 10,
    textProps: {transform: 'rotate(90)'},
    children: [{
      name: 'EXAMPLE 1',
      completed: false,
      expValue: 10,
      textProps: {transform: 'rotate(90)'},
    },
    {
      name: 'EXAMPLE 2',
      completed: true,
      expValue: 10,
      textProps: {transform: 'rotate(90)'},
    }]
  },

  'language': {
    name: 'SpoopTrunk',
    textProps: {transform: 'rotate(90)'},
    children: [{
      name: 'SPOOP 1',
      textProps: {transform: 'rotate(90)'},
    },
    {
      name: 'SPOOP 2',
      textProps: {transform: 'rotate(90)'},
    }]
  },

 'academics': {
   name: 'ATrunk',
   textProps: {transform: 'rotate(90)'},
   children: [{
     name: 'asdf 1',
     textProps: {transform: 'rotate(90)'},
   },
   {
     name: 'asdf 2',
     textProps: {transform: 'rotate(90)'},
   }]
 },

 'coding': {
   name: 'CodeTrunk',
   textProps: {transform: 'rotate(90)'},
   children: [{
     name: 'cccc 1',
     textProps: {transform: 'rotate(90)'},
   },
   {
     name: 'cccc 2',
     textProps: {transform: 'rotate(90)'},
   }]
 }
}

export default class ProfilePage extends React.Component {

  constructor() {
    super();
    this.state = {
      tree: 'exercise',
      data: trees['exercise']
    }

    this.switchTree = this.switchTree.bind(this);
  }

  switchTree() {
    const { tree } = this.state;
    this.setState({data: trees[tree]});
  }

  render() {
      const { name, level, numTrees, curExp } = userInfo;

      return (
        <div className="custom-container">
          <div className="usertreeview">
            <h1>Personal Growth</h1>
            <EnhancedTree
              data={this.state.data}
              height={600}
              width={600}
              svgProps={{
                className: 'custom',
                transform: 'rotate(270)'
              }}
            />
          </div>
          <div>
            <p>
            Username: {name}
            </p>
            <p>
            Level: {level}
            </p>
            <p>
            Number of trees: {numTrees}
            </p>
            <p>
            Current Exp: {curExp} / 100
            </p>
          </div>
          <button type="button" onClick={this.switchTree}>
            Switch Tree
          </button>
          <Combobox
            data = {tree_ids}
            onChange={value => {
              this.setState({tree: value});
            }}
            />
        </div>
      )
    }
}
