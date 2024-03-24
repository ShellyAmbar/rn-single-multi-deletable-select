import React from "react";
import {View} from "react-native";

import {createStyle} from "./spacer.styles";
import {SpacerProps} from "./interfaces";

const Spacer = ({size = 8, isVertical = true}: SpacerProps) => {
  const style = createStyle(size, isVertical);
  return <View style={style.container} />;
};

export default Spacer;
