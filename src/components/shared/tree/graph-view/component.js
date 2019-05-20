import React from 'react';
import PropTypes from 'prop-types';
import { Tree } from 'react-d3-tree';

const GraphView = ({ tree }) => (
  <div className="graph">
    <Tree data={tree} translate={{ x: 250, y: 20 }} zoom={0.9} orientation="vertical" />
  </div>
);

GraphView.propTypes = {
  tree: PropTypes.object.isRequired,
};

export default GraphView;
