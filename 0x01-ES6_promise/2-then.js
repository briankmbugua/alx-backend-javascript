/* eslint-disable */
export default function handleResponseFromAPI(promise) {
    return new Promise((resove, reject) => {
        if (promise) {
            resove({
                status: 200,
                body: 'Success'
            })
        }
        else {
            reject(new Error())
        }
    }).finally(() => {
        console.log('Got a response from the API')
    })
}