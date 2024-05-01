import { StyleSheet } from "react-native";
import { COLORS } from "../../../them/Colors";
import { FONTS } from "../../../them/Fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:COLORS.mainColor
  },
  Text_Field_Container: {
    height: '91.5%',
    width: '95%',
    backgroundColor: COLORS.white,
    alignSelf: 'center',
    marginTop: '12.5%',
  },
  inputBox_container: {
    width: '100%',
    height: '90%',

    //  borderWidth:1,
    marginTop: '15%',
  },
  SafeAreaView: {
    height: 22,
    width: '86%',
    borderWidth: 2,
    borderColor: COLORS.darkGrey,
    alignSelf: 'center',
    marginTop: '4%',
  },
  inputContainer: {
    width: '100%',
    height: 20,
    marginLeft: 5,
    // backgroundColor:'red',
  },
  discription_container: {
    height: 90,
    width: '86%',
    // borderWidth: 1,
    marginTop: '6%',
    alignSelf: 'center',
    justifyContent: 'center',
    // marginRight: 14,
  },
  discription: {
    color: '#545857',
    fontSize: 14,
    fontFamily: FONTS.MavenProMidum,
  },
  survey_container: {
    height: 40,
    width: '86%',
    // borderWidth:1,
    justifyContent: 'flex-end',
    alignSelf: 'center',
    // marginTop:'1%'
  },
  survey_text: {
    color: '#545857',
    fontSize: 14,
    fontFamily: FONTS.MavenProMidum,
    textDecorationLine: 'underline'

  },
  Signup_button_container: {
    height: 210,
    width: '86%',
    // borderWidth:1,

    alignSelf: 'center',
    marginTop: '10%',
    justifyContent: 'flex-end'
  },
  singup_button: {
    height: 35,
    width: 113,
    borderRadius: 8,
    backgroundColor: COLORS.mainColor,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signup_Text: {
    fontSize: 20,
    fontFamily: FONTS.PodkovaBold,
    color: COLORS.white,
  },
  discription_box:{
    height:70,
    width:'70%',
    // borderWidth:1,
    alignSelf:'center',
    marginTop:'8%',
    alignItems:'center',
    justifyContent:'center',
  },
  discription_text:{
    fontSize:14,
    fontFamily:FONTS.MavenProRegual,
    color:'black',
    textAlign:'center',
  },
  icon_container:{
    height:50,
    width:'60%',
    // borderWidth:1,
    alignSelf:'center',
    alignItems:'center',
    justifyContent:'space-between',
    flexDirection:'row',
  },
  SafeAreaView1:{
    height:22,
    width:'64%',
    // borderWidth:1,
    alignSelf:'center',
    marginTop:'5%',
    backgroundColor:COLORS.white,
    // alignItems:'center',
    justifyContent:'center',
    borderWidth:3,
    borderColor:COLORS.darkGrey,
    // lineHeight:-10,
    // position:'absolute',
    },
    inputContainer1: {
        width: '100%',
        height: 20,
        marginLeft:5,
        // backgroundColor:'red',
      },
    SafeAreaView2:{
        height:22,
        width:'64%',
        
        marginTop:'4%',
        backgroundColor:COLORS.white,
        // alignItems:'center',
        alignSelf:'center',
        justifyContent:'center',
        borderWidth:3,
        borderColor:COLORS.darkGrey,
    
        },
        Link_button:{
          alignSelf:'center',
          height:35,
          width:113,
          borderRadius:10,
          backgroundColor:COLORS.mainColor,
          marginTop:'13%',
          alignItems:'center',
          justifyContent:'center',
        },
        Link_text:{
          color:'white',
          fontSize:20,
          fontFamily:FONTS.PodkovaBold
        }
})