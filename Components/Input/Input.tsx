import React from "react";
import { View, Text, Image, StyleSheet, SafeAreaView, TextInput } from "react-native"



function Input() {
    return (
        <SafeAreaView style={styles.mainContainer}>

            <View style={{ marginTop: 40 }} >
                <Text style={styles.titleHeading}>What is
                    <Text style ={{fontWeight:900}}> your</Text>
                    {'\n'} name?
                </Text>
            </View>


            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 40 }}>
                <Image style={styles.mainImage} source={require('../../assets/name_icon.png')} />
            </View>


            <View style={styles.containerTextInput}>
                <TextInput style={styles.textInput}
                    placeholder="Write your name"
                    placeholderTextColor={"red"}
                />
            </View>

        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    mainContainer: {
        width: "100%",
        height: "100%",
        backgroundColor: "#852AEF"
    },

    titleHeading: {
        color: "white",
        fontSize: 40,
        fontWeight: "500",
        textAlign: "center"
    },

    mainImage: {
        width: 200, height: 200
    },

    containerTextInput: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50
    },

    textInput: {
        color: "green",
        fontSize: 20,
        backgroundColor: "white",
        height: 50,
        width: "90%",
        borderRadius: 25,
        paddingLeft: 20

    }


})





export default Input;