import {TextStyle, ViewStyle} from "react-native";
import {ListItem} from "../interfaces";

type TabItemProps = {
  onPress: (item: ListItem) => void;
  item: ListItem;
  selectedItemsIndexs: number[];
  onPressDelete: (item: ListItem) => void;
  isDeletable: boolean;
  colorSelected?: string;
  colorUnSelected?: string;
  textStyle?: TextStyle;
  containerStyle?: ViewStyle;
};

type TabItemStylesProps = {
  isSelected?: boolean;
  isImageView: boolean;
  colorSelected?: string;
  colorUnSelected?: string;
  textStyle?: TextStyle;
  containerStyle?: ViewStyle;
};

export {TabItemProps, TabItemStylesProps};
