import React from "react";
import { View, Text, ScrollView, SafeAreaView, Image, StyleSheet, TouchableOpacity, FlatList } from "react-native"


const countryName = "Pak"



const PersonItem = ({ value }) => (
    <View style={{ backgroundColor: value == "Ali" || value == "Osama" ? "green" : "red", height: 50, marginBottom: 1, justifyContent: 'center' }}>
        <Text style={{ fontSize: 20 }}>Name: {value} </Text>
    </View>
);


function App() {
    return (
        <SafeAreaView>
            <FlatList
                data={["Osama", "Ali", "Zain", "Zain", "Zain", "Zain", "Zain"]}
                renderItem={({ item }) => <PersonItem value={item}  />}
            />
        </SafeAreaView>
    )
}

export default App