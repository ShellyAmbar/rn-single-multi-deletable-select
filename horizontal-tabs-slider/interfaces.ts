import {TextStyle, FlatListProps, ViewStyle} from "react-native";

type ListItem = {
  name: string;
  index: number;
  url?: string;
};
type HorizontalSliderProps = {
  dataList: ListItem[];
  isMultySelection?: boolean;
  onPressItem?: (item: ListItem) => void;
  onDeleteItem?: (item: ListItem) => void;
  isDeletable: boolean;
  colorSelected?: string;
  colorUnSelected?: string;
  textStyle?: TextStyle;
  itemContainerStyle?: ViewStyle;
} & Partial<FlatListProps<ListItem>>;

export {ListItem, HorizontalSliderProps};
