/**

This file imports and exports custom font configurations for the Roboto Code font family.
It defines a customFont object that contains the imported font weights and a typography object that uses these fonts. 
*/

import {
  Poppins_300Light as PoppinsLight,
  Poppins_400Regular as PoppinsRegular,
  Poppins_500Medium as PoppinsMedium,
  Poppins_700Bold as PoppinsSemiBold,
  Poppins_900Black as PoppinsBold,
} from "@expo-google-fonts/poppins";

export const customFont = {
  PoppinsLight,
  PoppinsRegular,
  PoppinsMedium,
  PoppinsSemiBold,
  PoppinsBold,
};

const fonts = {
  poppinsFonts: {
    light: "PoppinsLight",
    normal: "PoppinsRegular",
    medium: "PoppinsMedium",
    semiBold: "PoppinsSemiBold",
    bold: "PoppinsBold",
  },
};

export const typography = {
  primary: fonts.poppinsFonts,
};
