import React from "react";
import { useScrollTrigger } from "@material-ui/core";
import { theme } from '../themes/theme';

const ScrollHandler = props => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: props.window ? window() : undefined
  });

  return React.cloneElement(props.children, {
    style: {
      backgroundColor: trigger ? '#ffffff' : "transparent",
      transition: trigger ? "0.3s" : "0.5s",
    }
  });
};

const ScrollToColor = props => {
  return <ScrollHandler {...props}>{props.children}</ScrollHandler>;
};

export default ScrollToColor;