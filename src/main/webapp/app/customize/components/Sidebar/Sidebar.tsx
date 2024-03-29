import React from "react";
import { NavLink } from "react-router-dom";
import { Badge, Nav, NavItem, NavLink as RsNavLink } from "reactstrap";
import classNames from "classnames";
import d from "./_nav";
import {factory} from "app/config/configLog4j"

import SidebarFooter from "./../SidebarFooter";
import SidebarForm from "./../SidebarForm";
import SidebarHeader from "./../SidebarHeader";
import SidebarMinimizer from "./../SidebarMinimizer";
import {logDebug} from "react-jhipster";
import index from "app/customize/config";
import routes from "app/routes";

// Retrieve a logger (you can decide to use it per class and/or module or just
// export it in the config above etc. Your loggers - your choice!).
// This logger will fall in the first LogGroupRule from above.
const log = factory.getLogger("model.Product");

// This logger will fall in the 2nd LogGroupRule
const logOther = factory.getLogger("somethingElse");

const Sidebar: React.FC = props => {
  const handleClick = (e: any) => {
    e.preventDefault();
    e.target.parentElement.classList.toggle("open");
  };

  const activeRoute = (match: any, properties: any) => {
    const findRouteName = (url: string) => routes[url];
    const routeName = findRouteName(match.url);
    log.info("activeRoute" + match + " " + routeName);
    //return properties.location.pathname.indexOf(routeName) > -1
    return 1 > 0 ? "nav-item nav-dropdown open"
      : "nav-item nav-dropdown"
  };

  // badge addon to NavItem
  const badgeAddon = (badgeItem: any) => {
    if (badgeItem) {
      const classes = classNames(badgeItem.class);
      return (
        <Badge className={classes} color={badgeItem.variant}>
          {badgeItem.text}
        </Badge>
      );
    }

    return null;
  };

  // simple wrapper for nav-title item
  const wrapper = (item: any) => {
    return item.wrapper && item.wrapper.element
      ? React.createElement(
        item.wrapper.element,
        item.wrapper.attributes,
        item.name
      )
      : item.name;
  };

  // nav list section title
  const navTitle = (title: any, key: number) => {
    const classes = classNames("nav-title", title.class);
    return (
      <li key={key} className={classes}>
        {wrapper(title)}{" "}
      </li>
    );
  };

  const navListDivider = (item: any, key: number) => {
    const classes = classNames("divider", item.class);
    return <li key={key} className={classes} />;
  };

  // nav item with nav link
  const navItem = (item: any, key: number) => {
    const classes = {
      item: classNames(item.class),
      link: classNames(
        "nav-link",
        item.variant ? `nav-link-${item.variant}` : ""
      ),
      icon: classNames(item.icon)
    };
    return navLink(item, key, classes);
  };

  const navLink = (item: any, key: number, classes: any) => {
    const url = item.url ? item.url : "";
    return (
      <NavItem key={key} className={classes.item}>
        {isExternal(url) ? (
          <RsNavLink href={url} className={classes.link} active>
            <i className={classes.icon} />
            {item.name}
            {badgeAddon(item.badge)}
          </RsNavLink>
        ) : (
          <NavLink to={url} className={classes.link} activeClassName="active">
            <i className={classes.icon} />
            {item.name}
            {badgeAddon(item.badge)}
          </NavLink>
        )}
      </NavItem>
    );
  };

  const navDropdown = (item: any, key: number) => {
    return (
      <li key={key} className={activeRoute(item.url, props)}>
        <a
          className="nav-link nav-dropdown-toggle"
          href="#"
          onClick={handleClick}
        >
          <i className={item.icon} />
          {item.name}
        </a>
        <ul className="nav-dropdown-items">{navList(item.children)}</ul>
      </li>
    );
  };

  const navType = (item: any, id: number) =>
    item.title
      ? navTitle(item, id)
      : item.divider
      ? navListDivider(item, id)
      : item.children
        ? navDropdown(item, id)
        : navItem(item, id);

  const navList = (items: any) => {
    return items.map((item: any, index: number) => navType(item, index));
  };


  const isExternal = (url: string) => {
    const link = url ? url.substring(0, 4) : "";
    return link === "http";
  };

  return (
    <div className="sidebar">
      <SidebarHeader />
      <SidebarForm />
      <nav className="sidebar-nav">
        <Nav>{navList(d.items)}</Nav>
      </nav>
      <SidebarFooter />
      <SidebarMinimizer />
    </div>
  );
};

export default Sidebar;
