const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
// const app = express()
const PORT = process.env.PORT || 5000
const Employee = require('../models/Employee')
const { ApolloServer } = require('apollo-server-express')
const typeDefs = require('../GraphQL/schema')
const resolvers = require('../GraphQL/resolvers')
mongoose.connect(
	'mongodb+srv://webdevsam251:y5WPpiLFi6QKmuFd@sem3-react.vc08bfs.mongodb.net/EMSDB?retryWrites=true&w=majority',
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	}
)

async function startServer() {
	const app = express()

	app.use(express.json())
	app.use(cors())

	// Set up Apollo Server
	const server = new ApolloServer({ typeDefs, resolvers })

	// Start Apollo Server
	await server.start()

	// Apply Apollo Server middleware to your Express app
	server.applyMiddleware({ app, path: '/graphql' })

	// Start the Express server
	const PORT = process.env.PORT || 4000
	app.listen(PORT, () => {
		console.log(`Server is running on port ${PORT}`)
	})
}

startServer()

// app.get('/api/employees', async (req, res) => {
// 	try {
// 		const employees = await Employee.find({}) // Fetch all employees
// 		console.log('hi')
// 		console.log(employees)
// 		res.json(employees)
// 	} catch (error) {
// 		console.error(error)
// 		res.status(500).json({ error: 'Error fetching data' })
// 	}
// })

// app.post('/api/employees/search', async (req, res) => {
// 	const queryData = req.body || ''

// 	const query = {}

// 	for (const key in queryData) {
// 		if (queryData[key] !== '') {
// 			query[key] = queryData[key]
// 		}
// 	}
// 	try {
// 		const employees = await Employee.find(query)
// 		console.log('hi')
// 		console.log(employees)
// 		res.json(employees)
// 	} catch (error) {
// 		console.error(error)
// 		res.status(500).json({ error: 'Error fetching data' })
// 	}
// })

// app.post('/api/employees/create', async (req, res) => {
// 	const employeeData = req.body

// 	try {
// 		const newEmployee = new Employee(employeeData)
// 		await newEmployee.save()
// 		res.status(201).json(newEmployee)
// 	} catch (error) {
// 		console.error('Error creating employee:', error)
// 		res.status(500).json({ error: 'Error creating employee' })
// 	}
// })

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
