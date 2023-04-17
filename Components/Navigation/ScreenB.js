import React from "react";
import { View, Text, Image, StyleSheet, SafeAreaView, Button } from "react-native"




function ScreenB({navigation, route}) {
    return (
        <SafeAreaView style={styles.mainContainer}>

            <View style={{ marginTop: 40 }} >
                <Text style={styles.titleHeading}>Welcome, </Text>
                <Text style={styles.titleHeading}>{route.params.userName}</Text>
                <Text style={styles.titleHeading}>{route.params.age}</Text>
                <Text style={styles.titleHeading}>{route.params.country}</Text>

            </View>


            <View style={styles.buttonContainer}>
                <Button title="Move to previous Screen"
                    color={"black"}
                    onPress={()=> navigation.pop()}


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

    buttonContainer:{
        marginTop:40,
        width:400,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center'
    }


})





export default ScreenB;