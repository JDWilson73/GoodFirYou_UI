import React from 'react';
import Tree from 'react-tree-graph';
import EnhancedTree from './EnhancedTree.jsx';
import { Combobox } from 'react-widgets';

let userInfo = {
  name: 'Namey McNamerson',
  numTrees: 4,
  curExp: 50,
}

let tree_ids = ['exercise', 'language', 'academics', 'coding'];

let experiment = {'exercise': {
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
  }};

let experimentToJSONString = JSON.stringify(experiment);
let experimentParsed = JSON.parse(experimentToJSONString);

let trees = {
  'exercise': {
      name: 'TreeTrunk',
      textProps: {transform: 'rotate(90)'},
      completed: true,
      expValue: 10,
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
            <div className="flexbox">
              <h1>Personal Growth</h1>
              <div className = "flexbox2">
                <div className = "userinfo">
                  <p>
                  Username: {name}
                  </p>
                  <p>
                  Level: {level}
                  </p>
                  <p>
                  Number of trees: {numTrees}
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
              </div>
          </div>
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

      )
    }
}
