import { StyleSheet } from "react-native";
import { FONTS } from "../../them/Fonts";
import { COLORS } from "../../them/Colors";

export const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#EEF0F0',

    },
    Survey_container:{
        height:'auto',
        width:'92%',
        // borderWidth:1,
        alignSelf:'center',
        marginTop:'1%',
    },
    Question_container:{
        height:'auto',
        width:'auto',
        // borderWidth:1,
    },
    Question_text:{
        fontSize:12,
        color:'#545857',
        fontFamily:FONTS.MavenProRegual,
        width:'85%',
        // borderWidth:1
    },
    inputContainer1: {
        width: '100%',
        height: 20,
        // marginLeft:5,
        // backgroundColor:'red',
      },
    SafeAreaView2:{
        height:22,
        width:50,
        marginLeft:16,
        marginTop:'1.6%',
        backgroundColor:COLORS.white,
      
        justifyContent:'center',
        borderWidth:3,
        borderColor:COLORS.darkGrey,
    
        },
        chek_box_container:{
            height:30,
            width:'auto',
            // borderWidth:1,
            // justifyContent:'center',
            alignItems:'center',
            flexDirection:'row'
        },
        checkBox:{
            height:16,
            width:16,
            borderWidth:1,
            borderColor:'black',
            borderRadius:50,
            alignItems:'center',
            justifyContent:'center', 
            // marginLeft:15,
        },
        y_n:{
            color:'black',
            fontSize:12,
            fontFamily:FONTS.MavenProRegual,
            width:'auto',
            marginLeft:10,
        },
        option_container:{
            height:20,
            width:'auto',
            // borderWidth:1,
            flexDirection:'row',
            justifyContent:'space-around',
            alignItems:'center',
            marginLeft:8,
        }
})