import {StyleSheet} from "react-native";
import {TabItemStylesProps} from "./interfaces";

const createStyle = ({
  isSelected,
  isImageView = false,
  colorSelected,
  colorUnSelected,
  textStyle,
  containerStyle,
  ...props
}: TabItemStylesProps) => {
  return StyleSheet.create({
    container: {
      borderColor: isSelected ? colorSelected : colorUnSelected,
      borderWidth: isImageView ? 0 : 1,
      padding: isImageView ? 0 : 10,
      borderRadius: 15,
      shadowColor: "#FFFF",
      shadowOffset: {
        width: 4,
        height: 4,
      },
      shadowOpacity: 0.4,
      shadowRadius: 5,
      elevation: 15,
      backgroundColor: "transparent",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      marginVertical: 15,
      ...{...containerStyle},
    },
    text: {
      color: isSelected ? colorSelected : colorUnSelected,
      ...{...textStyle},
    },
    close: {
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      top: -6,
      left: -6,
      width: 24,
      height: 24,
      zIndex: 10,
      borderColor: isSelected ? colorSelected : colorUnSelected,
      borderWidth: 1,
      borderRadius: 30,
      backgroundColor: "#FFF",
    },

    image: {
      zIndex: 0,
      width: 60,
      height: 60,
      borderRadius: 100,
      borderColor: isSelected ? colorSelected : colorUnSelected,
      borderWidth: 1,
      marginBottom: 5,
    },
  });
};
export {createStyle};
