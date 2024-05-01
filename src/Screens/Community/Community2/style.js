import { StyleSheet } from "react-native";
import { FONTS } from "../../../them/Fonts";
import { COLORS } from "../../../them/Colors";

export const styles = StyleSheet.create({
    container: {
        height:'100%',
        width:'100%',
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
        width: '78%',
        // borderWidth:1,
        justifyContent: 'center',
    },
    Headercontainer: {
        height: 40,
        width: '92%',
        // borderWidth:1,
        // backgroundColor:'red',
        marginTop: '10%',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        width: '100%',
        height: 30,
        // marginLeft: 5,
        // backgroundColor:'red',
    },
    title: {
        fontSize: 24,
        color: 'white',
        fontFamily: FONTS.MavenProMidum
    },
    Detail_Container: {
        height: '90%',
        width: '93%',
        marginTop: '1.6%',
        backgroundColor: 'white',
        alignSelf: 'center',
        // borderWidth:2,

    },
    recommended: {
        height: 30,
        width: '92%',
        // borderWidth:1,
        alignSelf: 'center', marginTop: '3%',
        justifyContent: 'center',
    },
    recommended_text: {
        color: 'white',
        fontSize: 16,
        fontFamily: FONTS.MavenProBold
    },

    SafeAreaView: {
        height: 30,
        width: '100%',
        borderWidth: 3,
        borderColor:'#C5C5C5',
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
        height: 120,
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
        // marginLeft: 4,
    },
    userName: {
        color: 'black',
        fontSize: 12,
        fontFamily: FONTS.MavenProBold,
        textDecorationLine: 'underline'

    },
    details_container: {
        height: 89,
        // borderWidth:1,
        width: '100%',
        // alignSelf:'flex-end'
    },
    detail_post: {
        fontSize: 12,
        color: '#8E9492',
        fontFamily: FONTS.MavenProRegual
    }
})