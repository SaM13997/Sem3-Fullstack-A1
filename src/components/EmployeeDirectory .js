// EmployeeDirectory.js
import React from 'react'
import EmployeeSearch from './EmployeeSearch'
import EmployeeTable from './EmployeeTable'
import EmployeeCreate from './EmployeeCreate'

const EmployeeDirectory = () => {
	return (
		<div className="container mx-auto p-4">
			<h1 className="text-3xl font-semibold mb-4">Employee Directory</h1>
			<EmployeeSearch />
			<EmployeeTable />
			<EmployeeCreate />
		</div>
	)
}

export default EmployeeDirectory
