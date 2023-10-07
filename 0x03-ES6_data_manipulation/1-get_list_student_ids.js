/* eslint-disable */

export default function getListStudents(args) {
    let arr = []
    if (Array.isArray(args)) {
        return args.map(arg => arg.id)
    } else {
        return [];
    }
}