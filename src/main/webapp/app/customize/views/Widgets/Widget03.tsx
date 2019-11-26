import React from "react";
import classNames from "classnames";
import { mapToCssModules } from "reactstrap/lib/utils";

const Widget03: React.FC<any> = props => {
  const { className, cssModule, dataBox } = props;

  // demo purposes only
  const data = dataBox();
  const variant = data.variant;

  if (
    !variant ||
    ["facebook", "twitter", "linkedin", "google-plus"].indexOf(variant) < 0
  ) {
    return null;
  }

  const icon = "fa fa-" + variant;
  const keys: any = Object.keys(data);
  const vals: any = Object.values(data);

  const classes = mapToCssModules(
    classNames("social-box", className, variant),
    cssModule
  );

  return (
    <div className={classes}>
      <i className={icon} />
      <ul>
        <li>
          <strong>{vals[1]}</strong>
          <span>{keys[1]}</span>
        </li>
        <li>
          <strong>{vals[2]}</strong>
          <span>{keys[2]}</span>
        </li>
      </ul>
    </div>
  );
};

export default Widget03;
