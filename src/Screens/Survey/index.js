import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { styles } from './style'
import Input from '../../Component/Text_Input'
import { COLORS } from '../../them/Colors'
import { SafeAreaView } from 'react-native-safe-area-context'
const Survey = () => {
    const [age, setAge] = useState('')
    const [isCheck, setCheck] = useState(true);
    const [uncheck, setUnCheck] = useState()
    return (
        <View style={styles.container}>
            <ScrollView style={{marginBottom:15,}}>

          
            <View style={styles.Survey_container}>
                <View style={styles.Question_container}>
                    <Text style={styles.Question_text}>
                        {`1.) What is your age?`}
                    </Text>
                    <SafeAreaView style={[styles.SafeAreaView2]}>
                        <Input
                            value={age}
                            SafeAreaView={styles.inputContainer1}
                            onChangeText={(text) => setAge(text)}
                        />
                    </SafeAreaView>
                </View>
            </View>
            <View style={styles.Survey_container}>
                <View style={styles.Question_container}>
                    <Text style={styles.Question_text}>
                        {`2.) What is your BMI?`}
                    </Text>
                    <SafeAreaView style={[styles.SafeAreaView2]}>
                        <Input
                            value={age}
                            SafeAreaView={styles.inputContainer1}
                            onChangeText={(text) => setAge(text)}
                        />
                    </SafeAreaView>
                </View>
            </View>
            <View style={styles.Survey_container}>
                <View style={styles.Question_container}>
                    <Text style={styles.Question_text}>
                        {`3.) What is your systolic blood pressure?`}
                    </Text>
                    <SafeAreaView style={[styles.SafeAreaView2]}>
                        <Input
                            value={age}
                            SafeAreaView={styles.inputContainer1}
                            onChangeText={(text) => setAge(text)}
                        />
                    </SafeAreaView>
                </View>
            </View>
            <View style={styles.Survey_container}>
                <View style={styles.Question_container}>
                    <Text style={styles.Question_text}>
                        {`5.) What is your cholesterol level? `}
                    </Text>
                    <SafeAreaView style={[styles.SafeAreaView2]}>
                        <Input
                            value={age}
                            SafeAreaView={styles.inputContainer1}
                            onChangeText={(text) => setAge(text)}
                        />
                    </SafeAreaView>
                </View>
            </View>
            <View style={styles.Survey_container}>
                <View style={styles.Question_container}>
                    <Text style={styles.Question_text}>
                        {`6.) Do you smoke?`}
                    </Text>
                    <View style={styles.chek_box_container}>
                        <View style={styles.option_container}>


                            <TouchableOpacity onPress={() => setCheck(!isCheck)}
                                style={styles.checkBox}>
                                {
                                    isCheck ?
                                        <View style={{ height: 10, width: 10, backgroundColor: 'black', borderRadius: 50, }}>

                                        </View>
                                        :
                                        null}
                            </TouchableOpacity>
                            <Text style={styles.y_n}>
                                No
                            </Text>
                        </View>
                        <View style={styles.option_container}>

                            <TouchableOpacity onPress={() => {
                                if (isCheck === false) {
                                    setCheck(true);
                                }
                                else {
                                    setCheck(false)
                                }
                            }}
                                style={styles.checkBox}>
                                {
                                    !isCheck &&
                                    (<View style={{ height: 10, width: 10, backgroundColor: 'black', borderRadius: 50, }}>

                                    </View>)
                                }
                            </TouchableOpacity>
                            <Text style={styles.y_n}>
                                Yes
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.Survey_container}>
                <View style={styles.Question_container}>
                    <Text style={styles.Question_text}>
                        {`7.) Has a doctor ever told you that you have high blood pressure? `}
                    </Text>
                    <View style={styles.chek_box_container}>
                        <View style={styles.option_container}>
                            <TouchableOpacity onPress={() => setCheck(!isCheck)}
                                style={styles.checkBox}>
                                {
                                    isCheck ?
                                        <View style={{ height: 10, width: 10, backgroundColor: 'black', borderRadius: 50, }}>

                                        </View>
                                        :
                                        null}
                            </TouchableOpacity>
                            <Text style={styles.y_n}>
                                No
                            </Text>
                        </View>
                        <View style={styles.option_container}>

                            <TouchableOpacity onPress={() => {
                                if (isCheck === false) {
                                    setCheck(true);
                                }
                                else {
                                    setCheck(false)
                                }
                            }}
                                style={styles.checkBox}>
                                {
                                    !isCheck &&
                                    (<View style={{ height: 10, width: 10, backgroundColor: 'black', borderRadius: 50, }}>

                                    </View>)
                                }
                            </TouchableOpacity>
                            <Text style={styles.y_n}>
                                Yes
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={[styles.Survey_container,{marginTop:10,}]}>
                <View style={styles.Question_container}>
                    <Text style={styles.Question_text}>
                        {`8.) How many hours per week do you engage in physical activity? `}
                    </Text>
                    <SafeAreaView style={[styles.SafeAreaView2]}>
                        <Input
                            value={age}
                            SafeAreaView={styles.inputContainer1}
                            onChangeText={(text) => setAge(text)}
                        />
                    </SafeAreaView>
                </View>
            </View>
            <View style={styles.Survey_container}>
                <View style={styles.Question_container}>
                    <Text style={styles.Question_text}>
                        {`9.) How frequently do you consume fruit?`}
                    </Text>
                    <View style={styles.chek_box_container}>
                        <View style={styles.option_container}>
                            <TouchableOpacity onPress={() => setCheck(!isCheck)}
                                style={styles.checkBox}>
                                {
                                    !isCheck ?
                                        <View style={{ height: 10, width: 10, backgroundColor: 'black', borderRadius: 50, }}>

                                        </View>
                                        :
                                        null}
                            </TouchableOpacity>
                            <Text style={styles.y_n}>
                            Once a Day or More
                            </Text>
                        </View>
                        <View style={styles.option_container}>

                            <TouchableOpacity onPress={() => setCheck(!isCheck)}
                                style={styles.checkBox}>
                                {
                                    isCheck &&
                                    (<View style={{ height: 10, width: 10, backgroundColor: 'black', borderRadius: 50, }}>

                                    </View>)
                                }
                            </TouchableOpacity>
                            <Text style={styles.y_n}>
                            Less Than Once a Day
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.Survey_container}>
                <View style={styles.Question_container}>
                    <Text style={styles.Question_text}>
                        {`10.) How frequently do you consume vegetables? `}
                    </Text>
                    <View style={styles.chek_box_container}>
                        <View style={styles.option_container}>
                            <TouchableOpacity onPress={() => setCheck(!isCheck)}
                                style={styles.checkBox}>
                                {
                                    isCheck ?
                                        <View style={{ height: 10, width: 10, backgroundColor: 'black', borderRadius: 50, }}>

                                        </View>
                                        :
                                        null}
                            </TouchableOpacity>
                            <Text style={styles.y_n}>
                            Once a Day or More
                            </Text>
                        </View>
                        <View style={styles.option_container}>

                            <TouchableOpacity onPress={() => {
                                if (isCheck === false) {
                                    setCheck(true);
                                }
                                else {
                                    setCheck(false)
                                }
                            }}
                                style={styles.checkBox}>
                                {
                                    !isCheck &&
                                    (<View style={{ height: 10, width: 10, backgroundColor: 'black', borderRadius: 50, }}>

                                    </View>)
                                }
                            </TouchableOpacity>
                            <Text style={styles.y_n}>
                            Less Than Once a Day
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.Survey_container}>
                <View style={styles.Question_container}>
                    <Text style={styles.Question_text}>
                        {`11.) Do you ever drive after drinking? `}
                    </Text>
                    <View style={styles.chek_box_container}>
                        <View style={styles.option_container}>
                            <TouchableOpacity onPress={() => setCheck(!isCheck)}
                                style={styles.checkBox}>
                                {
                                    isCheck ?
                                        <View style={{ height: 10, width: 10, backgroundColor: 'black', borderRadius: 50, }}>

                                        </View>
                                        :
                                        null}
                            </TouchableOpacity>
                            <Text style={styles.y_n}>
                            No
                            </Text>
                        </View>
                        <View style={styles.option_container}>

                            <TouchableOpacity onPress={() => {
                                if (isCheck === false) {
                                    setCheck(true);
                                }
                                else {
                                    setCheck(false)
                                }
                            }}
                                style={styles.checkBox}>
                                {
                                    !isCheck &&
                                    (<View style={{ height: 10, width: 10, backgroundColor: 'black', borderRadius: 50, }}>

                                    </View>)
                                }
                            </TouchableOpacity>
                            <Text style={styles.y_n}>
                          Yes
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.Survey_container}>
                <View style={styles.Question_container}>
                    <Text style={styles.Question_text}>
                        {`12.) Do you have health plan coverage?`}
                    </Text>
                    <View style={styles.chek_box_container}>
                        <View style={styles.option_container}>
                            <TouchableOpacity onPress={() => setCheck(!isCheck)}
                                style={styles.checkBox}>
                                {
                                    isCheck ?
                                        <View style={{ height: 10, width: 10, backgroundColor: 'black', borderRadius: 50, }}>

                                        </View>
                                        :
                                        null}
                            </TouchableOpacity>
                            <Text style={styles.y_n}>
                            No
                            </Text>
                        </View>
                        <View style={styles.option_container}>

                            <TouchableOpacity onPress={() => {
                                if (isCheck === false) {
                                    setCheck(true);
                                }
                                else {
                                    setCheck(false)
                                }
                            }}
                                style={styles.checkBox}>
                                {
                                    !isCheck &&
                                    (<View style={{ height: 10, width: 10, backgroundColor: 'black', borderRadius: 50, }}>

                                    </View>)
                                }
                            </TouchableOpacity>
                            <Text style={styles.y_n}>
                          Yes
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.Survey_container}>
                <View style={styles.Question_container}>
                    <Text style={styles.Question_text}>
                        {`13.) Do you have difficulty paying medical bills? `}
                    </Text>
                    <View style={styles.chek_box_container}>
                        <View style={styles.option_container}>
                            <TouchableOpacity onPress={() => setCheck(!isCheck)}
                                style={styles.checkBox}>
                                {
                                    isCheck ?
                                        <View style={{ height: 10, width: 10, backgroundColor: 'black', borderRadius: 50, }}>

                                        </View>
                                        :
                                        null}
                            </TouchableOpacity>
                            <Text style={styles.y_n}>
                            No
                            </Text>
                        </View>
                        <View style={styles.option_container}>

                            <TouchableOpacity onPress={() => {
                                if (isCheck === false) {
                                    setCheck(true);
                                }
                                else {
                                    setCheck(false)
                                }
                            }}
                                style={styles.checkBox}>
                                {
                                    !isCheck &&
                                    (<View style={{ height: 10, width: 10, backgroundColor: 'black', borderRadius: 50, }}>

                                    </View>)
                                }
                            </TouchableOpacity>
                            <Text style={styles.y_n}>
                          Yes
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.Survey_container}>
                <View style={styles.Question_container}>
                    <Text style={styles.Question_text}>
                        {`7.) Has a doctor ever told you that you have high blood pressure? `}
                    </Text>
                    <View style={styles.chek_box_container}>
                        <View style={styles.option_container}>
                            <TouchableOpacity onPress={() => setCheck(!isCheck)}
                                style={styles.checkBox}>
                                {
                                    isCheck ?
                                        <View style={{ height: 10, width: 10, backgroundColor: 'black', borderRadius: 50, }}>

                                        </View>
                                        :
                                        null}
                            </TouchableOpacity>
                            <Text style={styles.y_n}>
                                No
                            </Text>
                        </View>
                        <View style={styles.option_container}>

                            <TouchableOpacity onPress={() => {
                                if (isCheck === false) {
                                    setCheck(false);
                                }
                                else {
                                    setCheck(false)
                                }
                            }}
                                style={styles.checkBox}>
                                {
                                    !isCheck &&
                                    (<View style={{ height: 10, width: 10, backgroundColor: 'black', borderRadius: 50, }}>

                                    </View>)
                                }
                            </TouchableOpacity>
                            <Text style={styles.y_n}>
                                Yes
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={[styles.Survey_container,{marginTop:10,}]}>
                <View style={styles.Question_container}>
                    <Text style={styles.Question_text}>
                        {`8.) How many hours per week do you engage in physical activity? `}
                    </Text>
                    <SafeAreaView style={[styles.SafeAreaView2]}>
                        <Input
                            value={age}
                            SafeAreaView={styles.inputContainer1}
                            onChangeText={(text) => setAge(text)}
                        />
                    </SafeAreaView>
                </View>
            </View>
            <View style={styles.Survey_container}>
                <View style={styles.Question_container}>
                    <Text style={styles.Question_text}>
                        {`9.) How frequently do you consume fruit?`}
                    </Text>
                    <View style={styles.chek_box_container}>
                        <View style={styles.option_container}>
                            <TouchableOpacity onPress={() => setCheck(!isCheck)}
                                style={styles.checkBox}>
                                {
                                    isCheck ?
                                        <View style={{ height: 10, width: 10, backgroundColor: 'black', borderRadius: 50, }}>

                                        </View>
                                        :
                                        null}
                            </TouchableOpacity>
                            <Text style={styles.y_n}>
                            Once a Day or More
                            </Text>
                        </View>
                        <View style={styles.option_container}>

                            <TouchableOpacity onPress={() => {
                                if (isCheck === false) {
                                    setCheck(true);
                                }
                                else {
                                    setCheck(false)
                                }
                            }}
                                style={styles.checkBox}>
                                {
                                    !isCheck &&
                                    (<View style={{ height: 10, width: 10, backgroundColor: 'black', borderRadius: 50, }}>

                                    </View>)
                                }
                            </TouchableOpacity>
                            <Text style={styles.y_n}>
                            Less Than Once a Day
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.Survey_container}>
                <View style={styles.Question_container}>
                    <Text style={styles.Question_text}>
                        {`10.) How frequently do you consume vegetables? `}
                    </Text>
                    <View style={styles.chek_box_container}>
                        <View style={styles.option_container}>
                            <TouchableOpacity onPress={() => setCheck(!isCheck)}
                                style={styles.checkBox}>
                                {
                                    isCheck ?
                                        <View style={{ height: 10, width: 10, backgroundColor: 'black', borderRadius: 50, }}>

                                        </View>
                                        :
                                        null}
                            </TouchableOpacity>
                            <Text style={styles.y_n}>
                            Once a Day or More
                            </Text>
                        </View>
                        <View style={styles.option_container}>

                            <TouchableOpacity onPress={() => {
                                if (isCheck === false) {
                                    setCheck(true);
                                }
                                else {
                                    setCheck(false)
                                }
                            }}
                                style={styles.checkBox}>
                                {
                                    !isCheck &&
                                    (<View style={{ height: 10, width: 10, backgroundColor: 'black', borderRadius: 50, }}>

                                    </View>)
                                }
                            </TouchableOpacity>
                            <Text style={styles.y_n}>
                            Less Than Once a Day
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
            </ScrollView>
        </View>
    )
}

export default Survey