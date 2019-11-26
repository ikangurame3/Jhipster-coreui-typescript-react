import React from "react";
import { Card, CardBody, Progress } from "reactstrap";
import classNames from "classnames";
import { mapToCssModules } from "reactstrap/lib/utils";

const Widget01: React.FC<any> = props => {
  const {
    className,
    cssModule,
    header,
    mainText,
    smallText,
    color,
    value,
    children,
    variant,
    ...attributes
  } = props;

  // demo purposes only
  const progress = { style: "", color, value };
  const card = { style: "", bgColor: "" };

  if (variant === "inverse") {
    progress.style = "progress-white";
    progress.color = "";
    card.style = "text-white";
    card.bgColor = "bg-" + color;
  }

  const classes = mapToCssModules(
    classNames(className, card.style, card.bgColor),
    cssModule
  );
  progress.style = classNames("progress-xs my-3", progress.style);

  return (
    <Card className={classes} {...attributes}>
      <CardBody>
        <div className="h4 m-0">{header}</div>
        <div>{mainText}</div>
        <Progress
          className={progress.style}
          color={progress.color}
          value={progress.value}
        />
        <small className="text-muted">{smallText}</small>
        <div>{children}</div>
      </CardBody>
    </Card>
  );
};

export default Widget01;
