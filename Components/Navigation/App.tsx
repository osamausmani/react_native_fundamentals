import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ScreenA from "./ScreenA";
import ScreenB from "./ScreenB";


const Stack = createNativeStackNavigator();


const App = () => {
    return (
        <NavigationContainer>

            <Stack.Navigator>

                <Stack.Screen
                    name="ScreenA"
                    component={ScreenA}
                    options={{ headerShown: false }}
                />


                <Stack.Screen
                    name="ScreenB"
                    component={ScreenB}
                    options={{ headerShown: false }}

                />

            </Stack.Navigator>

        </NavigationContainer>
    );
};

export default App;