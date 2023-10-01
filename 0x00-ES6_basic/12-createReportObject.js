/* eslint-disable */
export default function createReportObject(employeesList) {
    const employees = employeesList;

    return {
        average: employees.reduce((acc, employee) => acc + employee.income, 0) / employees.length,
        employeeCount: employees.length,
        max: Math.max(...employees.map(employee => employee.income)),
        min: Math.min(...employees.map(employee => employee.income)),
    };
}
