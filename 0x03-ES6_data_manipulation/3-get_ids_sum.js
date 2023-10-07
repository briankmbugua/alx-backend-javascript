/* eslint-disable */
export default function getStudentIdsSum(students) {
    const sumIds = students.reduce(function(accumulator, currentValue){
        let id = currentValue.id
         return accumulator + id
    }, 0);
    return sumIds
}