import { StyleSheet } from "react-native";
import { FONTS } from "../../../them/Fonts";
import { COLORS } from "../../../them/Colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header_title_container: {
        height: 67,
        width: '92%',
        // borderWidth:1,
        marginTop: '9%',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
    },
    icon_container: {
        height: 47,
        width: '10%',
        // borderWidth:1,
        alignItems: 'center', justifyContent: 'center',
    },
    text_title: {
        height: 'auto',
        width: '88%',
        // borderWidth:1,
        justifyContent: 'center',
        
    },
    title: {
        fontSize: 24,
        color: 'white',
        fontFamily: FONTS.MavenProMidum,
        textAlign:'center',
    },
    Detail_Container: {
        height: '86%',
        width: '92%',

        backgroundColor: 'white',
        alignSelf: 'center',

    },
    food_and_discription_conntainer:{
        height:132,
        width:'90%',
        alignSelf:'center',
    // borderWidth:1,
    marginTop:'3%',
    justifyContent:'space-between',
    flexDirection:'row',
    alignItems:'center',
    },
    image_container:{
        height:112,
        width:112,
        // borderWidth:1,
    },
    discription_food_container:{
        height:112,
        width:'57%',
        // borderWidth:1,
    },
    discription_food:{
        fontSize:12,
        color:'#8E9492',
        fontFamily:FONTS.MavenProRegual,
    },
    Category_container:{
        height:30,
        width:'97%',
        // borderWidth:1,
        alignSelf:'center',
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-around',


    },
    category_box:{
        height:20,
        width:'30%',
        // borderWidth:1,
        alignItems:'center',
        justifyContent:'space-around',
        // flexDirection:'row',
    },
    bar_container:{
        height:3,
        width:45,
        backgroundColor:'#C5C5C5',
        // borderRadius:50,

    },
    category_type:{
fontSize:12,
color:'#545857',
fontFamily:FONTS.MavenProBold,
// width:66,
    },
    Recipy_container:{
        height:300,
        width:'90%',
        backgroundColor:'white',
        // borderWidth:1,
        alignItems:'center',
        alignSelf:'center',
        marginTop:'3%',
        

    },
    recipy_point:{
        height:20,
        width:'90%',
        // borderWidth:1,
        alignSelf:'center',
        // justifyContent:'center',
        flexDirection:'row',
        alignItems:'center',
        marginTop:2,

    },
    dot:{
        height:5,
        width:5,
        borderRadius:50,
        backgroundColor:'black',
        justifyContent:'center',
        marginTop:3,
    },
    text:{
        fontSize:14,
        color:'#545857',
        width:'auto',
        fontFamily:FONTS.MavenProBold,
        marginLeft:7,
    }

    
    

})