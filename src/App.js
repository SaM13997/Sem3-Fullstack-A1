import './App.css'
import EmployeeDirectory from './components/EmployeeDirectory '
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
	uri: 'http://localhost:4000/graphql', // Your GraphQL server endpoint
	cache: new InMemoryCache(),
})

function App() {
	return (
		<ApolloProvider client={client}>
			<div className="App">
				<EmployeeDirectory client={client} />
			</div>
		</ApolloProvider>
	)
}

export default App
