import { StyleSheet } from "react-native";
import { FONTS } from "../../them/Fonts";
import { COLORS } from "../../them/Colors";

export const styles=StyleSheet.create({
    container:{
        flex:1,
    },
   detail_container:{ 
    height:'89%',
    width: '93%',
marginTop:'20%',
    backgroundColor: 'white',
    alignSelf: 'center',
    alignItems:'center',
    justifyContent:'center',
},

    text_container:{
height:50,
width:'100%',
alignItems:'center',
justifyContent:'center',
//  borderWidth:1,

    },
    text:{
fontSize:24,
fontFamily:FONTS.PodkovaExtrBold,
color:COLORS.black,
    }
})