import { ChakraProvider } from '@chakra-ui/react'
import client from '../server/apollo-client'
import {
  ApolloProvider,
} from "@apollo/client";
function MyApp({ Component, pageProps }) {
  return (
		<ApolloProvider client={client}>
			<ChakraProvider>
				<Component {...pageProps} />
			</ChakraProvider>
		</ApolloProvider>
  )
}

export default MyApp