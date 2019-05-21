import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Menu, Button } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import D from 'i18n';
import './menu.scss';

const CustomMenu = ({ history, location: { pathname } }) => {
  const [selected, setSelected] = useState(pathname);
  const handler = path => {
    setSelected(path);
    history.push(path);
  };
  return (
    <Menu size="massive" id="menu">
      <Menu.Item header>{D.appTitle}</Menu.Item>
      <Menu.Menu position="right" id="menu-right">
        <Button
          className={selected === '/simple-api' ? 'selected' : ''}
          size="big"
          onClick={() => handler('/simple-api')}
        >
          {D.simpleAPITitle}
        </Button>
        <Button
          className={selected === '/simple-js' ? 'selected' : ''}
          size="big"
          onClick={() => handler('/simple-js')}
        >
          {D.simpleJSTitle}
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
  location: PropTypes.shape({ pathname: PropTypes.string.isRequired }).isRequired,
};
