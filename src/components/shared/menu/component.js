import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Menu, Button } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import D from 'i18n';
import './menu.scss';

const CustomMenu = ({ history }) => {
  const [selected, setSelected] = useState('/simple');
  const handler = path => {
    setSelected(path);
    history.push(path);
  };
  return (
    <Menu size="massive" id="menu">
      <Menu.Item header>{D.appTitle}</Menu.Item>
      <Menu.Menu position="right" id="menu-right">
        <Button
          className={selected === '/simple' ? 'selected' : ''}
          size="big"
          onClick={() => handler('/simple')}
        >
          {D.simpleTitle}
        </Button>
        <Button
          className={selected === '/tree' ? 'selected' : ''}
          size="big"
          onClick={() => handler('/tree')}
        >
          {D.treeTitle}
        </Button>
        <Button
          className={selected === '/advanced' ? 'selected' : ''}
          size="big"
          onClick={() => handler('/advanced')}
        >
          {D.advancedTitle}
        </Button>
      </Menu.Menu>
    </Menu>
  );
};

export default withRouter(CustomMenu);

CustomMenu.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
};
