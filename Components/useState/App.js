import React from "react";
import { View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, Alert } from "react-native"
import { useState, useEffect } from "react";





function App() {

    const [num, setNum] = useState(0);

    const [name, setName] = useState("");

    function onButtonClick() {

        setNum(num + 1)
        // if (name == "") {
        //     Alert.alert("Please Enter The Name")
        // }
        // else if (name.length < 5) {
        //     Alert.alert("Please use name of atleast 5 characters.")
        // }
        // else {
        //     Alert.alert("Sucess.")
        // }
    }


    useEffect(() => {
        console.log("useEffect is triggered")

        if (num == 10) {
            Alert.alert("Counter is equall to 10")
        }


    });



    return (
        <SafeAreaView style={styles.mainContainer}>

            <View style={{ marginTop: 40 }} >
                <Text style={styles.titleHeading}>Counter</Text>
                <Text style={styles.titleHeading}>{num}</Text>
            </View>


            <View style={styles.buttonContainerMulti}>

                <TouchableOpacity style={styles.touchButton} onPress={onButtonClick} >
                    <Text style={styles.touchButtonText} >INCREMENT</Text>
                </TouchableOpacity>

            </View>



            <View style={styles.containerTextInput}>
                <TextInput style={styles.textInput}
                    placeholder="Write your name"
                    placeholderTextColor={"red"}
                    onChangeText={(text) => setName(text)}
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

    },


    touchButton: { width: 150, height: 40, backgroundColor: "black", justifyContent: 'center', alignItems: 'center', borderRadius: 6 },
    touchButtonText: { color: "white", fontSize: 20 },

    touchButtonTransparent: { width: 100, height: 40, backgroundColor: "transparent", justifyContent: 'center', alignItems: 'center', borderRadius: 6, },

    buttonContainerMulti: {
        position: 'relative',
        bottom: 0,
        marginBottom: 40,
        display: "flex",
        flexDirection: 'row',
        marginTop: 40,
        width: "90%",
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },

})





export default App;