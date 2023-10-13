import React, { useState, useEffect } from 'react'

import EmployeeSearch from './EmployeeSearch'
import EmployeeTable from './EmployeeTable'
import EmployeeCreate from './EmployeeCreate'

const EmployeeDirectory = () => {
	const [employees, setEmployees] = useState([])
	const [filteredData, setFilteredData] = useState('')

	useEffect(() => {
		const getData = async () => {
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

	const handleResetTable = () => {
		setFilteredData('')
	}
	return (
		<div className="container mx-auto p-4">
			<h1 className="text-3xl font-semibold mb-4">Employee Directory</h1>
			{filteredData ? (
				<>
					<EmployeeTable employees={filteredData} />
					<button
						onClick={handleResetTable}
						className="bg-zinc-700 rounded-xl px-6 py-3"
					>
						Reset Table
					</button>
				</>
			) : (
				<>
					<EmployeeSearch setFilteredData={setFilteredData} />
					<EmployeeTable employees={employees} />
					<EmployeeCreate />
				</>
			)}
		</div>
	)
}

export default EmployeeDirectory
