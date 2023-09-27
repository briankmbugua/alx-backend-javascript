/* eslint-disable */
import signUpUser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject";

export default function handleProfileSignup(firstName, lastName, fileName) {
    const promises = [signUpUser(firstName, lastName), uploadPhoto(fileName)];

    return Promise.allSettled(promises).then((values) => {
        if (values[1].status === "rejected") {
            console.log(values[1].reason);
            return;
        }
        const user = values[0].value;
        const photo = values[1].value;
        console.log(`${user.firstName} ${user.lastName} ${photo.body}`);
    }).catch(() => {
        console.log('Signup system offline');
    });
}