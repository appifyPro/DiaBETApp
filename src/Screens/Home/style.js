import { StyleSheet } from "react-native";
import { COLORS } from "../../them/Colors";
import { FONTS } from "../../them/Fonts";

export const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  Text_Field_Container: {
    height: '90%',
    width: '92%',
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: '18.5%',
  },
  inputBox_container: {
    width: '90%',
    height: '98%',
    justifyContent: 'center',
    flexDirection: 'column',
    // borderWidth:1,
    marginTop: '2%',
    alignSelf: 'center',
  },

  Text_Contaner: {
    height: 255,
    width: '100%',
    // borderWidth:1,

  },
  title_container: {
    height: 40,
    width: '100%',
    justifyContent: 'center',
    // borderWidth:1,
    marginTop: '-2%',
  },
  title: {
    fontSize: 16,
    fontFamily: FONTS.MavenProBold,
    color: COLORS.black,
    textDecorationLine: 'underline',
    width: '70%',
  },
  discription_container: {
    height: 220,
    width: '98%',
    // borderWidth: 1,

  },
  discription: {
    color: '#8E9492',
    fontSize: 12,
    fontFamily: FONTS.MavenProRegual,
  }
})