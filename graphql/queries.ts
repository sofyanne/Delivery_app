import { gql, useQuery } from '@apollo/client';

export const GET_CUSTOMERS = gql`
    query GetCustomers   {
        getCustomers {
            name
            value {
                email
                name
            }
        }
    }
`;

export const GET_ORDERS = gql`
    query GetOrders   {
        getOrders {
            value {
                Address
                City
                createdAt
                carrier
                lat
                lng
                shippingCost
                trackingId
                trackingItems {
                    customer {
                        email
                        name
                    }
                    customer_id
                    items {
                        item_id
                        name
                        price
                        quantity
                    }
                }
            }
        }
    }
`;