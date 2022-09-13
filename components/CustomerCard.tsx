import React from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import useCustomerOrders from "../hooks/useCustomerOrders";
import {useTailwind} from "tailwind-rn";
import {useNavigation} from "@react-navigation/native";
import {CustomerScreenNavigationProps} from "../screens/CustomersScreen";
import {Card, Icon} from "@rneui/themed";

type Props = {
    userId: string;
    name: string;
    email: string;
};

function CustomerCard({email, name, userId}: Props) {
    const {loading, error, orders} = useCustomerOrders(userId);
    const tw = useTailwind();
    const navigation = useNavigation<CustomerScreenNavigationProps>();

    return (
        <TouchableOpacity>
            <Card containerStyle={tw("p-5 rounded-lg")}>
                <View>
                    <View style={tw("flex-row justify-between")}>
                        <View>
                            <Text style={tw("text-2xl font-bold")}>{name}</Text>
                            <Text style={[tw("text-sm"), {color: "#59C1CC"}]}>ID: {userId}</Text>
                        </View>

                        <View style={tw("flex-row items-center justify-end")}>
                            <Text style={{ color: "#59C1CC"}}>{loading ? "loading..." : `${orders.length} x`}</Text>
                            <Icon
                                style={tw("mb-5 ml-auto")}
                                name="box"
                                type="entypo"
                                color="#59C1CC"
                                size={50}
                            />
                        </View>
                    </View>
                </View>
                <Card.Divider/>
                <Text>{email}</Text>
            </Card>
        </TouchableOpacity>
    );
}

export default CustomerCard;