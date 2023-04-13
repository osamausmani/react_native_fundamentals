import React from "react";
import { View, Text, ScrollView, SafeAreaView, Image, StyleSheet } from "react-native"

function App() {
    return (
        <SafeAreaView style={{ height: "100%" }}>

            <View>

                <Text> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae placerat orci. Praesent dictum, purus non molestie placerat, risus ligula consequat tortor, in vestibulum lectus diam sed leo. Cras lorem nisi, viverra nec orci a, posuere venenatis urna. Nullam id dui ornare, finibus velit vel, commodo turpis. Nullam ligula quam, laoreet et consectetur eget, bibendum at nulla. Fusce ut felis ex. Nunc eget tellus vitae nisl auctor posuere. Nulla volutpat ligula sit amet tortor viverra commodo. Aenean non libero quam. Etiam efficitur viverra luctus. Nullam eros est, pulvinar eu quam ut, viverra convallis nibh. Quisque eget urna sed eros malesuada aliquet. Nulla id nisl nec sem luctus viverra. Nulla eu ligula in nunc tempor viverra vel eget tortor. Mauris bibendum vulputate eros.
                    Pellentesque sed felis sed augue tincidunt semper ac id risus. Ut condimentum dolor non nibh dignissim vehicula. Quisque mauris augue, lobortis eget enim in, commodo ullamcorper massa. Nunc at est bibendum, elementum ex quis, lacinia nisl. Mauris tristique tempor enim in faucibus. Nunc eget faucibus mauris. Aliquam vel mi elit. Ut id convallis magna. Nulla scelerisque tellus neque, eget ultrices odio blandit at.</Text>

                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 40 }}>
                    <Image style={styles.mainImage} source={require('../../assets/name_icon.png')} />
                </View>





                {/* <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 40 }}>
                    <Image style={styles.mainImage} source={require('../../assets/name_icon.png')} />
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 40 }}>
                    <Image style={styles.mainImage} source={require('../../assets/name_icon.png')} />
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 40 }}>
                    <Image style={styles.mainImage} source={require('../../assets/name_icon.png')} />
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 40 }}>
                    <Image style={styles.mainImage} source={require('../../assets/name_icon.png')} />
                </View>
                 */}

            </View>

            <ScrollView style={{ height: "50%" }}>

                <Text> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae placerat orci. Praesent dictum, purus non molestie placerat, risus ligula consequat tortor, in vestibulum lectus diam sed leo. Cras lorem nisi, viverra nec orci a, posuere venenatis urna. Nullam id dui ornare, finibus velit vel, commodo turpis. Nullam ligula quam, laoreet et consectetur eget, bibendum at nulla. Fusce ut felis ex. Nunc eget tellus vitae nisl auctor posuere. Nulla volutpat ligula sit amet tortor viverra commodo. Aenean non libero quam. Etiam efficitur viverra luctus. Nullam eros est, pulvinar eu quam ut, viverra convallis nibh. Quisque eget urna sed eros malesuada aliquet. Nulla id nisl nec sem luctus viverra. Nulla eu ligula in nunc tempor viverra vel eget tortor. Mauris bibendum vulputate eros.
                    Pellentesque sed felis sed augue tincidunt semper ac id risus. Ut condimentum dolor non nibh dignissim vehicula. Quisque mauris augue, lobortis eget enim in, commodo ullamcorper massa. Nunc at est bibendum, elementum ex quis, lacinia nisl. Mauris tristique tempor enim in faucibus. Nunc eget faucibus mauris. Aliquam vel mi elit. Ut id convallis magna. Nulla scelerisque tellus neque, eget ultrices odio blandit at.</Text>

                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 40 }}>
                    <Image style={styles.mainImage} source={require('../../assets/name_icon.png')} />
                </View>

            </ScrollView>



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
        position: 'absolute',
        bottom: 0,
        marginBottom: 40,
        display: "flex",
        flexDirection: 'row',
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



export default App