import React from 'react';
import PropTypes from 'prop-types';
import { Tab } from 'semantic-ui-react';
import TreeView from './tree-view';
import GraphView from './graph-view';
import './tree.scss';

const CustomTree = ({ tree }) => {
  const panes = [
    {
      menuItem: 'Tree view',
      render: () => (
        <Tab.Pane>
          <TreeView tree={tree} />
        </Tab.Pane>
      ),
    },
    {
      menuItem: 'Graph view',
      render: () => (
        <Tab.Pane>
          <GraphView tree={tree} />
        </Tab.Pane>
      ),
    },
  ];
  return <Tab panes={panes} />;
};

CustomTree.propTypes = {
  tree: PropTypes.object.isRequired,
};

export default CustomTree;
