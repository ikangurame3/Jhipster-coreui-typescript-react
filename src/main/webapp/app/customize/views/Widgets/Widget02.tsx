import React from "react";
import { Card, CardBody, CardFooter } from "reactstrap";
import classNames from "classnames";
import { mapToCssModules } from "reactstrap/lib/utils";

const Widget02: React.FC<any> = props => {
  const {
    className,
    cssModule,
    header,
    mainText,
    icon,
    color,
    footer,
    link,
    children,
    variant,
    ...attributes
  } = props;

  // demo purposes only
  const padding =
    variant === "0"
      ? { card: "p-3", icon: "p-3", lead: "mt-2" }
      : variant === "1"
      ? {
          card: "p-0",
          icon: "p-4",
          lead: "pt-3"
        }
      : { card: "p-0", icon: "p-4 px-5", lead: "pt-3" };

  const card = { style: "clearfix", color, icon, classes: "" };
  card.classes = mapToCssModules(
    classNames(className, card.style, padding.card),
    cssModule
  );

  const lead = { style: "h5 mb-0", color, classes: "" };
  lead.classes = classNames(lead.style, "text-" + card.color, padding.lead);

  const blockIcon = (iconBlock: any) => {
    const classes = classNames(
      iconBlock,
      "bg-" + card.color,
      padding.icon,
      "font-2xl mr-3 float-left"
    );
    return <i className={classes} />;
  };

  const cardFooter = () => {
    if (footer) {
      return (
        <CardFooter className="px-3 py-2">
          <a
            className="font-weight-bold font-xs btn-block text-muted"
            href={link}
          >
            View More
            <i className="fa fa-angle-right float-right font-lg" />
          </a>
        </CardFooter>
      );
    }
    return null;
  };

  return (
    <Card>
      <CardBody className={card.classes} {...attributes}>
        {blockIcon(card.icon)}
        <div className={lead.classes}>{header}</div>
        <div className="text-muted text-uppercase font-weight-bold font-xs">
          {mainText}
        </div>
      </CardBody>
      {cardFooter()}
    </Card>
  );
};

export default Widget02;
