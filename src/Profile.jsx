import React from 'react';
import Tree from 'react-tree-graph';
import EnhancedTree from './EnhancedTree.jsx';
import { DropdownList } from 'react-widgets';
//import '../public/bootstrap/css/pages.css';

let userInfo = {
  name: 'Namey McNamerson',
  level: 5,
  numTrees: 1,
  curExp: 50,
}

let tree_ids = ['exercise', 'language', 'coding', 'academics'];

let data1 = {
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

let data2 = {
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
};

export default class ProfilePage extends React.Component {

  constructor() {
    super();
    this.state = {
      tree: 1,
      data: data1
    }

    this.switchTree = this.switchTree.bind(this);
  }

  switchTree() {
    const { tree, data } = this.state;
    console.log("here");
    if (tree === 1) {
      console.log("or here");
      this.setState({ tree: 2, data: data2 });
    }
    else {
      this.setState({ tree: 1, data: data1 });
    }
  }

  render() {
    console.log("rendering");
    console.log(this.state.data);
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

        </div>
      )
    }
}
