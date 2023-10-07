/* eslint-disable */
export default function updateStudentGradeByCity(students, city, newGrades) {
    return students
    .filter(students => students.location === city)
    .map(student => {
        const gradeObj = newGrades.find(grade => grade.studentId === student.id);
        const grade = gradeObj ? gradeObj.grade : "N/A"
        return {...student, grade};
    })
}