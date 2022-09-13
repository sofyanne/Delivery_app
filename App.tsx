import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';
import {NavigationContainer} from "@react-navigation/native";
import RootNavigator from "./navigator/RootNavigator";
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";


const client = new ApolloClient({
    uri: 'http://localhost:5001/api/deliverapp',
    cache: new InMemoryCache(),
});

export default function App() {
    // @ts-ignore - TailwindProvider is missing a type definition
    return (
        <TailwindProvider utilities={utilities}>
            <ApolloProvider client={client} >
                <NavigationContainer>
                    <RootNavigator/>
                </NavigationContainer>
            </ApolloProvider>
        </TailwindProvider>

    );
}
