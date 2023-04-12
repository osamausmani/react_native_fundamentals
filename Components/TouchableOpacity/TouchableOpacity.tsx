import React from "react";
import { View, Text, Image, StyleSheet, SafeAreaView, TextInput, Alert, TouchableOpacity } from "react-native"

var name = ""


function onButtonClick() {
    if (name == "") {
        Alert.alert("Please Enter The Name")
    }
    else if (name.length < 5) {
        Alert.alert("Please use name of atleast 5 characters.")
    }
    else {
        Alert.alert("Sucess.")
    }
}

function onBackButtonClick(){
    Alert.alert("Cancel Action Performed.")

}


function CTouchableOpacity() {
    return (
        <SafeAreaView style={styles.mainContainer}>

            <View style={{ marginTop: 40 }} >
                <Text style={styles.titleHeading}>  What is
                    <Text style={{ fontWeight: 900 }}> your</Text>
                    {'\n'} name ?
                </Text>
            </View>


            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 40 }}>
                <Image style={styles.mainImage} source={require('../../assets/name_icon.png')} />
            </View>


            <View style={styles.containerTextInput}>
                <TextInput style={styles.textInput}
                    placeholder="Write your name"
                    placeholderTextColor={"red"}
                    onChangeText={(text) => name = text}
                />
            </View>


            {/* <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.touchButton} onPress={onButtonClick} >
                    <Text style={styles.touchButtonText} > Submit</Text>
                </TouchableOpacity>
            </View> */}


            <View style={styles.buttonContainerMulti}>
                <TouchableOpacity style={styles.touchButtonTransparent} onPress={onBackButtonClick} >
                    <Text style={styles.touchButtonText} > Go Back</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.touchButton} onPress={onButtonClick} >
                    <Text style={styles.touchButtonText} > Submit</Text>
                </TouchableOpacity>

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

    buttonContainer: {
        marginTop: 40,
        width: 200,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },

    buttonContainerMulti: {
        position:'absolute',
        bottom:0,
        marginBottom:40,
        display:"flex",
        flexDirection:'row',
        marginTop: 40,
        width: "90%",
        height: 40,
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center'
    },


    touchButton: { width: 100, height: 40, backgroundColor: "black", justifyContent: 'center', alignItems: 'center', borderRadius: 6 },
    touchButtonText: { color: "white", fontSize: 20 },

    touchButtonTransparent: { width: 100, height: 40, backgroundColor: "transparent", justifyContent: 'center', alignItems: 'center', borderRadius: 6, },

})





export default CTouchableOpacity;