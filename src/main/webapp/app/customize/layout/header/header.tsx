import './header.scss';

import React, { useState } from 'react';
import { Translate, Storage } from 'react-jhipster';
import { Navbar, Nav, NavbarToggler, NavbarBrand, Collapse, Badge, UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle, NavItem,NavLink as RsNavlink,  } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {NavLink, NavLink as Link} from 'react-router-dom';
import LoadingBar from 'react-redux-loading-bar';

import { AppAsideToggler, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import { Home, Brand } from './header-components';
import { AdminMenu, EntitiesMenu, AccountMenu, LocaleMenu } from '../menus';
import HeaderDropdown from "app/customize/components/Header/HeaderDropdown";


export interface IHeaderProps {
  isAuthenticated: boolean;
  isAdmin: boolean;
  ribbonEnv: string;
  isInProduction: boolean;
  isSwaggerEnabled: boolean;
  currentLocale: string;
  onLocaleChange: Function;
}

const Header = (props: IHeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLocaleChange = event => {
    const langKey = event.target.value;
    Storage.session.set('locale', langKey);
    props.onLocaleChange(langKey);
  };

  const renderDevRibbon = () =>
    props.isInProduction === false ? (
      <div className="ribbon dev">
        <a href="">
          <Translate contentKey={`global.ribbon.${props.ribbonEnv}`} />
        </a>
      </div>
    ) : null;

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const sidebarToggle = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    document.body.classList.toggle("sidebar-hidden");
  };

  const mobileSidebarToggle = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    document.body.classList.toggle("sidebar-mobile-show");
  };

  const asideToggle = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    document.body.classList.toggle("aside-menu-hidden");
  };
  /* jhipster-needle-add-element-to-menu - JHipster will add new menu items here */

  return (
    <header className="app-header navbar">
      {renderDevRibbon()}
      <LoadingBar className="loading-bar" />
      <NavbarToggler className="d-lg-none" onClick={mobileSidebarToggle}>
        <span className="navbar-toggler-icon" />
      </NavbarToggler>
      <NavbarBrand href="#" />
      <NavbarToggler className="d-md-down-none" onClick={sidebarToggle}>
        <span className="navbar-toggler-icon" />
      </NavbarToggler>
      <Nav className="d-md-down-none" navbar>
        {/* TODO: These items use react-router-dom navlinks
        Should make it iterative for different routes and componentes */}
        {/*<Home />*/}
        <NavItem className="px-3">
          <NavLink
            to="/dashboard"
            exact
            activeStyle={{ textDecoration: "underline", color: "#536c79" }}
          >
            Dashboard
          </NavLink>
        </NavItem>
        <NavItem className="px-3">
          <NavLink
            to="/users"
            exact
            activeStyle={{ textDecoration: "underline", color: "#536c79" }}
          >
            Usuarios
          </NavLink>
        </NavItem>
        {/*  */}
        <NavItem className="px-3">
          <RsNavlink href="#">Settings</RsNavlink>
        </NavItem>
      </Nav>
      <Nav className="ml-auto" navbar>
        {props.isAuthenticated && <EntitiesMenu />}
        {props.isAuthenticated && props.isAdmin && <AdminMenu showSwagger={props.isSwaggerEnabled} />}
        <LocaleMenu currentLocale={props.currentLocale} onClick={handleLocaleChange} />
        <AccountMenu isAuthenticated={props.isAuthenticated} />
        {/*<HeaderDropdown />*/}
      </Nav>
      <NavbarToggler className="d-md-down-none" onClick={asideToggle}>
        <span className="navbar-toggler-icon" />
      </NavbarToggler>
    </header>

  );
};

export default Header;
