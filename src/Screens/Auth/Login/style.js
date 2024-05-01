import { StyleSheet } from "react-native";
import { COLORS } from "../../../them/Colors";
import { FONTS } from "../../../them/Fonts";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.mainColor,
        // backgroundColor:'white'
    },
    intro_container: {
        height: 220,
        width: '89%',
        // borderWidth:1,
        alignSelf: 'center',

        alignItems: 'center',
        justifyContent: 'center',
    },
    intro_text: {
        fontSize: 64,
        textAlign: 'center',
        color: COLORS.darkGrey,
        fontFamily: FONTS.PodkovaExtrBold

    },
    Input_Box_contaier:{
        height:250,
        width:'89%',
        // borderWidth:1,
        alignSelf:'center',
        marginTop:'20%',
        alignItems:'center',
        // justifyContent:'center',
    },
    SafeAreaView:{
        height:22,
        width:'70%',
        // borderWidth:1,
        // alignSelf:'center',
        marginTop:'10%',
        backgroundColor:COLORS.white,
        // alignItems:'center',
        justifyContent:'center',
        borderWidth:3,
        borderColor:COLORS.darkGrey,
        // lineHeight:-10,
        // position:'absolute',
        },
        inputContainer: {
            width: '100%',
            height: 20,
            marginLeft:5,
            // backgroundColor:'red',
          },
        SafeAreaView2:{
            height:22,
            width:'70%',
            
            marginTop:'7%',
            backgroundColor:COLORS.white,
            // alignItems:'center',
            justifyContent:'center',
            borderWidth:3,
            borderColor:COLORS.darkGrey,
        
            },
            login_Button:{
                height:35,
                width:113,
                backgroundColor:COLORS.darkGrey,
                marginTop:'6%',
                borderRadius:10,
                alignItems:'center',
                justifyContent:'center',
                shadowRadius: 19,
                shadowOffset: { width: 10, height: 5 }, 
                shadowColor: 'black',
                elevation:5,
            },
            login_text:{
                fontSize:20,
                fontFamily:FONTS.PodkovaBold,
                color:COLORS.loginButton
            },
            signUp_Button:{
                height:35,
                width:113,
                // backgroundColor:COLORS.darkGrey,
                marginTop:'4%',
                // borderRadius:12,
                alignItems:'center',
                justifyContent:'center',
                
            },
            Signup_text: {
                fontSize:16,
                fontFamily:FONTS.MavenProMidum,
                color:COLORS.white,
                textDecorationLine:'underline',
            }

   
})