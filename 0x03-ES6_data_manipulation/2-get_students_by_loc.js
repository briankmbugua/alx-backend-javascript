/* eslint-disable */
export default function getStudentsByLocation(students, city) {
    students.filter(function(student) { 
        return student.location === city
    })
}