import React, { useState, useEffect } from 'react'

const EmployeeTable = () => {
	const [employees, setEmployees] = useState([])

	useEffect(() => {
		const getData = async () => {
			// Fetch data from the API when the component mounts
			try {
				const response = await fetch('http://localhost:5000/api/employees')
				if (!response.ok) {
					throw new Error(`Error fetching data1: ${response.status}`)
				}
				const data = await response.json()
				setEmployees(data)
			} catch (error) {
				console.error('Error fetching data2:', error)
			}
		}
		getData()
	}, [])

	return (
		<div className="rounded-lg overflow-hidden ">
			<h2 className="text-lg font-semibold text-gray-800 py-2 px-4 bg-gray-200">
				Employee Table
			</h2>
			<div className="overflow-x-auto">
				<table className="min-w-full">
					<thead>
						<tr className="bg-gray-200 border border-zinc-700">
							<th className="px-4 py-2 border border-zinc-700">First Name</th>
							<th className="px-4 py-2">Last Name</th>
							<th className="px-4 py-2">Age</th>
							<th className="px-4 py-2">Date Of Joining</th>
							<th className="px-4 py-2">Title</th>
							<th className="px-4 py-2">Department</th>
							<th className="px-4 py-2">Employee Type</th>
							<th className="px-4 py-2">Current Status</th>
						</tr>
					</thead>
					<tbody>
						{employees.map((employee) => (
							<tr key={employee._id} className="border-b">
								<td className="px-4 py-2 border border-zinc-700">
									{employee.FirstName}
								</td>
								<td className="px-4 py-2">{employee.LastName}</td>
								<td className="px-4 py-2">{employee.Age}</td>
								<td className="px-4 py-2">
									{new Date(employee.DateOfJoining).toDateString()}
								</td>
								<td className="px-4 py-2">{employee.Title}</td>
								<td className="px-4 py-2">{employee.Department}</td>
								<td className="px-4 py-2">{employee.EmployeeType}</td>
								<td className="px-4 py-2">
									{employee.CurrentStatus ? 'Working' : 'Retired'}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default EmployeeTable
