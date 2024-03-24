import {StyleSheet} from "react-native";
const createStyle = ({height}: {height: number}) =>
  StyleSheet.create({
    cointainer: {
      width: "100%",

      flexGrow: 0,
      minHeight: height ? height + 20 : 100,
    },
    contentCointainer: {
      alignItems: "center",
      paddingHorizontal: 6,
    },
  });
export default createStyle;
