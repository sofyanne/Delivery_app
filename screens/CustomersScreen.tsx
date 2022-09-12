import {View, Text, SafeAreaView} from "react-native";
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useTailwind} from 'tailwind-rn';


const CustomersScreen = () => {
    const tw = useTailwind();

    return (
        <SafeAreaView>
            <NavigationContainer>
                <Text style={tw("text-blue-500")}>CustomersScreens</Text>
            </NavigationContainer>
        </SafeAreaView>
    );
};

export default CustomersScreen;