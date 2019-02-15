import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Button } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import D from 'i18n';
import './menu.scss';

const CustomMenu = ({ history, location: { pathname } }) => (
  <Menu size="massive" id="menu">
    <Menu.Item header>{D.appTitle}</Menu.Item>
    <Menu.Menu position="right" id="menu-right">
      <Button
        size="big"
        onClick={() => history.push(pathname === '/simple' ? '/advanced' : '/simple')}
      >
        {pathname === '/simple' ? D.advancedTitle : D.simpleTitle}
      </Button>
    </Menu.Menu>
  </Menu>
);

export default withRouter(CustomMenu);

CustomMenu.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
  location: PropTypes.shape({ pathname: PropTypes.string.isRequired }).isRequired,
};
