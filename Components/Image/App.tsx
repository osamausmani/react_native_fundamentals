import React from "react";
import { View, Text, Image, StyleSheet, SafeAreaView } from "react-native"



function App() {
    return (
        <SafeAreaView style={styles.mainContainer}>

            <View style={{ marginTop:40}} >
                <Text style={styles.titleHeading}>What is your {'\n'} name?</Text>
            </View>

           
            <View style={{justifyContent:'center', alignItems:'center', marginTop:40}}>
                <Image style={styles.mainImage} source={require('../../assets/name_icon.png')}/> 
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

    mainImage:{
        width:200, height: 200
    }


})





export default App;