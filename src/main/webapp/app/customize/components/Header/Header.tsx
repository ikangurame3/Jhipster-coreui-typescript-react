import React from "react";
import {
  Nav,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink as RsNavlink,
  Badge
} from "reactstrap";
import { NavLink } from "react-router-dom";
import HeaderDropdown from "./HeaderDropdown";

// TODO: the RsNavlink component should be replaced with NavLink
// this to improve performance while accessing routes

const Header: React.FC = () => {
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

  return (
    <header className="app-header navbar">
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
        <NavItem className="d-md-down-none">
          <RsNavlink href="#">
            <i className="icon-bell" />
            <Badge pill color="danger">
              5
            </Badge>
          </RsNavlink>
        </NavItem>
        <NavItem className="d-md-down-none">
          <RsNavlink href="#">
            <i className="icon-list" />
          </RsNavlink>
        </NavItem>
        <NavItem className="d-md-down-none">
          <RsNavlink href="#">
            <i className="icon-location-pin" />
          </RsNavlink>
        </NavItem>
        <HeaderDropdown />
      </Nav>
      <NavbarToggler className="d-md-down-none" onClick={asideToggle}>
        <span className="navbar-toggler-icon" />
      </NavbarToggler>
    </header>
  );
};

export default Header;
