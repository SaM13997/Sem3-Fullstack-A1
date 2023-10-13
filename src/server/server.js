const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 5000
const Employee = require('../models/Employee')

app.use(express.json())
app.use(cors())
mongoose.connect(
	'mongodb+srv://webdevsam251:y5WPpiLFi6QKmuFd@sem3-react.vc08bfs.mongodb.net/EMSDB?retryWrites=true&w=majority',
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	}
)
app.get('/api/employees', async (req, res) => {
	try {
		const employees = await Employee.find({}) // Fetch all employees
		console.log('hi')
		console.log(employees)
		res.json(employees)
	} catch (error) {
		console.error(error)
		res.status(500).json({ error: 'Error fetching data' })
	}
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
