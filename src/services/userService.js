import {JPA_SERVER} from "../constants/endpoints";



export const findUserInfo = (userId) =>
    fetch(`${JPA_SERVER}/api/user/${userId}`)
        .then(response => response.json());

export const createUser = async (userInfo) => {
    const response = await fetch(`${JPA_SERVER}/create/users`, {
        method: "POST",
        body: JSON.stringify(userInfo),
        headers: {
            'content-type': 'application/json'
        }
    })

    return await response.json()
}

export default {
    findUserInfo,
    createUser
}
