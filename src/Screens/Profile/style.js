import { StyleSheet } from "react-native";
import { FONTS } from "../../them/Fonts";

export const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    Detail_container:{
        height:'87%',
        width:'92%',
        borderWidth:1.5,
        backgroundColor:'white',
        alignSelf:'center',
        marginTop:'23%',
    },
    User_Details_container:{
        height:25,
        width:'auto',
        // borderWidth:1,
        justifyContent:'center',
    },
    user_ans_container:{
        height:20,
        width:'93%',
        // borderWidth:1,
        marginTop:'1%',
        alignSelf:'center',
        // alignItems:'center',
        // justifyContent:'center',
        flexDirection:'row',
    },
    user_Type:{
        fontSize:12,
        color:'#545857',
        fontFamily:FONTS.MavenProBold
    },
    user_text:{
        fontSize:12,
        color:'#545857',
        fontFamily:FONTS.MavenProRegual,
        marginLeft:3,
    }
})