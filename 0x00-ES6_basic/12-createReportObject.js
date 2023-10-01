/* eslint-disable */
export default function createReportObject(employeesList) {
    const employees = employeesList;
    const average = employees.reduce((acc, employee) => acc + employee.income, 0) / employees.length;
    const max = Math.max(...employees.map(employee => employee.income));
    const min = Math.min(...employees.map(employee => employee.income));
    return {
        average,
        employeeCount: employees.length,
        max,
        min,
    };
}