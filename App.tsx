import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';
import CustomersScreen from "./screens/CustomersScreen";


export default function App() {
    // @ts-ignore - TailwindProvider is missing a type definition
    return (
        <TailwindProvider utilities={utilities}>
            <CustomersScreen />
        </TailwindProvider>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
