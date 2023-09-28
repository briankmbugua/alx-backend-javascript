/* eslint-disable */
function guardrail(mathFunction) {
    let queue = [];
    try {
        queue.push(mathFunction());
    } catch (e) {
        queue.push(e.message);
    }
    queue.push("Guardrail was processed");
    return queue;
}

export default guardrail;