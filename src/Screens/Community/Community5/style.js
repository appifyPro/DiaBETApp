import { StyleSheet } from "react-native";
import { FONTS } from "../../../them/Fonts";
import { COLORS } from "../../../them/Colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header_title_container: {
        height: 47,
        width: '92%',
        // borderWidth:1,
        marginTop: '12%',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    icon_container: {
        height: 47,
        width: '10%',
        // borderWidth:1,
        alignItems: 'center', justifyContent: 'center',
    },
    text_title: {
        height: 47,
        width: '84%',
        // borderWidth:1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        color: 'white',
        fontFamily: FONTS.MavenProMidum
    },
    Detail_Container: {
        height: '90%',
        width: '92%',

        backgroundColor: 'white',
        alignSelf: 'center',

    },
    SafeAreaView: {
        height: 22,
        width: '89%',
        borderWidth: 3,
        borderColor: COLORS.darkGrey,
        alignSelf: 'center',
        marginTop: '4%',
    },
    button_container: {
        height: 45,
        width: '89%',
        // borderWidth:1,
        alignSelf: 'center',
        marginTop: '3%',
        // backgroundColor:'red',
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignItems: 'center',
    },
    button_Box: {
        height: 25,
        width: 111,
        backgroundColor: COLORS.mainColor,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button_title: {
        color: 'white',
        fontSize: 14,
        fontFamily: FONTS.MavenProMidum

    },
    button2_Box: {
        height: 25,
        width: 145,
        backgroundColor: COLORS.mainColor,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    post_user: {
        height: 126,
        width: '96%',
        // borderWidth: 1,
        alignSelf: 'center',
        // marginTop: '5%',
        // backgroundColor:'red'
    },
    user_detail: {
        height: 30,
        width: '100%',
        // backgroundColor:'red',
        flexDirection: 'row',
        // justifyContent:'center',
        alignItems: 'center',
        // borderWidth: 1,
        alignSelf: 'center',
    },

    user_profile: {
        height: 30,
        width: 30,
        backgroundColor: 'blue',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        // flexDirection:'row',

    },
    user_Slice: {
        color: 'white',
        fontSize: 16,
        fontFamily: FONTS.MavenProSemiBold,
    },
    user_name_box: {
        height: 30,
        width: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 4,
    },
    userName: {
        color: 'black',
        fontSize: 12,
        fontFamily: FONTS.MavenProBold

    },
    details_container:{
        height:84,
        // borderWidth:1,
        width:'89%',
        alignSelf:'flex-end'
  },
  detail_post:{
    fontSize:12,
    color:'#8E9492',
    fontFamily:FONTS.MavenProRegual
  },
  inputContainer: {
    width: '100%',
    height: 20,
    marginLeft:5,
    // backgroundColor:'red',
  },
})