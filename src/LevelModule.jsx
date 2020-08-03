import React from 'react';
import { findFirst, findAll } from 'obj-traverse/lib/obj-traverse';

export default class LevelModule extends React.Component {

  constructor() {
    super();
    this.totalExp = this.totalExp.bind(this);
    this.expToNextLevel = this.expToNextLevel.bind(this);
    this.currentLevel = this.currentLevel.bind(this);
  }

  totalExp() {
    const { data } = this.props;

    let totalExp = 0;
    const completed = findAll(data, 'children', { 'completed': true });
    completed.forEach(item => {
      totalExp += item['expValue'];
    });

    return totalExp;
  }

  expToNextLevel() {
    return 100;
  }

  currentLevel(totalExp) {
    return Math.floor(totalExp / this.expToNextLevel()) + 1;
  }

  render() {
    const { data, selectedNode } = this.props;
    const totalExp = this.totalExp();

    const find = findFirst(data, 'children', { name: selectedNode });
    const nodeCompleted = find['completed'];
    const expValue = find['expValue'];

    return (
      <div>
        <p>
        Node completed: {nodeCompleted !== undefined ? nodeCompleted.toString() : ""}
        </p>
        <p>
        Node exp value: {expValue}
        </p>
        <p>
        Calculated total exp: {totalExp}
        </p>
        <p>
        Current level: {this.currentLevel(totalExp)}
        </p>
      </div>
    )
  }
}
