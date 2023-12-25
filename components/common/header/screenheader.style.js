import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  btnContainer: (BtnDimension, padding) => ({
    width: BtnDimension,
    height: BtnDimension,
    padding: padding,
    backgroundColor: COLORS.primary,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  }),
  btnImg: (ImgDimension) => ({
    width: ImgDimension,
    height: ImgDimension,
    borderRadius: SIZES.small / 1.25,
  }),
  btnText: () => ({
    color: COLORS.white,
    fontWeight: 'bold', 
    fontSize: SIZES.medium,
    lineHeight: SIZES.medium
  }),
});

export default styles;
