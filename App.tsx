import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';
import {NavigationContainer} from "@react-navigation/native";
import RootNavigator from "./navigator/RootNavigator";


export default function App() {
    // @ts-ignore - TailwindProvider is missing a type definition
    return (
        <TailwindProvider utilities={utilities}>
            <NavigationContainer>
                <RootNavigator />
            </NavigationContainer>
        </TailwindProvider>

    );
}
