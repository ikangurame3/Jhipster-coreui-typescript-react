/*
 * Created by.
 *  * User: FIKY-PC
 *  * Date: 11/26/19, 9:22 AM
 *  * Last Modified: 11/26/19, 9:12 AM.
 *  Developed By: Fiky Ashariza Supported by Mom
 *  Copyright© 2019 .All rights reserved.
 */
import Docs from "app/modules/administration/docs/docs";
export default {
  items: [
    {
      name: "Home",
      url: "/",
      icon: "icon-home",
      badge: {
        variant: "info",
        text: "NEW"
      }
    },
    {
      title: true,
      name: "UI elements",
      wrapper: {
        // optional wrapper object
        element: "", // required valid HTML5 element tag
        attributes: {} // optional valid JS object with JS API naming
        // ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: "" // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: "Admin",
      url: "/admin",
      icon: "icon-user-circle",
      children: [
        {
          name: "UserManagement",
          url: "/admin/user-management",
          icon: "icon-star",
        },
        {
          name: "Health",
          url: "/admin/health",
          icon: "icon-puzzle"
        },
        {
          name: "Metrics",
          url: "/admin/Metrics",
          icon: "icon-puzzle"
        },
        {
          name: "Docs",
          url: "/admin/docs",
          icon: "icon-puzzle"
        },
        {
          name: "Configuration",
          url: "/admin/configuration",
          icon: "icon-puzzle"
        },
        {
          name: "Audits",
          url: "/admin/audits",
          icon: "icon-puzzle"
        },
        {
          name: "Logs",
          url: "/admin/logs",
          icon: "icon-puzzle"
        },
      ]
    },
    {
      name: "Account",
      url: "/account",
      icon: "icon-speedometer",
      children: [
        {
          name: "Register",
          url: "/account/register",
          icon: "icon-star",
        },
        {
          name: "Social Buttons",
          url: "/components/social-buttons",
          icon: "icon-puzzle"
        },
        {
          name: "Cards",
          url: "/components/cards",
          icon: "icon-puzzle"
        },
        {
          name: "Forms",
          url: "/components/forms",
          icon: "icon-puzzle"
        },
        {
          name: "Modals",
          url: "/components/modals",
          icon: "icon-puzzle"
        },
      ]
    },
    {
      name: "Entities",
      url: "/entity",
      icon: "icon-speedometer",
      badge: {
        variant: "info",
        text: "NEW"
      }
    }
    // {
    //   name: "Download CoreUI",
    //   url: "http://coreui.io/react/",
    //   icon: "icon-cloud-download",
    //   class: "mt-auto",
    //   variant: "success"
    // },
    // {
    //   name: "Try CoreUI PRO",
    //   url: "http://coreui.io/pro/react/",
    //   icon: "icon-layers",
    //   variant: "danger"
    // }
  ]
};
