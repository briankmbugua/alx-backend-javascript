export function getResponseFromAPI() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Got a response from the API');
        }, 2000);
    });
}