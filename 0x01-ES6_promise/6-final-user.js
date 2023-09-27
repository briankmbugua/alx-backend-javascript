/* eslint-disable */
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

function handleProfileSignup(firstName, lastName, fileName) {
    const promises = [
        signUpUser(firstName, lastName),
        uploadPhoto(fileName),
    ];
    return Promise.allSettled(promises)
        .then((results) => {
            // Map the results to the required structure
            return results.map((result) => ({
                status: result.status,
                value: result.status === 'fulfilled' ? result.value : result.reason,
            }));
        });
}

export default handleProfileSignup;
