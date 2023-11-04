export default function cleanSet(set, startString) {
    const filteredValues = Array.from(set).filter(value => value.startsWith(startString));
    for(let element in filteredValues) {
        console.log(element)
        const modified = element.substring(0, 3);
        return modified
    }
}