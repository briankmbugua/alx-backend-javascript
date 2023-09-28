/* eslint-disable */
export default function guardrail(mathFunction) {
    let queue = [];
    try {
        queue.push(mathFunction());
    } catch (e) {
        queue.push(String(e.message));
    }
    queue.push("Guardrail was processed");
    return queue;
}