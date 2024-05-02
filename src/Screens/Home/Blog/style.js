import { StyleSheet } from "react-native";
import { FONTS } from "../../../them/Fonts";

export const styles=StyleSheet.create({
    container:{
        flex:1,
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
    title: {
        fontSize: 20,
        color: 'white',
        fontFamily: FONTS.MavenProMidum
    },
    Detail_Container: {
        height: '87%',
        width: '92%',
marginTop:'4%',
        backgroundColor: 'white',
        alignSelf: 'center',

    },
    text_container:{
        height:'auto',
        width:'86.6%',
        // borderWidth:1,
        alignSelf:'center',
        marginTop:'4%'
    },
    discritpion_container:{
        fontSize:12,
        fontFamily:FONTS.MavenProRegual,
        color:'#545857',
        // marginRight:10,
        // borderWidth:1,
    }
})