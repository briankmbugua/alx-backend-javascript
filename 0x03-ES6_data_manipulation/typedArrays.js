export let buffer = new ArrayBuffer(8);
export let byteView = new Uint8Array(buffer);
export let floatView = new Float64Array(buffer);


console.log(byteView);
console.log(floatView);