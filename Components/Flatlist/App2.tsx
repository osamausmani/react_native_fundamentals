import React from "react";
import { View, Text, ScrollView, SafeAreaView, Image, StyleSheet, TouchableOpacity, FlatList } from "react-native"


const personArr = [
    {
        id: 1,
        name: "Osama",
        age: 26,
        gender: "Male",
        position: "Developer",
        profileImage: "https://reactnative.dev/img/tiny_logo.png"
    },
    {
        id: 2,
        name: "Ali",
        age: 22,
        gender: "Male",
        position: "Manager",
        profileImage: "https://reactnative.dev/img/tiny_logo.png"

    },
    {
        id: 3,
        name: "Fatima",
        age: 20,
        gender: "Female",
        position: "Support Engineer",
        profileImage: "https://cdn.vectorstock.com/i/preview-1x/03/49/blank-avatar-photo-placeholder-icon-vector-45930349.webp"

    },
    {
        id: 4,
        name: "ABC",
        age: 23,
        gender: "Female",
        position: "Support Engineer",
        profileImage: "https://cdn.vectorstock.com/i/preview-1x/03/49/blank-avatar-photo-placeholder-icon-vector-45930349.webp"

    },
    {
        id: 3,
        name: "Fatima",
        age: 20,
        gender: "Female",
        position: "Support Engineer",
        profileImage: "https://cdn.vectorstock.com/i/preview-1x/03/49/blank-avatar-photo-placeholder-icon-vector-45930349.webp"

    },
    {
        id: 4,
        name: "ABC",
        age: 23,
        gender: "Female",
        position: "Support Engineer",
        profileImage: "https://cdn.vectorstock.com/i/preview-1x/03/49/blank-avatar-photo-placeholder-icon-vector-45930349.webp"

    },
    {
        id: 3,
        name: "Fatima",
        age: 20,
        gender: "Female",
        position: "Support Engineer",
        profileImage: "https://cdn.vectorstock.com/i/preview-1x/03/49/blank-avatar-photo-placeholder-icon-vector-45930349.webp"

    },
    {
        id: 4,
        name: "ABC",
        age: 23,
        gender: "Female",
        position: "Support Engineer",
        profileImage: "https://cdn.vectorstock.com/i/preview-1x/03/49/blank-avatar-photo-placeholder-icon-vector-45930349.webp"

    },
    {
        id: 3,
        name: "Fatima",
        age: 20,
        gender: "Female",
        position: "Support Engineer",
        profileImage: "https://cdn.vectorstock.com/i/preview-1x/03/49/blank-avatar-photo-placeholder-icon-vector-45930349.webp"

    },
    {
        id: 4,
        name: "ABC",
        age: 23,
        gender: "Female",
        position: "Support Engineer",
        profileImage: "https://cdn.vectorstock.com/i/preview-1x/03/49/blank-avatar-photo-placeholder-icon-vector-45930349.webp"

    }
]


const PersonItem = ({ item }) => (
    <View style={{ backgroundColor: "grey", marginBottom: 1, justifyContent: 'center', padding: 10 }}>




        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', width: 120 }}> Name:  </Text>
            <Text style={{ fontSize: 20, fontWeight: 'normal' }}> {item.name}  </Text>
        </View>


        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', width: 120 }}> Age:  </Text>
            <Text style={{ fontSize: 20, fontWeight: 'normal' }}> {item.age}  </Text>
        </View>

        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', width: 120 }}> Gender:  </Text>
            <Text style={{ fontSize: 20, fontWeight: 'normal' }}> {item.gender}  </Text>
        </View>

        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', width: 120 }}> Position:  </Text>
            <Text style={{ fontSize: 20, fontWeight: 'normal' }}> {item.position}  </Text>
        </View>


        <View style={{ width: 50, height: 50, backgroundColor: 'red', position: "absolute", top: 10, right: 10, borderRadius: 25 }}>
            <Image
                style={{width:"100%", height:"100%", borderRadius:25}}
                source={{
                    uri: item.profileImage,
                }}
            />
        </View>

    </View>
);


function App() {
    return (
        <SafeAreaView>
            <FlatList
                data={personArr}
                renderItem={({ item }) => <PersonItem item={item} />}
            />
        </SafeAreaView>
    )
}

export default App