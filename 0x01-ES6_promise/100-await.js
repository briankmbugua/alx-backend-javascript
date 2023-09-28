/* eslint-disable */
import { uploadPhoto, createUser } from "./utils.js";
async function asyncUploadUser() {
    try {
        return {
            photo: await uploadPhoto(),
            user: await createUser()
        };
    } catch (e) {
        return {
            photo: null,
            user: null
        };
    }
}