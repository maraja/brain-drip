import { ApolloClient } from "@apollo/client";
import { HttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import { InMemoryCache } from "apollo-cache-inmemory";
import { useAuthToken } from "#root/auth/authToken";

export const cache = new InMemoryCache();

const httpLink = new HttpLink({
    credentials: "include",
    uri: 'http://localhost:7000'+ '/graphql'
});

const authLink = setContext((_, { headers }) => {
    const [token] = useAuthToken();
    if (!token) {
        return { headers };
    }
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        }
    }
});

const client = new ApolloClient({
    cache,
    link: authLink.concat(httpLink)
});


export default client;