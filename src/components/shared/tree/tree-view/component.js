import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SortableTree from 'react-sortable-tree';
import 'react-sortable-tree/style.css';
import './dnd.scss';

class TreeView extends Component {
  constructor(props) {
    super(props);
    this.state = { tree: [props.tree] };
  }

  render() {
    const { tree } = this.state;
    return (
      <div className="graph">
        <SortableTree
          treeData={tree}
          onChange={newTree => this.setState({ tree: newTree })}
          canDrag={false}
          canDrop={() => false}
          generateNodeProps={rowInfo => ({
            buttons: [<div>{rowInfo.node.name}</div>],
          })}
        />
      </div>
    );
  }
}

TreeView.propTypes = {
  tree: PropTypes.object.isRequired,
};

export default TreeView;
