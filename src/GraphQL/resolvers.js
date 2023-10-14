const Employee = require('../models/Employee')
const resolvers = {
	Query: {
		employees: async () => {
			try {
				const employees = await Employee.find({})
				return employees
			} catch (error) {
				throw new Error('Error fetching data')
			}
		},
		searchEmployees: async (parent, args) => {
			// Build a query based on the provided filters
			const query = {}

			Object.keys(args.input).forEach((key) => {
				if (args.input[key] !== '') {
					query[key] = args.input[key]
				}
			})

			try {
				const employees = await Employee.find(query)
				return employees
			} catch (error) {
				throw new Error('Error fetching filtered data')
			} finally {
				console.log(query)
			}
		},
	},
}

module.exports = resolvers
