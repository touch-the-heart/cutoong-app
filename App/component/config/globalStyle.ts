import { StyleSheet } from "react-native";

export const colors={
    white: '#FFFFFF',
}

export const globalStyle = StyleSheet.create({
    flexGrowOne: {
      flexGrow: 1,
    },
    flexOne: {
      flex: 1,
    },
    flexTwo: {
      flex: 2,
    },
    flexRow: {
      flexDirection: 'row',
    },
    flexRowCenter: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    flexEnd: {
      alignSelf: 'flex-end',
    },
    textCenter: {
      textAlign: 'center',
    },   
  });